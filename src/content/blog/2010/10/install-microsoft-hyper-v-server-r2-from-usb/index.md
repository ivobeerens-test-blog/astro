---
title: "Create a bootable USB to install Windows 8 Server or  Hyper-V Server 8"
pubDate: "2010-10-21T12:11:45.000Z"
categories: 
  - "hyper-v"
  - "usb"
  - "windows-8"
tags: 
  - "boot"
  - "hyper-v-2"
  - "hyper-v-r2"
  - "usb"
  - "windows-8"
author: Ivo Beerens
url: /2010/10/21/install-microsoft-hyper-v-server-r2-from-usb/
---

Not all servers nowadays have DVD player installed. Sometimes it is handy to boot from USB and install for example Windows Server 8. Here’s a example how to make the USB stick bootable for the following OS versions:
- Windows Server 8
- Hyper-V Server 8
- Server 2008 R2
- Hyper-V Server R2

### **Preparation:**

- Need a 4 GB USB memory stick or more
- Download the desired ISO and save it

Stick the USB stick on a  free USB port on your computer equipped with a Windows OS. For this example I used Windows7 as Operating System. Clear the USB stick and create a partition on it by using the following command’s:

Open the command prompt ((make sure you run the cmd prompt as administrator)

Commands:
```
diskpart 
list disk "list the disk in your system including the USB"
select disk "USB number"
clean
create partition primary
active
format fs=fat32 quick
assign
exit
```
Mount the ISO  and copy all the content of the desired ISO to USB stick. For mounting the ISO I used “Deamon Tools Lite”.

Now the bootable stick is ready for use.  Boot your server with the stick and your able to install Windows 8, Windows 8 Server, 2008 R2 or Hyper-V server 8.