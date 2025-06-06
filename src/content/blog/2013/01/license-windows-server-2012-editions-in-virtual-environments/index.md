---
title: "License Windows Server 2012 editions in virtual environments"
description: "Guide to Windows Server 2012 Standard and Datacenter edition licensing for virtual machines."
pubDate: "2013-01-02T14:16:11.000Z"
categories: 
  - "windows-server-2012"
tags: 
  - "windows-server-2012"
author: Ivo Beerens
url: /2013/01/02/license-windows-server-2012-editions-in-virtual-environments/
---

As virtualization consultant I got frequently questions about Windows Server 2012 licensing in virtual environments such as VMware and Hyper-V. Here is a short blog about Windows Server 2012 licensing in virtual environments.

What about the Windows Server 2012 license:

- The Windows Server 2012 licenses are based on the physical processor
- A single license covers two physical processors.

There are two license editions available:

- **Windows Server 2012 Standard edition.** A Standard edition license will entitle you to run up to two VMs on up to two processors.
- **Windows Server 2012 Datacenter edition**.  A Datacenter edition license will entitle you to run an unlimited number of VMs on up to two processors

The  only difference between the two editions are the virtualization rights.  All the features that are available, are the same in both editions for example Windows Server Failover Clustering! The Enterprise edition is retired in Windows Server 2012 licensing.

Windows Server 2012 license examples:

- For a 2 processor VMware or Hyper-V host with 8 VM's you need 4 Standard edition licenses
- For a 4 processor VMware or Hyper-V host with 4 VM's you need 2 Standard edition licenses

The retail list prices of Windows Server 2012 are:

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><strong>Edition</strong></td><td valign="top" width="200"><strong>Retail list price ($)</strong></td></tr><tr><td valign="top" width="200">Standard</td><td valign="top" width="200">882</td></tr><tr><td valign="top" width="200">Datacenter</td><td valign="top" width="200">4809</td></tr></tbody></table>

Client Access Licenses (CALs) will be needed to access to Windows Server 2012 servers.

The decision to use the standard of datacenter edition licensing depends on the total number of VMs on your hosts. On hosts with more than 11 VMs the datacenter license will be cost effective.

It is allowed to reassign a Windows Server 2012 license from one server to another server but more often than every 90 days. There are some expectations of the 90 days rule to assign the license sooner for example:

- When having a permanent hardware failure
- Reallocate processors from one host to another

**What about moving a VM?**

When using a dynamic move a Windows Server VM to another node for example with Windows Server Clustering, VMware vMotion or Live Migration, the other node needs to be have sufficient Microsoft Windows Server 2012 licenses. So in most cases an Windows Server 2012 Datacenter edition license is recommend.