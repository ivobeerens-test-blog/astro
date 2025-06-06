---
title: "Installing VMware ESXi fails on Cisco UCS Blades with FlexFlash SD cards"
pubDate: "2018-01-31T20:42:22.000Z"
categories: 
  - "esxi"
tags: 
  - "cisco-ucs"
  - "esxi-2"
author: Ivo Beerens
url: /2018/01/31/installing-vmware-esxi-fails-cisco-ucs-blade-flexflash-sd-cards/
---

When implementing a new Cisco UCS environment I encountered the following error when trying to install VMware ESXi 6.5 on a Cisco UCS Blade server with a FlexFlash SD card:

> Operation failed
> This program has encountered an error:
> partedUtil failed with message: "Error: Can’t have a a partition outside the disk! Unable to read partition table for device /vmfs/devices/disks...................

[![](images/error-270x300.jpg)](images/error.jpg)

The solutions is simple, perform a format of the SD card in UCSM before installing VMware ESXi. The format option can be found under:
`Equipment -> Servers -> Select the server -> Inventory -> Storage - Controller -> Select the FlexFlash controller -> Format SD Cards`

[![](images/flexflash-300x200.jpg)](images/flexflash.jpg)