---
title: "Windows 10 with Horizon View Agent generates BSOD"
pubDate: "2015-07-16T13:18:19.000Z"
categories: 
  - "horizon-view"
  - "windows-10"
tags: 
  - "horizon-view"
  - "windows-10"
author: Ivo Beerens
url: /2015/07/16/windows-10-with-horizon-view-agent-generates-bsod/
---

After installing the VMware Horizon View Agent (6.1.1) on a Windows 10 (tested with build 10240), it generates a Blue Screen Of Death (BSOD) when pressing Ctrl+Alt+Del/Ins.

[![PSOD](images/PSOD-300x233.png)](images/PSOD.png)

The error is:
> DRIVER_IRQ_NOT_LESS_OR_EQUAL (kbdclass.sys).

To fix the problem (The solution was found on the Microsoft Community site, [link](http://answers.microsoft.com/en-us/insider/forum/insider_wintp-insider_devices/build-10130-enterprise-x64-bsod-with-VMware/d8c52293-2f4f-42fd-86dc-b002b3ae8b09)):

- RDP to the Windows 10 VM
- Edit `HKLM\SYSTEM\CurrentControlSet\Control\Class\{4D36E96B-E325-11CE-BFC1-08002BE10318}\UpperFilters`
- Put the kbdclass before the vmkbd value
- Reboot the VM

[![Upperclasses](images/Upperclasses-300x165.png)](images/Upperclasses.png) [![Uppper2](images/Uppper2-300x278.png)](images/Uppper2.png)

After changing the UpperFilters value I was able to login the Horizon View desktop without BSOD.