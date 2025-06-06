---
title: "Prevent corruption of the ESXi bootable SD card"
pubDate: "2017-03-14T14:55:14.000Z"
categories: 
  - "esxi"
tags: 
  - "esxi-2"
  - "VMware"
author: Ivo Beerens
---

To activate this feature the following advanced settings must be changed on each ESXi host:

- Set the advanced ToolsRamdisk option to 1 by using this command:
    
    \[code language="text"\]esxcli system settings advanced set -o /UserVars/ToolsRamdisk -i 1 \[/code\]
    
- After changing the setting reboot the host.

I created a simple PowerCLI script that sets the advanced setting \`toolsRamdisk\` value to '1' on all the ESXi hosts.

\[code language="PowerShell"\] <# Author : Ivo Beerens Blog : www.ivobeerens.nl Twitter : @ibeerens Pre-requisite : ESXi 6.0 U3 Set : Set UserVars.ToolsRamdisk to the value 1 #>

Get-Module -ListAvailable VMware\* | Import-Module Connect-VIServer Foreach ($vmhost in Get-VMHost | where {$\_.ConnectionState -eq "Connected"}) { Write-Host "Host: $($vmhost.name)" -ForegroundColor Green Get-AdvancedSetting -Entity $vmhost -Name UserVars.ToolsRamdisk | Set-AdvancedSetting -Value ‘1’ -Confirm:$false } \[/code\]

After running this script all the ESXi hosts must be rebooted. **More information**: VMware KB: High frequency of read operations on VMware Tools image may cause SD card corruption (2149257), [Link](https://kb.VMware.com/selfservice/microsites/search.do?cmd=displayKC&docType=kc&externalId=2149257&sliceId=1&docTypeID=DT_KB_1_1&dialogID=355414078&stateId=1%200%20355416185)



