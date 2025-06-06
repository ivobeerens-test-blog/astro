---
title: "Backup the ESXi configuration"
description: "PowerCLI script to automate ESXi host configuration backups across a vCenter environment."
pubDate: "2013-08-09T08:24:33.000Z"
categories: 
  - "backup"
  - "VMware ESXi"
  - "powercli"
tags: 
  - "backup"
  - "VMware ESXi"
  - "powercli"
author: Ivo Beerens
url: /2013/08/09/backup-the-esxi-configuration-and-update-the-status-in-vcenter/
---

I create a simple PowerCLI script that backups all the VMware ESXi host configurations that are connected to a vCenter Server. This script can be scheduled to make for example every week a backup of the ESXi server configs. You can easily customize the script for your own needs.

```powershell
#Variables
$Folder = "D:\Backup\BCK-ESXi"
$FolderOld = "D:\Backup\BCK-ESXi\_old"
$vc= "vcenterserver-fqdn"
# Connect to local vCenter Server
Connect-ViServer
# Move existing backup files to the old directory
Move-Item ($Folder + "\*.tgz") $FolderOld -force -ErrorAction SilentlyContinue
# Backkup ESXi configuration
Get-VMHost | ForEach-Object {
    $_ | Get-VMHostFirmware -BackupConfiguration -DestinationPath $folder
}
# Disconnect session vCenter
Disconnect-VIserver -Confirm:$false
```
