---
title: "Manage Hyper-V from vSphere with VMware vCenter Multi-Hypervisor Manager"
description: "Overview of vCenter Multi-Hypervisor Manager features for managing Hyper-V from vSphere."
pubDate: "2012-11-22T18:42:22.000Z"
categories: 
  - "hyper-v"
  - "manage"
  - "vSphere51"
tags: 
  - "hyper-v-2"
  - "manage"
  - "vSphere51"
author: Ivo Beerens
url: /2012/11/22/manage-hyper-v-from-vsphere-with-vmware-vcenter-multi-hypervisor-manager/
---

VMware released the first version (1.0) of the vCenter Multi-Hypervisor Manager (MHM). MHM makes it possible to manage multiple heterogeneous hypervisors in VMware vCenter server.

![image](images/image_thumb1.png "image")

MHM supports only Microsoft Hyper-V Server 2008  and Microsoft Hyper-V Server 2008 R2  as hypervisor! MHM requires vCenter Server 5.1 and can manage 20 Hyper-V hosts with up to 500 VMs running.

As minimum vCenter Server Standard edition is needed. The vCenter Multi-Hypervisor Manager is not available with the vCenter Server Foundation or Essentials edition!

The installation of MHM consist of two components:

- vCenter Multi-Hypervisor Manager Server
- vCenter Multi-Hypervisor Manager Plug-In

After the installation of the plug-In it appears in the inventory tab of the vSphere Client. The MHM Plug-in s not compatible with the vSphere Web Client.

![image](images/image_thumb2.png "image")

The following tasks can be performed by MHM:

- Third-party host management including add, remove, connect, disconnect and view the host configuration.
- Ability to provision virtual machines on third-party hosts.
- Ability to edit virtual machine settings.
- Integrated vCenter Server authorization mechanism across ESX and third-party hosts inventories for privileges, roles, and users.
- Automatic discovery of pre-existing third-party virtual machines
- Ability to perform power operations with hosts and virtual machines.
- Ability to connect and disconnect DVD, CD-ROM, and floppy drives and images to install operating systems.

| ![image](images/image_thumb3.png "image") | ![image](images/image_thumb4.png "image") |
|---|---|
| ![image](images/image_thumb5.png "image") | ![image](images/image_thumb6.png "image") |

### Conclusion

Before MHM VMware released **vCenter XVP Manager and Converter** as Fling in 2011. The fling can be found [here](http://labs.VMware.com/flings/xvp). MHM is not changed that much from vCenter XVP Manager and Converter. MHM  has no support for Microsoft Server 2012 Hyper-V or Hyper-V 3.0  and the tasks that you can perform on Hyper-V are limited.

Some suggestions for the next release:

- Support for Hyper-V 3.0
- Ability to perform a live migration
- Console access to the VM
- Hyper-V to VMware migration (V2V)
- Update integration components