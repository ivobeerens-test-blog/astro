---
title: "New updates available on VMware vCenter, VMware View, Microsoft Virtual Machine Converter and Veeam Backup & Replication"
description: "Latest updates for vCenter 5.0 U1b, View 5.1.1, Microsoft VM Converter and Veeam B&R."
pubDate: "2012-08-17T14:38:21.000Z"
categories: 
  - "updates"
  - "view"
  - "VMware"
  - "vSphere5"
tags: 
  - "updates"
  - "view"
  - "VMware"
  - "vpshere5"
author: Ivo Beerens
url: /2012/08/17/new-updates-available-on-vmware-vcenter-vmware-view-microsoft-virtual-machine-converter-and-veeam-backup-replication/
---

Over the last days the following updates are released:

- **VMware vCenter Server 5.0 Update 1b**
- **VMware View 5.1.1**
- **Microsoft Virtual Machine Converter Plug-in for VMware vSphere beta**
- **Veeam Backup & Replication 6.1 Patch 1**

Below are the enhancements listed per product.

#### VMware vCenter Server 5.0 Update 1b

What's New:

> VMware vCenter Server 5.0 Update 1b is a patch release and offers the following improvements:
> 
> - **vCenter Server 5.0 Update 1b introduces support for the following vCenter Databases**
>     - Oracle 11g Enterprise Edition, Standard Edition, Standard ONE Edition Release 2 \[11.2.0.3\] - 64 bit
>     - Oracle 11g Enterprise Edition, Standard Edition, Standard ONE Edition Release 2 \[11.2.0.3\] - 32 bit
> - **vCenter Server Appliance Database Support**: The DB2 express embedded database provided with the vCenter Server Appliance has been replaced with VMware vPostgres database. This decreases the appliance footprint and reduces the time to deploy vCenter Server further.
> - **Resolved Issues:** In addition, this release delivers a number of bug fixes that have been documented in the Resolved Issues section.
> 
> vCenter Server 5.0 Update 1a has been removed from the VMware download site due to issues encountered when upgrading with an Oracle database for Windows. vCenter Server Update 1a is replaced by vCenter Server 5.0 Update 1b, which is functionally identical to vCenter Server 5.0 Update 1a and includes the fix for the issue encountered when upgrading with an Oracle database for Windows. Please refer to [KB 2032277](http://kb.VMware.com/kb/2032277) and the Resolved issues section of the release notes for more information.

More information can be found [here](https://www.VMware.com/support/vSphere5/doc/vsp_vc50_u1b_rel_notes.html#whatsnew).

 

#### VMware View 5.1.1

VMware View 5.1.1 is a maintenance release that resolves some known issues in the previous releases. Resolved Issues:

> **View Administrator**
> 
> - When the number of View entities managed by one group of View Connection Server instances exceeded 10,000, View Administrator had intermittent problems displaying desktop pools, desktops, and user/group references. The intermittent display problems caused many administrative operations to fail. A View entity can be a desktop pool, desktop, or user/group reference.
> 
> **View Persona Management**
> 
> - View Persona Management failed to replicate a user profile that contained very large files to the remote profile repository. The incomplete replication could result in data loss or data corruption in the user profile.
> 
> **User Profile Management in View**
> 
> The following resolved issues concern desktop session management by View Agent and View Connection Server. In certain situations, View closed sessions prematurely, affecting user profile synchronization. In View 5.1.1, View Agent and View Connection Server wait for user profile replication to be completed before closing desktop sessions.
> 
> - When a user logged off soon after adding a large amount of data to the user profile, View shut down the View desktop before the user profile had finished being replicated to the remote profile repository. The incomplete replication could result in data loss or data corruption in the user profile. This issue is resolved when PCoIP or RDP is used.
> - If a user logged off from a View desktop and immediately logged in to a new desktop session within the same pool, user profile data that was created in the new session could not be saved. The user could also lose data that was created in the previous session. This issue applied to desktops running Windows Vista, Windows 7, Windows Server 2008, or later Windows operating system releases.

More information can be found [here](https://www.VMware.com/support/view51/doc/view-511-release-notes.html).

A new document on VMware View 5 and SSL Certificates is published. The document provides an example that shows how to obtain signed SSL certificates from a Certificate Authority and ensure that the certificates are in a format that can be used by View servers. More info: [Link](http://pubs.VMware.com/view-51/topic/com.VMware.ICbase/PDF/view-51-obtaining-certificates.pdf)

 

#### Microsoft Virtual Machine Converter Plug-in for VMware vSphere beta

> The Microsoft Virtual Machine Converter (MVMC) Plug-in for VMware vSphere Client is a Microsoft-supported solution for IT pros or solution providers who want to convert VMware-based virtual machines to Microsoft Hyper-V®-based virtual machines from vSphere Client. This plug-in extends vSphere Client to facilitate conversions from a virtual machine context menu and without changing configurations on the source VMware host. It is built upon Microsoft Virtual Machine Converter release candidate.

 

#### Veeam Backup & Replication 6.1 Patch 1

Veeam Backup & Replication 6.1 Patch 1 brings the following additional changes and enhancement:

> •Increased synthetic full transformation, and reverse incremental backup performance (up to a few times depending on backup storage).
> 
> • Improved Direct SAN Access mode performance by disabling excessive VDDK logging.
> 
> • Processing engine should now be much more tolerant to network packet loss.
> 
> • Added PowerShell cmdlet for VeeamZIP operation.
> 
> • Added new registry value that reverses the sequence of application-aware processing, making jobs try network-less processing mode before network one.
> 
> - HKEY\_LOCAL\_MACHINE\\SOFTWARE\\VeeaM\\Veeam Backup and Replication
> - DWORD: InverseVssProtocolOrder
> - Value = 1
> - To disable (default behavior), value is 0 (false)
> 
> • Increased certain network-less application aware processing timeouts to make it work more reliably with applications requiring longer time to perform VSS quiescence.
> 
> • Added internet access from virtual lab environment for VMs using port groups other than first.
> 
> • Reduced the amount of logs application-aware processing produces on guest VMs.
> 
> • Added support for application-aware processing for VM's that use EFI boot.