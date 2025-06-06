---
title: "VMware Fusion 5 and Microsoft Office 2013 screen refresh problem"
description: "How to fix Office 2013 display issues in VMware Fusion 5 due to DirectX incompatibility."
pubDate: "2012-09-05T20:11:05.000Z"
categories: 
  - "fusion"
  - "office-2013"
  - "VMware"
tags: 
  - "fusion"
  - "office-2013"
  - "VMware"
author: Ivo Beerens
url: /2012/09/05/vmware-fusion-5-and-microsoft-office-2013-screen-refresh-problem/
---

When using Microsoft Office 2013 on Windows 7 or Windows 8 in VMware Fusion 5 the screen is not properly refreshed and leaving black regions.

![](images/image4_thumb.png)

This is because VMware Fusion 5 offers DirectX9 for Windows 7 and Windows 8, but Microsoft Office 2013 requires DirectX10. This is a know issue in VMware Fusion 5.

There are two work arounds available:

- Disable 3D acceleration in the VM settings
- Disable hardware acceleration in the Microsoft Office 2013 application

#### Disable 3D acceleration in the VM settings

- Shut Down the VM
- Go to Settings and click on  Display
- Turn the Accelerate 3D Graphics setting to OFF

![](images/image_thumb.png)

- Start the VM

#### Disable hardware acceleration in the Microsoft Office 2013 application

- Open the Office application you want to turn disable the hardware acceleration
- Click on Settings – Advanced – Disable hardware acceleration