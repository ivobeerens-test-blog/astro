---
title: "VMware ESX Post installation configuration via PowerCLI"
pubDate: "2010-02-10T14:36:55.000Z"
categories: 
  - "powercli"
  - "PowerShell"
tags: 
  - "configuration"
  - "post-config"
  - "powercli"
  - "PowerShell"
author: Ivo Beerens
url: /2010/02/10/vmware-esx-post-installation-configuration-via-powercli/
---

I made a simple example script using the VMware PowerCLI that can be used to do the post installation configuration of a VMware ESX 4 server. This script does the following things:

- Connect to VMware ESX server
- Set the SC memory to 800MB
- Creates vSwitch2 and add vmnic2 and vmnic3
- Add several PortGroups and VLANs to vSwitch2
- Remove default PortGroup VM Network
- Creates a VMkernel VMotion port with IP address, subnetmask and VLAN
- Add vmnic0 and vmnic1 to vSwitch0, set for the VMotion port vmnic1 active and vmnic0 standby and for the Service Console port vmnic0 active and vmnic1 standby
- Configure NTP servers and open the firewall
- Sets advanced settings Disk.UseDeviceReset to 0 and Disk.UseLUNReset  to 1
- Sets he Qlogic HBA queue depth and the Disk.SchedNumReqOutstandig to 64
- Enable VMhost Startup and stop

Here’s the PowerCLI script:  

```powershell
# Title: VMware ESX4 Post config #  
# Filename:    esx4postconfig.sp1 #   
# Created by: Ivo Beerens #   
# pubDate: February 2010 #   
# Version: 1.0 #  
# Website: www.ivobeerens.nl #   
# E-mail: ivo\[AT\]ivobeerens.nl #   
  
# Variables #  
# vCenter name and port #  
$vcserver \= "vc01"  
$portvc \= "443"  
#Service Console memory #  
$SCMemory \= 800  
# default PortGroup #  
$DefaultPG \= Get-VirtualPortgroup -Name 'VM Network'  
# VMotion IP, subnetmask and VLAN  
$VMotionIP \= “172.16.1.50“  
$VMotionSubnet = “255.255.0.0“  
$VMotionVLan ="3"  
\# HBA Queue depth #  
$HBAqueudepth = 64  
\# vSwitch names #  
$Switch1 ="vSwitch0"  
$Switch2 ="vSwitch2"  
  
Connect-VIServer $vcserver -User root -Password idontknow -port $portvc  
  
# Set SC memory to 800MB #  
Get-VMHost | Get-View | %{(Get-View -Id $\_.ConfigManager.MemoryManager).ReconfigureServiceConsoleReservation($SCMemory\*1mb)}  
  
# Create vSwitch1 and add vmnic2 and vmnic3 #  
New-VirtualSwitch -Name $Switch2 -Nic vmnic2,vmnic3  
  
# Add PortGroups and VLANs  to the vSwitch2 #  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN999 Management" -VLANID 999  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN100 Servers" -VLANID 100  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN99 Clients Ser-D" -VLANID 99  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN98 Clients Ser-B" -VLANID 98  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN33 Secure LAN" -VLANID 33  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN32 DMZ3" -VLANID 32  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN31 DMZ1" -VLANID 31  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN30 DMZ0" -VLANID 30  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN7 VOiP" -VLANID 7  
get-vmhost | Get-VirtualSwitch -Name $Switch2 | New-VirtualPortGroup -Name"VLAN1 Default"\# Remove default Port Group after default installation #  
Remove-VirtualPortGroup -VirtualPortGroup $DefaultPG -Confirm:$false  
  
# Creates a VMkernel port VMotion on vSwitch0 #  
New-VMHostNetworkAdapter -PortGroup “VMotion“ -VirtualSwitch $Switch1 -IP $VMotionIP -SubnetMask $VMotionSubnet -VMotionEnabled:$true  
  
# Set VLAN of the VMotion VMkernel #  
$VMotionPG = Get-VirtualPortgroup -Name 'VMotion'  
Set-VirtualPortGroup -VirtualPortGroup $VMotionPG -VlanId $VMotionVLan  
  
# Add vmnic0 and vmnic1 to vSwitch0 #  
$vs = get-virtualswitch -name $Switch0  
Set-VirtualSwitch -VirtualSwitch $vs -Nic vmnic0,vmnic1  
  
# Set VMotion vmnic1 active vmnic0 standby #  
get-virtualportgroup -name VMotion | Get-NicTeamingPolicy | Set-NicTeamingPolicy -MakeNicActive vmnic1  
get-virtualportgroup -name VMotion | Get-NicTeamingPolicy | Set-NicTeamingPolicy -MakeNicStandby vmnic0  
  
# Set Service Console vmnic0 active, vmnic1 standby #  
get-virtualportgroup -name 'Service Console' | Get-NicTeamingPolicy | Set-NicTeamingPolicy -MakeNicActive vmnic0  
get-virtualportgroup -name 'Service Console' | Get-NicTeamingPolicy | Set-NicTeamingPolicy -MakeNicStandby vmnic1  
  
# Configures NTP, add NTP servers, starts NTP and open the firewall port #  
Add-VmHostNtpServer -NtpServer "0.VMware.pool.ntp.org"Add-VmHostNtpServer -NtpServer "1.VMware.pool.ntp.org"Add-VmHostNtpServer -NtpServer "2.VMware.pool.ntp.org"Get-vmhostfirewallexception "NTP Client" | Set-VMHostFirewallException -enabled:$true  
  
# Advanced settings instellen #  
Set-VMHostAdvancedConfiguration -Name"Disk.UseDeviceReset" -Value 0  
Set-VMHostAdvancedConfiguration -Name"Disk.UseLunReset" -Value 1  
  
# Set the queuedepth for the Qlogic HBA and SchedNumReqOutstanding setting #  
Get-VMhostModule "qla2xxx" | Set-VMHostModule -Options"ql2xmaxqdepth\=$HBAqueudepth"  
Set-VMHostAdvancedConfiguration -Name"Disk.SchedNumReqOutstanding" -Value $HBAqueudepth  
  
# Enable VMHostStartup #  
$VMstart = Get-VMHostStartPolicy  
Set-VMHostStartPolicy -VMHostStartPolicy $VMstart -Enabled:$true -StartDelay 60 -StopDelay 60 -StopAction GuestShutDown  
  
# Disconnect #  
disconnect-viserver -confirm:$false
```

It’s easy to adjust the settings for your need. This shows the strength to use the PowerCLI for doing automation in VMware. If you have suggestions please let me know.
