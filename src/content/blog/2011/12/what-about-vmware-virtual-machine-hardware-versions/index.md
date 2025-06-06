---
title: "What about VMware Virtual Machine hardware versions"
pubDate: "2011-12-29T14:44:42.000Z"
categories: 
  - "hardware"
  - "tools"
  - "VMware"
  - "vpshere"
tags: 
  - "hardware"
  - "tools"
  - "version"
  - "VMware"
author: Ivo Beerens
url: /2011/12/29/what-about-vmware-virtual-machine-hardware-versions/
---

It depends on the features you need. If you want for example use the “Changed Blocked Tracking (CBT)” feature, you need at least hardware version 7.

In ESX 3.x hardware version 4 is introduced, in vSphere 4.x hardware version 7 is introduced and in vSphere 5 hardware version 8 is introduced. Here is an overview of the hardware version and the features they have:

<table border="0" cellspacing="0" cellpadding="2" width="641"><tbody><tr><td valign="top" width="220"><strong>Hardware version</font></strong></td><td valign="top" width="222"><strong>Features</font></strong></td><td valign="top" width="197"><strong>Products</font></strong></td></tr><tr><td valign="top" width="220"><font color="#000000" size="4">8</font></td><td valign="top" width="222"><strong>- Up to 32 vCPUs per VM<br>- Maximum 1 TB RAM per VM<br>- 3-D graphics and high-definition audio<br>- Smart-card reader support<br>- USB 3.0 devices are supported<br>- Improved network driver for the E1000e</strong> network adapter, provided by VMware tools<br>- Greater resources are available with vCloud Director 1.5</font></td><td valign="top" width="197">Hardware version 8 is the default for new VM in:<br>- <strong>ESX 5.x</strong><br>- Fusion 4.x<br>- Workstation 8.x<br>- Player 4.x</font></td></tr><tr><td valign="top" width="220"><font color="#000000" size="4">7</font></td><td valign="top" width="222">- <strong>Serial Attached SCSI (SAS) virtual device for Microsoft Cluster Service</strong> — Provides support for running Windows Server 2008 in a Microsoft Cluster Service configuration.<br>- <strong>IDE virtual device</strong> — Ideal for supporting older operating systems that lack SCSI drivers.<br>- <strong>VMXNET Generation 3. </strong>VMXNET is optimized for performance in a virtual machine&nbsp;<br>- <strong>Virtual Machine Hot Plug Support</strong>— Provides support for adding and removing virtual devices, adding virtual CPUs, and adding memory to a virtual machine without having to power off the virtual machine.<br>- <strong>Change Block Tracking (CBT) support. </strong>Incease VADP backups</font></td><td valign="top" width="197">Hardware version 7 is the default for new VM in:<br>- <strong>ESX 4.x</strong><br>- Fusion 3.x<br>- Fusion 2.x<br>- Workstation 7.x & 6.5<br>- Player 3.x<br>- Server 2.x</font></td></tr><tr><td valign="top" width="220"><font color="#000000" size="4">4</font></td><td valign="top" width="226"></font></td><td valign="top" width="206">Hardware version 4 is the default for new VM in:<br>- <strong>ESX 3.x</strong><br>- ACE 2.x<br>- Fusion 1.x<br>- Player 2.x</font></td></tr><tr><td valign="top" width="220"><font color="#000000" size="4">3</font></td><td valign="top" width="226">&nbsp;</td><td valign="top" width="206">Hardware version 3 is the default for new VM in:<br>- ESX 2.x<br>- GSX Server 3.x</font></td></tr></tbody></table>

**Considerations before upgrading the hardware version of the VM:**

- Important to know is that upgrading the hardware version of the VM requires downtime!
- Virtual machines with hardware version 7 can only run on ESX(i) 4.x and ESXi 5.x. Virtual machines with hardware version 8 can **only** run on ESXi 5.x
- When you upgrade from virtual hardware version 4 to version 8, the upgrade is reversible if you take a virtual machine backup or snapshot before performing the upgrade.
- To automate this process, consider using Update Manager for virtual machine upgrades
- Update Manager takes automatic snapshots before performing virtual machine upgrades
- Be sure to upgrade first the VMware tools of the VM.  I you upgrade the virtual hardware before you upgrade VMware Tools, the virtual machine might lose its network settings
- Verify that all VMs and .VMDK files are stored on VMFS3, VMFS5 or NFS volumes

**Steps in the hardware version upgrade process:**

- Do an inventory on the current hardware and VMware tools versions. This can be done for example by using the vCenter client, RVtools utility or PowerCLI

- Install or upgrade the VMware tools (reboot required)
- Power on the VM
- Before upgrading create a backup or snapshot of the VM
- Backup the NIC IP settings with the VMUpgradeHelper.exe command.
- Power off the VM
- Upgrade Virtual Hardware
- Start VM  (reboot after the new hardware is discovered)
- Check if all the IP addresses are correct

**Downgrade methods:**

There is no button in vCenter to revert back to an earlier Hardware version. Here are two methods to go back to an earlier version of the hardware version:
- Create before upgrading the hardware version a snapshot when the VM is powered down.
- Using VMware Converter

**Upgrading issues to know about:**

- Upgrading virtual hardware in ESX 4.x may cause Windows 2008 disks to go offline (more information can be found [here](https://kb.vmware.com/s/article/1013109))
- After a hardware version upgrade the configuration can be messed up on  for example Microsoft ISA, Microsoft NLB clusters and RSA servers
- After upgrading a Windows virtual machine from hardware version 4 to hardware version 7, virtual NIC settings (such as static IP configuration) are lost. Make sure you backup the VM IP settings with the VMUpgradeHelper.exe command. 