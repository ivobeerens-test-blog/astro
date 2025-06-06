---
title: "Quick tip: Create a bootable VMware ESXi stick"
pubDate: "2018-09-16T07:19:57.000Z"
categories: 
  - "esxi"
tags: 
  - "bootable"
  - "esxi-2"
  - "usb"
author: Ivo Beerens
url: /2018/09/16/quick-tip-create-a-bootable-vmware-esxi-key/
---

There are multiple tools available to create a bootable VMware ESXi USB stick/drive/key such as:
- UNetbootin, [link](https://unetbootin.github.io/)
- Rufus, [link](https://rufus.ie/)

My favorite tool to create a VMware ESXi USB stick/key is Rufus. I use Rufus because it's small, fast, Windows-based, open-sourced and the tool is updated frequently.

### Requirements

Requirements for creating a VMware ESXi key:

- Windows Operating System (Windows 7 or later)
- Rufus download
- VMware ESXi ISO download.

### Create a USB Stick

To create a VMware ESXi stick is easy. Perform the following steps:

- Start Rufus
- Select the USB device
- Select the ESXi ISO
- Press Start
- Data on the USB key will be destroyed.

[![](images/boot-205x300.png)](images/boot.png) [![](images/2-205x300.png)](https://www.ivobeerens.nl/wp-content/uploads/2018/11/2.png)

When the progress status bar is READY, the VMware ESXi bootable is created and ready to boot. I tested the creation of the ESXi USB stick with the latest version of VMware ESXi 6.7 and VMware ESXi 7.



