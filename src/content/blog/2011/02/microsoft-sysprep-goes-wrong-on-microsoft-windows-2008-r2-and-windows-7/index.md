---
title: "Sysprep goes wrong on Microsoft Windows 2008 R2 and Windows 7"
pubDate: "2011-02-11T08:05:14.000Z"
categories: 
  - "sysprep"
  - "windows-2008-r2"
  - "windows-7"
tags: 
  - "sysprep"
  - "windows2008"
  - "windows7"
author: Ivo Beerens
url: /2011/02/11/microsoft-sysprep-goes-wrong-on-microsoft-windows-2008-r2-and-windows-7/
---

This week I encountered a problem with Sysprepping a Microsoft Windows 2008 R2 VM after cloning. I cloned an existing VM and used a Customization Specification in vSphere vCenter for the Sysprep. When the Sysprepped Microsoft Windows 2008 R2 VM reboots, the following message appears:
> Windows could not finish configuring the system. To attempt to resume configuration, restart the computer.

Every time when restarting the VM, the message appears. After some troubleshooting such as disable services and active software before the Sysprep I found Microsoft Knowledgebase article  “_**A Windows 7 or a Windows Server 2008 R2 image deployment process stops when you try to deploy the image on another computer**_” [KB981542](http://support.microsoft.com/kb/981542). It stated that the Sysprep problem occurs if the original operating system contains a registry key that is larger than 8 kilobytes (KB). After installing the hotfix I was able the Sysprep the Microsoft Windows 2008 R2 VM. The Sysprep problem occurs on Windows7 and Microsoft Windows 2008 R2.



