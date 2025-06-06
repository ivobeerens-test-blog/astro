---
title: "VMware, Microsoft and Starwind software updates"
pubDate: "2011-02-18T12:36:06.000Z"
categories: 
  - "esx"
  - "esxi"
  - "microsoft"
  - "VMware"
  - "vSphere"
tags: 
  - "microsoft"
  - "vpshere"
author: Ivo Beerens
url: /2011/02/18/vmware-microsoft-and-starwind-software-updates/
---
Last weeks a lots of software updates and new releases are published. Here’s an overview of some of them:
## VMware

#### **VMware vSphere 4.1 Update 1**

A new update for vSphere 4.1 is released. Here are the ESX(i) and vCenter improvements:

### VMware ESX(i) 4.1 Update 1 improvements ###

- Enablement of Trusted Execution Technology (TXT) — ESXi 4.1 Update 1 can be configured to boot with Intel Trusted Execution Technology (TXT). This boot option can protect ESXi in some cases where system binaries are corrupted or have been tampered with. TXT is currently available on Intel Xeon processor 5600 series servers. For more information, see KB 1033811.
- Improvement in scalability — ESXi 4.1 Update 1 supports up to 160 logical processors.
- Support for additional guest operating systems — ESXi 4.1 Update 1 provides support for RHEL 6, RHEL 5.6, SLES 11 SP1 for VMware, Ubuntu 10.10, and Solaris 10 Update 9 guest operating systems. For a complete list of guest operating systems supported in this release, see the VMware Compatibility Guide.
- Inclusion of additional drivers — ESXi 4.1 Update 1 includes the 3ware SCSI 2.26.08.036vm40 and Neterion vxge 2.0.28.21239-p3.0.1.2 drivers. For earlier releases, these drivers are only available as separate downloads

### VMware vCenter Server 4.1 Update 1 improvements_###

- Additional Guest Operating System Customization Support: vCenter Server now supports customization of the following guest operating systems:
    - Windows 7 SP1 (x32 and x64)
    - Windows Server 2008 R2 SP1 (x32 and x64)
    - RHEL 6.0 (x32 and x64)
    - RHEL5.5 (x32 and x64)
- Additional vCenter Server Database Support**:** vCenter Server now supports the following databases:
    - Microsoft SQL Server 2008 R2
    - Microsoft SQL Server 2005 SP3
    - Oracle 11g Standard/Enterprise Release 2, 11.2.0.1.0 or later,  (x32 and x64)
    - IBM DB2 9.7.2 Express C (x32 and x64)
    - IBM DB2 9.7.2 Enterprise (x32 and x64)  
        For more information about using IBM DB2 - 9.7.2 database with vCenter Server 4.1 Update 1.

#### **VMware Data Recovery (vDR)**

There is NO new version of vDR but it is now included  in the standard edition of vSphere since vSphere 4.1 Update 1. For people who have who already bought vSphere standard and have a current subscription are able to download the vDR.

#### **VMware vCloud Director 1.0.1**

New features are support for vSphere 4.1 Update 1, complies with Internationalization I18N Level 1 and IP Translation for Organization Networks support.

#### **vCenter Server Heartbeat 6.3 Update 1**

The following enhancements  (**Note:** The features available depend on the version of vCenter Server installed) are available in this release:

- Enhanced passive server management capabilities — A new deployment option allows the passive server to be managed and monitored remotely, this includes receiving file level antivirus updates. This option is only available for:
  - vCenter 4.0 U1 and its updates, 4.1 and its updates
  - Remote SQL Server 2005, 2008 onl

Please refer to install documentation for detailed requirements and install procedure specifically around DNS and changes required to Active Directory during installation.

- Secure Client Server Communications — vCenter Server Heartbeat now provides secure client server communications with SSL Encryption using a 2048-bit key.
- Support for View Composer — This release of VMware vCenter Server Heartbeat now provides support for View Composer v2.5

#### VMware vCenter Site Recovery Manager 4.1.1

VMware SRM 4.1.1 in a maintenance release. It has bugfixes and supports VMware vSphere 4.1 Update 1. Before installing VMware SRM 4.1.1 you need to update the vCenter server to 4.1 Update 1.

## Microsoft

#### System Center Virtual Machine Manager 2008 R2 (SCVMM)

Microsoft has published a [KB](http://support.microsoft.com/default.aspx?scid=kb;EN-US;2397711) with the recommend hotfixes when performing P2V conversions by using SCVMM R2.

#### Windows Server 2008 R2 / Windows 7 SP1

On Technet and MSDN SP1 for Windows 2008 R2 and Windows 7 is released. SP1 has a lot of patches and bug fixes. Two new features are memory compression (Hyper-V) and Remote FX (Remote Desktop Services).

## Starwind

#### Starwind iSCSI SAN 5.6

A new version  of the  Starwind iSCSI SAN 5.6 is released. The Starwind iSCSI SAN  software converts a Windows bases server into a fail-safe, highly available iSCSI SAN. This release has the following improvements:

- Event Log - Improve your storage management and tracking of system state with new event viewer 
- Event notifications - Be aware of every single event by e-mail, records to Windows Event Log, records to text files 
- Experimental version of inline block level Deduplication plugin 
- Management Console multilevel improvements