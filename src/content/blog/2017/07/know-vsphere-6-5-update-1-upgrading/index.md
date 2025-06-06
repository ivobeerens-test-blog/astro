---
title: "What to know about vSphere 6.5 Update 1 before upgrading"
pubDate: "2017-07-31T08:23:17.000Z"
tags: 
  - "VMware"
  - "vSphere"
author: Ivo Beerens
url: /2017/07/31/know-vsphere-6-5-update-1-upgrading/
---

vSphere 6.5 Update 1 is the first major update after the GA release of vSphere 6.5. Besides great new improvements such as vSAN 6.6.1 some nasty bugs are fixed. Here’s a short list you want to know before upgrading to vSphere 6.5 Update 1:
- Upgrade from vSphere 6.0 Update 3 is now a supported upgrade path to vSphere 6.5.
- Customers who are still on vSphere 5.5 will need to be on at least vSphere 5.5 Update 3b, build 3252642 in order to upgrade to vSphere 6.5 Update 1.
- Discontinuation of third party vSwitch. Customers using 3rd party switches such as Cisco Nexus 1000V, Cisco VM-FEX, , HPE 5900v and IBM DVS 5000v will need to migrate off those switches after vSphere 6.5 Update 1. So  vSphere 6.5 Update 1 is the final release that support these 3rd party switches!
- General Support has been extended. This means that support for vSphere 6.5 will now end November 15, 2021.
- vCenter Server Foundation will support from 3 host to 4.
- With the vSphere 6.5 Update 1 you are prepared for the VMware Cloud on AWS (hybrid cloud) solution.
- The vCenter Server needs to be running 6.5 U1 before upgrading your hosts to 6.5 U1.
- The vSphere Client (HTML5) supports content library and OVF deployment operations (it's still grayed out at the moment), as well as operations on roles and permissions, basic customization of the Guest OS, and additions to virtual machine, host, datastore, and network management.
- A new version of vSAN 6.6.1 is added with new capabilities such as vSphere Update Manager (VUM) support. Manage vSAN software upgrades through integration with vSphere Update Manager.
- vSAN Performance Diagnostic. This new feature is all about analyzing benchmarks and give recommendations.
- New vSAN Licensing for ROBO and VDI. The vSAN licensing editions are expanded with an Enterprise model that allows encryption and stretched clusters.
- Scalability improvements of vCenter Server:
    - Maximum vCenter Servers per vSphere Domain: 15 (increased from 10)
    - Maximum ESXi Hosts per vSphere Domain: 5000 (increased from 4000)
    - Maximum Powered On VMs per vSphere Domain: 50,000 (increased from 30,000)
    - Maximum Registered VMs per vSphere Domain: 70,000 (increased from 50,000)
- vSphere 6.5 no longer supports the following processors:
    - Intel Xeon 51xx series
    - Intel Xeon 30xx series
    - Intel core 2 duo 6xxx series
    - Intel Xeon 32xx series
    - Intel core 2 quad 6xxx series
    - Intel Xeon 53xx series
    - Intel Xeon 72xx/73xx series

More information:
- VMware ESXi 6.5 Update 1 Release Notes, [link](https://docs.VMware.com/en/VMware-vSphere/6.5/rn/vSphere-esxi-651-release-notes.html)
- VMware vCenter Server 6.5 Update 1 Release Notes, [link](https://docs.VMware.com/en/VMware-vSphere/6.5/rn/vSphere-vcenter-server-651-release-notes.html)