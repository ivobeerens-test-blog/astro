---
title: "Optimize Windows 8 for Virtual Desktop Infrastructure (VDI) environments"
description: "Microsoft's guidance and tools for optimizing Windows 8 desktops in VDI environments."
pubDate: "2013-04-12T07:07:55.000Z"
categories: 
  - "vdi"
  - "view"
  - "windows-8"
tags: 
  - "vdi"
  - "view"
  - "windows-8"
author: Ivo Beerens
url: /2013/04/12/optimize-windows-8-for-virtual-desktop-infrastructure-vdi-environments/
---

Optimize and tuning a Windows 8 desktop in a VDI environment is important to reduce for example the CPU, IOPS and the memory footprint. During the Microsoft Management Summit (MMS) 2013 a breakout session about optimizing a Windows 8 desktop for Virtual Desktop Infrastructure (VDI) is held. The session has three main subjects:

- **Microsoft Guidance for Windows 8 Configuration VDI desktop**. What version of Windows 8 do I need, how many CPUs, memory, disk partitioning etc.
- **Detailed Review of Component Configuration**. What services do I need to enable or disable, do I need to disable SuperFetch? All the optimization settings are available in VBS script
- **Recommendations for performance testing**. This section is about the (third party) tools that can be used to do performance testing.

. The Windows 8 VDI sizing and optimizations can be used for example on the following VDI solutions:

- VMware Horizon View
- Citrix XenDesktop
- Microsoft VDI

A Windows 8 VDI optimization VBS script is available. This script does all the optimization work for you. Review all the settings before executing if the fits for your environment! There will be a PowerShell version available in the future. The Windows 8 optimization VBS script can be found [here](http://blogs.technet.com/b/jeff_stokes/archive/2013/04/09/hot-off-the-presses-get-it-now-the-windows-8-vdi-optimization-script-courtesy-of-pfe.aspx).