---
title: "Installing Update Rollup (UR) 3 for System Center 2012 R2 Virtual Machine Manager"
description: "Guide for installing SCVMM 2012 R2 Update Rollup 3 with Linux support updates."
pubDate: "2014-08-01T12:53:54.000Z"
categories: 
  - "hyper-v"
  - "scvmm"
tags: 
  - "hyper-v-2"
  - "scvmm"
  - "system-center"
  - "update-2"
author: Ivo Beerens
url: /2014/08/01/installing-update-rollup-3-system-center-2012-r2-virtual-machine-manager/
---

Update rollup (UR) 3 for System Center 2012 R2 Virtual Machine Manager is released this week. This update includes a Linux guest agent upgrade to support the following new operating systems:
- Ubuntu Linux 14.04 (32-bit)
- Ubuntu Linux 14.04 (64-bit)

This update also includes the following:

- Host DHCP extension driver upgrade
- Several performance improvements??????
- Several Management Pack package improvements

And a huge list of issues that are fixed. More information can be found in the Microsoft KB article found here, [link](http://support.microsoft.com/kb/2965414).

The update can be installed by using Windows Update, WSUS or manual downloading the files and execute them. After the installation of Update rollup 3 execute the SQL Script against the SCVMM database. The SQL script is listed in the Microsoft KB. Don't forget to update the VMM agents on all the infrastructure server.

[![2014-08-01_14h21_25](images/2014-08-01_14h21_25-1024x530.png)](images/2014-08-01_14h21_25.png)

The update of the VMM agents doesn't require a reboot. The Update Rollup 3 agent version is **3.2.7672.0**.

**Host DHCP extension driver upgrade**

Update Rollup 3 includes an VMM DHCP server extension update for the Hyper-V host. When using Hyper-V Network Virtualization networks with dynamic IP address allocation, the VM may not get an IP address for a few minutes after the reboot. The new DHCP extension fix this problem. To check the DHCP Extension driver version use the following PowerShell command on the Hyper-V host:

```
Get-WmiObject -Class win32_product -Filter 'Name = "Microsoft System Center Virtual Machine Manager DHCP Server(x64)"
```

For more tips see my earlier blog post "Tips for deploying SCVMM 2012 R2 Rollup 2", [Link](https://www.ivobeerens.nl/2014/04/30/tips-for-deploying-scvmm-2012-r2-rollup-pack-2/).