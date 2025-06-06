---
title: "VMware vSphere 5 licensing update explained"
pubDate: "2011-07-15T12:25:53.000Z"
categories: 
  - "licensing"
  - "vpshere"
  - "vpshere-5"
tags: 
  - "licensing"
  - "vSphere"
  - "vSphere5"
author: Ivo Beerens
url: /2011/07/15/vmware-vsphere-5-licensing-explained/
---

With the announcement of VMware vSphere 5 a complete new license model is introduces.

In VMware vSphere 4 the licensing model was per physical processor based on the number of cores per CPU and the physical memory.

The VMware vSphere 5 license model is based per physical processor and the **allocated** memory (vRAM) across the entire vSphere environment for a particular vSphere 5 edition (pool).

**Update August 27, 2012**

**Today VMware announced the end of the vRAM entitlement. More info can be found [here](https://www.ivobeerens.nl/2012/08/27/the-end-of-the-vram-entitlement-in-VMware-vSphere-5-and-5-1/).**

**Update August 15, 2011**

**VMware has announced an update in the licensing for vSphere 5. They listens to their customers and changed the licensing.** **The following things have been updated:**

**- The vRAM entitlements are increased. See the new entitlements in this post.**

**- Capped amount of vRAM that is counted for a VM with a max of 1 vSphere Enterprise license (96GB). So an 1TB VM cost 96GB.**

**- More flexible around transient workloads, and short-term spikes that are typical in test & development environments for example. We will now calculate a 12-month average of consumed vRAM to rather than tracking the high water mark of vRAM.**

**-** **VMware launched an official tool “****The VMware vSphere Licensing Advisor”. This tool  allows users with vSphere 4.1, vSphere 4.0 and Virtual Infrastructure 3.5 environments to calculate and understand their vRAM usage and vRAM capacity as if they upgraded to vSphere 5.0.**

**Everything in red colored text is updated.**

**vSphere 5 licensing facts:**

- vRAM = virtual memory configured to a Virtual Machine
- Pooled vRAM = sum of all vRAM entitlements across all vSphere 5 licenses from the same edition in one or more vCenter(s) servers in linked mode
- Only powered-on VMs a counted in the total vRAM.
- vRAM pool must be licensed with the same vSphere edition.
- You can multiple vRAM pools in one or more vCenter servers for example a vSphere 5 standard and vSphere 5 Enterprise license pool
- The vSphere 4 Advanced edition is removed and customers get a free upgrade to Enterprise

#### How many licenses do I need?

For existing customers before upgrading to vSphere 5 you need to know if the upgrade can without needing extra licenses.

To calculate how many licenses you need to sum up the total amount of vRAM allocated in all the powered-on VMs and divide that to total amount by the for the particular vSphere 5 edition you are running. Here are two customer cases:

#### Cons of the new vSphere 5 licensing

VMware listening to there customers and increased for example the vRAM entitlements. To most of the cons do not apply anymore.

- The CPU core to memory ratio can be very low. For example for a six core CPU with hyper-treading and a standard license gives a very low ratio 1:1 if we use 4GB VMs. 
- You may loss the the flexibility to scale-up the memory without invest in extra vSphere licenses. I have seen a lot of customers who upgrade the memory of their vSphere hosts within 3 a 4 years. With the new vSphere 5 licensing this can lead in buying extra licenses.
- The vSphere 5 Hypervisor version supports 8GB per CPU, a dual CPU sockets hosts gives u 16GB RAM. On this server you can place 3,5 Windows 2008 R2 VM with 4GB VMs. I think the vSphere 5 Hypervisor isn’t going to be used anymore because other hypervisors haven't this restriction and even offer more functionality.
- No benefit for memory technics such as memory over allocation because the licensing is based on virtual memory configured to a Virtual Machine (vRAM)