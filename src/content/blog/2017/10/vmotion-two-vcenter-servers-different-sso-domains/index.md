---
title: "vMotion between two vCenter Servers with different SSO domains"
description: "PowerCLI script for cross vCenter vMotion between different SSO domains without downtime."
pubDate: "2017-10-11T07:15:22.000Z"
tags: 
  - "powercli"
  - "vSphere"
author: Ivo Beerens
url: /2017/10/11/vmotion-two-vcenter-servers-different-sso-domains/
---

Last week i did my first vMotion between two vCenter Servers with different SSO domain by using PowerCLI. This functionality is also known as "cross vCenter vMotion" and is not included in the vSphere Web Client yet. Without downtime it's possible to live migrate VMs from one vCenter Server to another. Cool stuff!

Before starting the following requirements must be met:

- VMware vSphere 6.0 and later for the source and destination environment
- PowerCLI 6.5 and later
- vSphere Enterprise Plus license per ESXi host
- An active connection to the source and destination vCenter Server

I created a simple script to vMotion the VMs between the two SSO domains. See the more information section for more advanced PowerCLI scripts from for example William Lam and Romain Decker.

In the script the following variables must be defined:

- Source vCenter Server, username and password
- Destination vCenter Server, username and password
- VM name will be moved
- Destination vSwitch
- Destination Portgroup
- Destination datastore

Only VMs with one NIC are supported

PowerCLI example script

```
Import-Module VMware.PowerCLI
  
#Variables
$sourceVC = 'sourcevc'
$sourceVCUsername = 'administrator@vsphere.local'
$sourceVCPassword= 'password!'
  
$destVC = 'destinationvc'
$destVCUsername = 'administrator@vsphere.local'
$destVCPassword= 'password'
$destESXi = 'destinationesxi'
  
$vmname = 'vmname'
$Switchname = 'destinationswitch'
$NetworkName = 'destinationvlan'
$datastorename = 'destinationdatastore'
  
# Connect to the vCenter Servers
$sourceVCConn = Connect-VIServer -Server $sourceVC -user $sourceVCUsername -password $sourceVCPassword
$destVCConn = Connect-VIServer -Server $destVC -user $destVCUsername -password $destVCPassword
  
$vm = Get-VM $vmname -Server $sourceVCConn
$networkAdapter = Get-NetworkAdapter -VM $vm -Server $sourceVCConn
  
$destination = Get-VMHost -name $destESXi -Server $destVCConn
$destinationPortGroup = Get-VirtualPortGroup -VirtualSwitch $Switchname -name $NetworkName -VMHost $destination
$destinationDatastore = Get-Datastore -name $datastorename -Server $destVCConn
  
Move-VM -VM $vm -Destination $destination -NetworkAdapter $networkAdapter -PortGroup $destinationPortGroup -Datastore $destinationDatastore
```
With this script I migrated a couple of VMs between to vSphere 6.5 environment with different SSO domains without any downtime.

More information:

- PowerCLI blog on the Move-VM cmdlet, [link](https://blogs.VMware.com/PowerCLI/2017/01/spotlight-move-vm-cmdlet.html)
- William Lam, Automation Cross vCenter vMotion, [link](http://www.virtuallyghetto.com/2016/05/automating-cross-vcenter-vmotion-xvc-vmotion-between-the-same-different-sso-domain.html)
- Romain Decker Cross vMotion script from, [link](https://github.com/cloudmaniac/Cross-SSO_vMotion)