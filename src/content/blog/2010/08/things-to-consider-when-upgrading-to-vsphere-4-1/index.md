---
title: "Things to consider when upgrading to vSphere 4.1"
pubDate: "2010-08-11T09:10:49.000Z"
categories: 
  - "upgrade"
  - "VMware"
tags: 
  - "scripted"
  - "vcenter"
  - "VMware"
  - "vSphere"
  - "vSphere-4-1"
author: Ivo Beerens
url: /2010/08/11/things-to-consider-when-upgrading-to-vsphere-4-1/
---

The new vSphere 4.1 release offers a lot of new cool features and enhancements. Here’s a list What’s New in vSphere 4.1.  When upgrading to vSphere 4.1 there are a couple of things to think about before starting:
- Make sure your systems and components are supported, check the [Hardware Compatibility Guide](http://www.VMware.com/resources/compatibility/search.php).
- Verify that other products are compatible with vSphere 4.1. For example VMware View 4 is not supported on vSphere 4.1. VMware View composer does not support 64-bit operating systems. 
- vCenter 4.1 server requires a 64-bit OS. 32-bit Operating Systems are not supported anymore for vCenter 4.1 server.
- vSphere 4.1 and its subsequent update and patch releases are the last releases to include both ESX and ESXi hypervisor architectures. Future major releases of VMware vSphere will include only the VMware ESXi architecture. For this reason, **VMware recommends that deployments of vSphere 4.x utilize the ESXi hypervisor architecture**. When migrate to ESXi all the script and programs (such as hardware monitoring agents and backup agents), that uses the Service Console needs to replaced. More information can be the following links [ESX4.1 is the last ESX what do i do now](https://blogs.vmware.com/vSphere/2010/07/esx-41-is-the-last-esx-what-do-i-do-now.html) and in the [ESXi41 Migration Guide](https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/vmw-esxi41-migration-guide-white-paper.pdf).
- vSphere 4.1 support scripted installation for ESXi. **You cannot use scripted installation to install ESXi to a USB device!** Here are some good links for scripted ESXi 4.1 installations:  **Kenneth van Ditmarsch**, [Setting up vSphere ESXi 4.1 scripted installation](http://virtualkenneth.com/2010/07/21/setting-up-vSphere-esxi-4-1-scripted-installation/), **Kendrick Coleman**, [ESX 4.1 Kickstart install](http://kendrickcoleman.com/index.php?/Tech-Blog/esxi-41-kickstart-install-wip.html).
- ESXi comes in two editions, the vSphere Hypervisor (free version) with limited features and the enterprise ESXI.
- The VMware Knowledgebase has best practices for installing and upgrading vSphere 4.1. [Installing ESX 4..1 and vCenter 4.1 best practices](https://kb.vmware.com/s/article/1022101) and [Upgrading to ESX 4.1 and vCenter 4.1 best practices](https://kb.vmware.com/s/article/1022104).
- Get yourself familiar with tools as **PowerCLI**, **vCLI** and the **VMware Management Assistant (vMA).**These tools helps you to automate, configure  and troubleshoot vSphere 4.1 environments. More information can be found on the following link [developer](https://developer.vmware.com/home)
