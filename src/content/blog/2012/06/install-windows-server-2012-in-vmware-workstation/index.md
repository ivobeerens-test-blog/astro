---
title: "Install Windows Server 2012 in VMware Workstation"
pubDate: "2012-06-04T19:14:28.000Z"
categories: 
  - "VMware-workstation"
  - "windows-server-2012"
tags: 
  - "VMware"
  - "windows-server-2012"
  - "workstation"
author: Ivo Beerens
url: /2012/06/04/install-windows-server-2012-in-vmware-workstation/
---

This procedure describes how to install Windows Server 2012 in VMware Workstation. The following versions are used:

- VMware Workstation Technology Preview 2012 e.x.p Build-646643
- Windows Server 2012 Release Candidate Datacenter Build 8400

In VMware Workstation Technology Preview 2012 create a new VM with the following settings:
- New Virtual Machine
- Custom (advanced)
- Workstation Tech Preview
- Select “I will install the operating system later”
- Select “Microsoft Windows” and select as version “Windows 8 x64”
- Set the Name and Location
- Minimal 1 processor, 1 core
- 2048 MB memory
- Select “Use network address translation (NAT)”
- Select “LSI Logic SAS”
- Create a new virtual disk
- SCSI
- 60 GB disk size
- Leave default disk file
- Finish
- After the VM is created, edit virtual Machine settings and browse for  the Windows Server 2012 ISO in the the CD/DVD option

[![image](images/image_thumb.png)]

- Remove the VM from VMware Workstation by clicking on the X icon

[![image](images/image_thumb4.png)]

- Edit the VMX file (i use Notepad++)  and add the following line  to the end to of the VMX file:
```
vmGenCounter.enable = FALSE
```
- Add the VM back to VMware Workstation by clicking on the \*.VMX file

- During the installation choose the Windows Server 2012 Release Candidate (Server wit GUI)

[![image](images/image_thumb2.png)]

- When the installation is ready you have a working Windows Server 2012 server

[![image](images/image_thumb3.png)]

- Install VMware tools