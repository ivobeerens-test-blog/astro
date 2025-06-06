---
author: Ivo Beerens
title: "VMware patch alert"
pubDate: "2008-12-03T08:28:20.000Z"
categories: 
  - "VMware"
  - "VMware-35-update-3"
tags: 
  - "VMware"
  - "VMware-35-update-3"
url: /2008/12/03/VMware-patch-alert/
---

VMware released the following six new pathes:

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td width="149" valign="top"><strong>Patch name</strong></td><td width="142" valign="top"><strong>Description</strong></td><td width="107" valign="top"><strong>Type</strong></td></tr><tr><td width="149" valign="top"><strong><span>ESX350-200811401-SG</span<span>- PATCH</span></strong></td><td width="142" valign="top"><span>Updates VMkernel, hostd, and Other RPMs</span></td><td width="107" valign="top">Security</td></tr><tr><td width="149" valign="top"><strong><span>ESX350-200811402-SG</span<span>- PATCH</span></strong></td><td width="142" valign="top"><span>Updates ESX Scripts</span></td><td width="107" valign="top">General</td></tr><tr><td width="149" valign="top"><strong><span>ESX350-200811405-SG</span<span>- PATCH</span></strong></td><td width="142" valign="top">Security Update to libxml2</td><td width="107" valign="top">Security</td></tr><tr><td width="149" valign="top"><strong>ESX350-200811406-SG - PATCH</strong></td><td width="142" valign="top">Security Update to bzip2</td><td width="107" valign="top">Security</td></tr><tr><td width="149" valign="top"><strong>ESX350-200811408-BG - PATCH</strong></td><td width="150" valign="top">Updates QLogic Software Driver</td><td width="137" valign="top">CRITICAL</td></tr><tr><td width="149" valign="top"><strong><span>ESX350-200811409-BG</span<span>- PATCH</span></strong></td><td width="150" valign="top">Updates Kernel Source and VMNIX</td><td width="137" valign="top">CRITICAL</td></tr></tbody></table>

 

ESX350-200811401-SG - PATCH solves some spontaneously reboots when the setting "VMware Tools to automatically upgrade Tools before each power-on" is on, see  below the summaries and symptoms:

This patch fixes the following issues:
- A memory corruption condition may occur in the virtual machine hardware. A malicious request sent from the guest operating system to the virtual hardware may cause the virtual hardware to write to uncontrolled physical memory.
    
    The Common Vulnerabilities and Exposures project (cve.mitre.org) has assigned the name CVE-2008-4917 to this issue.
- **VMotion might trigger VMware Tools to automatically upgrade. This issue occurs on virtual machines that have the setting for Check and upgrade Tools before each power-on enabled, and the affected virtual machines are moved, using VMotion, to a host with a newer version of VMware-esx-tools.**
    
    - **Virtual machines unexpectedly restart during a VMotion migration.**
    - **The guest operating systems might stall (reported on forums).**
    
    **Note: After patching the ESX host, you need to upgrade VMware Tools in the affected guests that reside on the host.**
    
    Symptoms seen without this patch:
- Swapping active and standby NICs results in a loss of connectivity to the virtual machine. 
- A race issue caused an ASSERT\_BUG to unnecessarily run and caused the ESX host to crash. This change removes the invalid ASSERT\_BUG.Symptoms seen without this patch: The ESX host crashes with an ASSERT message that includes fs3DiskLock.c:1423.Example:
    
    ASSERT /build/mts/release/bora-77234/bora/modules/vmkernel/vmfs3/fs3DiskLock.c:1423 bugNr=147983
    
     
- A virtual machine can become registered on multiple hosts due to a .vmdk file locking issue. This issue occurs when network errors cause HA to power on the same virtual machine on multiple hosts, and when SAN errors cause the host on which the virtual machine was originally running to lose its heartbeat. The original virtual machine becomes unresponsive.
    
    With this patch, the VI Client displays a dialog box warning you that a .vmdk lock is lost. The virtual machine is powered off after you click **OK**.
- This change fixes confusing VMkernel log messages in cases where one of the storage processors (SP) of an EMC CLARiiON CX storage array is hung. The messages now correctly identify which SP is hung.Example of confusing message:
    
    vmkernel: 1:23:09:57.886 cpu3:1056)WARNING: SCSI: 2667: CX SP B is hung. vmkernel: 1:23:09:57.886 cpu3:1056)SCSI: 2715: CX SP A for path vmhba1:2:2 is hung.
    
    vmkernel: 1:23:09:57.886 cpu3:1056)WARNING: SCSI: 4282: SP of path vmhba1:2:2 is hung. Mark all paths using this SP as dead. Causing full path failover.
    
    In this case, research revealed that SP A was hung, but SP B was not.
- This patch allows VMkernel to successfully boot on unbalanced NUMA configurations—that is, those with some nodes having no CPU or memory. When such unbalanced configuration is detected, VMkernel shows an alert and continues booting. Previously, VMkernel failed to load on such NUMA configurations.
    
    Sample alert message when memory is missing from one of the nodes (here, node 2):
    
    No memory detected in SRAT node 2. This can cause very bad performance.
- When the zpool create command from a Solaris 10 virtual machine is run on a LUN that is exported as a raw device mapping (RDM) to that virtual machine, the command creates a partition table of type GPT (GUID partition table) on that LUN as part of creating the ZFS filesystem. Later when a LUN rescan is run on the ESX server through VirtualCenter or through the command line, the rescan takes a significantly long amount of time to complete because the VMkernel fails to read the GUID partition table. This patch fixes this problem.
    
    Symptoms seen without this patch: Rescanning HBAs takes a long time and an error message similar to the following is logged in /var/log/vmkernel:
    
    Oct 31 18:10:38 vmkernel: 0:00:45:17.728 cpu0:8293)WARNING: SCSI: 255: status Timeout for vml.02006500006006016033d119005c8ef7b7f6a0dd11524149442030. residual R 800, CR 80, ER 3
- A race in LVM resignaturing code can cause volumes to disappear on a host when a snapshot is presented to multiple ESX hosts, such as in SRM environments.
    
    Symptoms: After rescanning, VMFS volumes are not visible.
    
- This change resolves a rare VMotion instability.
    
    Symptoms: During a VMotion migration, certain 32-bit applications running in 64-bit guests might crash due to access violations.
- Solaris 10 Update 4, 64-bit graphical installation fails with the default virtual machine RAM size of 512MB.
- DRS development and performance improvement. This change prevents unexpected migration behavior.
- In a DRS cluster environment, the hostd service reaches a hard limit for memory usage, which causes hostd to restart itself.
    
    Symptoms: The hostd service restarts and temporarily disconnects from VirtualCenter. The ESX host stops responding before hostd reconnects.
- Fixes for supporting Site Recovery Manager (upcoming December 2008 release) on ESX 3.5 Update 2 and Update 3.
    

When installing this patch you must reboot your ESX server(s) and update the VMware tools on the VMs, this requires a reboot to. 

The Virtual Machine Monitoring reboot problem (see post [https://www.ivobeerens.nl/?p=180](https://www.ivobeerens.nl/?p=180)) is NOT fixed, :-(. I hope VMware will fix this soon.



