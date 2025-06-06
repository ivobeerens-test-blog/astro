---
title: "VMware Tools 10.3.0 recalled, check you're vSphere environment!"
pubDate: "2018-09-07T09:06:31.000Z"
categories: 
  - "vSphere"
tags: 
  - "powercli"
  - "VMware"
  - "VMware-tools"
coverImage: "1-3.png"
author: Ivo Beerens
url: /2018/09/07/vmware-tools-10-3-0-recalled-check-youre-vsphere-environment/
---

Yesterday VMware released a Knowledge Base article that VMware Tools version 10.3.0 is recalled because issues with the VMXNET3 network driver for Windows on ESXi 6.5. The issues can cause a Purple Diagnostic Screen (PSOD) or guest network connectivity loss. Because of these issues, VMware Tools 10.3.0 is recalled and no longer available.

**UppubDate: September 12, 2018**: VMware Tools 10.3.2. is released that fixes the VMXNET3 issue. More information can be found here, [link](https://t.co/QsI8XZuuRa).

Action is required if VMware Tools 10.3.0 is deployed and the following is true:

- vSphere ESXi 6.5 hosts
- VM Hardware Version 13
- Windows 8/Windows Server 2012 or higher guest OSes

If this is the case uninstall VMware Tools 10.3.0 and reinstall VMware Tools 10.2.5 from the VMware Downloads page, [link](https://my.VMware.com/web/VMware/details?downloadGroup=VMTOOLS1025&productId=614). For other configurations, **no immediate action is required**.

I created a simple PowerCLI script to identify VMware Tools version 10.3.0 and display the Hardware Version and Operating System. With this script you can do quick check if you're vSphere 6.5 environment contains VMware Tools 10.3.0 with Hardware Version 13  and Windows 8/Windows 2012 or higher VMs.

[![](images/1-3-300x55.png)](images/1-3.png)

The script '"identVMwaretools.ps1" can be found on my GitHub repository, [link](https://github.com/ibeerens/PowerCLI). The KB can be found here, [link](https://kb.VMware.com/s/article/57796).