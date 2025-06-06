---
title: "Create a VMware ESXi 5 PXE unattended scripted installation using Windows"
pubDate: "2011-09-20T13:53:30.000Z"
categories: 
  - "esxi"
  - "kickstart"
  - "pxe"
  - "scripted"
tags: 
  - "esxi-2"
  - "kickstart"
  - "pxe"
  - "scripted"
author: Ivo Beerens
url: /2011/09/20/create-vmware-esxi-5-pxe-unattended-scripted-installation-using-windows/
---

The most information available on how-to perform a unattended scripted installation of VMware ESXi 5 is based on Linux. Here is a procedure how-to create a scripted installation of VMware ESXi 5 using Microsoft Windows.

Here is an overview of the boot process:

[![image](images/image_thumb11.png)]

#### What do we need

The following software must be downloaded:
- [Syslinux 3.86](http://www.kernel.org/pub/linux/utils/boot/syslinux/) (This is the Syslinux version VMware supports)
- [FileZilla Server 0\_9\_39](http://filezilla-project.org/download.php?type=server)
- [TFTPD 4.00](http://tftpd32.jounin.net/)
- [Notepad ++](http://notepad-plus-plus.org/)
- [VMware ESXi 5 ISO](https://customerconnect.vmware.com/downloads/#all_products)

#### Step 1 Windows XP

This procedure is tested with Microsoft Windows XP SP2. The following requirements must be met:
- In Windows XP use a fixed IP. In this example we use 192.168.1.1/24 IP address
- Make sure there is enough free disk space available (approximately 500 MB needed)
- Disable the Windows firewall

#### Step 2 Create directory structure

Create the following directory structure in the root of the C: partition:
```
C:\PXEboot
C:\PXEboot\\pxelinux.cfg
C:\PXEboot\\kickstart
```

#### Step 3 Copy the content of the ESXi 5 ISO

Mount the VMware ESXi 5 ISO and copy the content to following folder: 
```c:\PXEboot_ directory```

#### Step 4 Copy the Syslinux files

The Syslinux files allow the target ESXi server to boot the ESXi installer.

- Extract Syslinux 3.86 and:
- Copy the _pxelinux.0_ and _menu.c32_ files to the C:\PXEboot directory.
- Overwrite the menu.c32 file

#### Step 5 Install & Configure tftpd32

The Tftpd32 utility gets the function DHCP and TFTP server.

- Run Tftpd32.exe and make the following configuration settings:

| | |
| --- | --- |
| ![image13](images/image13.png) | ![image14](images/image14.png) |
| Choose: TFTP Server & DHCP Server | Point the base directory to c:\PXEboot |
| ![image15](images/image15.png) | ![image16](images/image16.png) |
| Create a DHCP range | Edit the ini file c:\program files\tftpd32\tftpd32.ini. Add the DHCP options 066 with DHCP server IP address and 067 pxelinux.0 |
| | |

- Restart and run the tftpd32.exe utility

#### Step 6 Install  & configure FileZilla server

- Install the FileZilla Server with the default settings
- Create a user username: VMware password: VMware

[![image](images/image_thumb16.png "image")](images/image17.png)

- Add a shared folder c:\PXEboot\Kickstart folder with the default rights

[![2011-09-19 18h32_16](images/2011-09-19-18h32_16_thumb.jpg)]

#### Step 7 Create default file

Create a file named default (Use notepad ++ for the file creation) and save the file in the C:\PXEboot\pxelinux.cfg directory. Here is an example default script:

```
DEFAULT menu.c32
MENU TITLE ESXi 5 Boot menu
NOHALT 1
PROMPT 0
TIMEOUT 80

LABEL install 
 KERNEL mboot.c32 
 APPEND -c boot.cfg 
 MENU LABEL ^ESXi-5 Interactively install

Label ESXi 5 install scripted 
 KERNEL mboot.c32 
 APPEND -c boot.cfg ks=ftp://VMware:VMware@192.168.1.1/ks.cfg +++ 
 MENU LABEL ^ESXi5-01 Scripted install 
 IPAPPEND 1

LABEL hddboot 
 LOCALBOOT 0x80 
 MENU LABEL ^Boot from local disk

```

If you want to install more VMware ESXi 5 servers you can add extra entries in the default file and point them to separate Kickstart file.

#### Step 8 Create ks.cfg file

Create a Kickstart file named ks.cfg (Use notepad ++ for the file creation ) and place the file in the _c:\PXEboot\Kickstart_ directory. Here is a sample ks.cfg script:
```
#Sample kickstart scripted installation
vmaccepteula
rootpw VMw@re
install --firstdisk --overwritevmfs
network --bootproto=static --ip=192.168.250.21 --gateway=192.168.250.1 --nameserver=192.168.250.6 --netmask=255.255.255.0 --hostname=esxi5-01.beerens.local --device=vmnic0 --addvmportgroup=0
reboot

%firstboot --interpreter=busybox
# Rename local datastore name
vim-cmd hostsvc/datastore/rename datastore1 "$(hostname -s)-local-storage-1"
# DNS names
esxcli system hostname set --fqdn=esxi5-01.beerens.local
esxcli network ip dns search add --domain=beerens.local
# DNS server addresses
esxcli network ip dns server add --server=192.168.250.6
esxcli network ip dns server add --server=192.168.250.1
# SSH and ESXi shell
vim-cmd hostsvc/enable\_ssh
vim-cmd hostsvc/start\_ssh
vim-cmd hostsvc/enable\_esx\_shell
vim-cmd hostsvc/start\_esx\_shell
```

#### Step 9 Test the installation

Boot the server and select _ESXi5-01 Scripted Install_ option to test the scripted installation.

[![image](images/image_thumb17.png)]