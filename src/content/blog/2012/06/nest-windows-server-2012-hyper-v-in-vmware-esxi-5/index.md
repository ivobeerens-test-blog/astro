---
title: "Nest Windows Server 2012 Hyper-V in VMware ESXi 5"
pubDate: "2012-06-28T09:57:07.000Z"
categories: 
  - "esxi"
  - "hyper-v"
  - "windows-server-2012"
tags: 
  - "esxi-2"
  - "hyper-v-2"
  - "windows-server-2012"
author: Ivo Beerens
url: /2012/06/28/nest-windows-server-2012-hyper-v-in-vmware-esxi-5/
---

In this blog post I explain how you can install Windows 2012 Server Release Candidate (RC) in VMware ESXi and enable the Hyper-V role. It is possible to build a Hyper-V cluster LAB and live migrate VMs between the virtual Hyper-V nodes on one VMware ESXi 5 host.

Before you begin make sure:

- Windows 2012 Server RC ISO is place on a datastore
- VMware ESXi 5 Update 1 is installed with the latest updates
- To be able to boot 64bit guest OSes, make sure that on the VMware ESXi host the line below is added to the **/etc/VMware/config** file on your physical ESXi 5.x host:

`vhv.allow = TRUE`

Create a new VM with the following settings (adjust the settings for your own need):

- Configuration – **Custom**

- Name – **HV2012-02**

- Storage – Choose **VMFS**

- Virtual Machine Version - **Virtual Machine Version 8**

- Guest Operating System – **Microsoft Windows Server 2008 R2 (64-bit)**

- CPUs – **2 Sockets, 2 Cores**

- Memory – **4 GB**

- Network – **4 NICs VMXNET 3**

- SCSI Controller – **LSI logic SAS**

- Create a new virtual disk

- Disk Size – **40 GB**

- Virtual Device Node – **SCSI(0:0)**

- **Finish**

After the VM is created edit  the VM configuration and add or change the following settings:

- Hardware – CD/DVD drive 1 – Datastore ISO file – browse to the Windows Server 2012 ISO

- Options – General  Options – Guest Operating System – **Microsoft Windows Server 8 (64-bit**)

- Options – CPUID Mask – Advanced – Level 1 ecx (**add the mask below for Intel Hosts**)

---- ---- ---- ---- ---- ---- --H- ----

- Options – Boot Options – Specify the boot firmware - **EFI**

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><a href="images/image6.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb6.png" width="196" height="174"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2012/06/image7.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb7.png" width="199" height="178"></a></td></tr><tr><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2012/06/image41.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image4_thumb.png" width="193" height="211"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2012/06/image9.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb9.png" width="196" height="158"></a></td></tr></tbody></table>

- Options – General – Configuration Parameters – Add Row – Add the line below (without =)

hypervisor.cpuid.v0 = FALSE 

- Start the VM and install Windows Server 2012 

- Install VMware tools

- Add the Hyper-V role

If you need to install more Windows Server 2012 Hyper-V VMs, create a template so that you only need to do the settings once.

[![image](images/image_thumb8.png "image")](images/image8.png)



