---
title: "Run VMware Workstation and Microsoft Hyper-V together in Windows 10"
pubDate: "2020-09-17T14:51:32.000Z"
tags: 
  - "hyper-v-2"
  - "VMware"
  - "workstation"
author: Ivo Beerens
url: /2020/09/17/run-vmware-workstation-and-microsoft-hyper-v-together-on-windows-10/
---

In 2013 I wrote a blog post that it was not possible to run VMware Workstation when the Hyper-V role was enabled ([link](https://www.ivobeerens.nl/2013/12/16/running-hyper-v-and-vmware-workstation-on-windows-8-x/)). Since VMware Workstation 15.5 it is possible to run VMware Workstation and the Hyper-V role together.

Requirements:
- Windows 10 2004 or newer
- VMware Workstation 15.5.5 or newer
- Supported CPU: Intel Sandy Bridge or an AMD Bulldozer or newer

I tested this with my Windows 10 laptop with the Hyper-V role enabled, the Windows Subsystem for Linux running, and VMware Workstation 16 Pro. In Hyper-V and VMware Workstation a Windows 10 VM is running. In the screenshot below you see all the components started:

[![](images/1-300x164.jpg)](images/1-scaled.jpg)

This is very cool, now you can run VMware Workstation and Hyper-V role at the same time even with the WSL active.