---
author: Ivo Beerens
title: "VMware ESX 3.5 Update 3 VM's spontaneously reboot."
pubDate: "2008-11-19T09:51:12.000Z"
categories: 
  - "update"
  - "VMware"
  - "VMware-35-update-3"
tags: 
  - "patches"
  - "VMware-35-update-3"
url: /2008/11/19/VMware-esx-35-update-3-vms-spontaneously-reboot/
---

A week ago i upgraded a customers environment to VMware ESX 3.5 Update 3 and VC 2.5 Update 3. After the upgrade some Virtual Machines (VM) spontaneously rebooted. After investing the problem we saw that after a VMotion action the spontaneously reboot occurred.

We disabled in HA the option "Virtual Machine Monitoring" and set DRS to manual.  The problem with Virtual Machine monitoring is:

> The Virtual Machine heartbeats are being dropped which is triggered by vMotion and the VM gets reset by the HA feature as it thinks it has gone offline. Since the feature is now off it should be safe to turn on DRS again.

There are more people who have this problem, read the following post on the VMware forum, [3.5U3 - any guinea pigs yet?](http://communities.VMware.com/thread/178417?tstart=0&start=0).

I made a support request @ VMware. The told me today that 20 November patch 10 for VMware 3.5 Update 3 will be released. Patch 10 fixes SOME random reboot problems in Update 3. I hope the patch will resolve this nasty issue.



