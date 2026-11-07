---
title: "What is the vSphere Express license?"
slug: 2026/11/vsphere-express-license
description: "vSphere Express is Broadcom's new entry-level vSphere 9 package, capped at 128 cores. What's included, what's missing, and what it means for EEA customers."
author: Ivo Beerens
pubDate: 2026-11-07T00:00:00+01:00
image: 
draft: false
categories:
    - broadcom
    - vmware
    - vexpert
    - vcf
    - home lab
tags:
    - broadcom
    - vmware
    - vexpert
    - vcf
    - home lab
---

# Introduction

Broadcom announced this week the vSphere Express license. vSphere Express is a new entry-level package for smaller environments. It is built on vSphere 9 and is available now in all regions.
VMware vSphere 8.0 (including ESXi 8.x, vCenter Server 8.x, and vSAN 8.x) reaches End of General Support on October 11, 2027. After this date, VMware/Broadcom stops providing standard patches, security fixes and hardware enablement.
This makes vSphere Express the only low-end route to vSphere 9. If you don't need VMware vSphere Foundation (VVF) or VMware Cloud Foundation (VCF), this is the package to look at.

In this blog post, I give an overview of what is included, what the limits are.

## What is included?

Broadcom lists the following features for vSphere Express:

- **vMotion**. Live migration of running Virtual Machines (VMs).
- **High Availability (HA)**. Automatic restart of failed VMs.
- **Distributed Switch**. Centralized network management and advanced monitoring.
- **vCenter Quick Patch**. Low-impact and rapid patching of vCenter.
- **TPM 2.0 and vTPM 2.0**. Support for physical and virtual Trusted Platform Modules.

The following components are part of vSphere Express:

- **Mandatory:** ESX, vCenter, VCF Operations, and the License server. VCF Operations is used for licensing only.

## What is not included?

The following components are **not** included:

- Distributed Resource Scheduler (DRS)
- Proactive HA
- ESX Live Patching
- Memory Tiering
- SR-IOV
- GPU and vGPU
- VCF Automation
- Private AI

Check **DRS** first. Without DRS, you need to review everything that depends on it, such as affinity rules, VM-host groups, and the automatic evacuation of VMs during maintenance mode.
  
## How does it compare?
  
Here is an overview of vSphere Express compared to the other editions:
  
| Capability | Standard 8 | Enterprise Plus 8 | Express | VVF | VCF |
| --- | --- | --- | --- | --- | --- |
| vSphere 9 | No | No | Yes | Yes | Yes |
| vCenter, ESX, vMotion, HA, TPM | Yes | Yes | Yes | Yes | Yes |
| Distributed Switch, vCenter Quick Patch | No | Yes | Yes | Yes | Yes |
| DRS, Proactive HA, Live Patching | No | Yes | No | Yes | Yes |
| Memory Tiering | No | No | No | Yes | Yes |
| SR-IOV | No | Yes | No | Yes | Yes |
| GPU/vGPU | No | Yes | No | Yes | Yes |
| vSAN | No | No | No | Yes | Yes |
| VCF Operations | No | No | No | Yes | Yes |
| VCF Automation, Private AI | No | No | No | No | Yes |
| VCF Private AI | No | No | No | No | Yes |
  
## Licensing and limits

The licensing rules are the most important part of vSphere Express. The Broadcom documentation states the following:

- **128 cores** is the maximum per customer.
- Only for new customers
- Only the default license is used. You **cannot** split this license into smaller licenses or share it across sites.
- No add-ons are available.
- vSphere Express is only available for version 9 or later.
- It uses the same licensing infrastructure as VVF and VCF.

Broadcom licenses a minimum of 16 cores per CPU socket. With 128 cores, you can license up to 8 single-socket hosts or up to 4 dual-socket hosts, when each CPU has 16 cores or fewer!

## Pricing

vSphere Express is a fixed 128-core pack with a 12-month (per year) term. It costs **$9,600 USD** or **€9,631.77** excluding VAT.

Software Express also states that only one pack is possible per customer and that Broadcom must approve an order before it becomes binding. Check the price and your eligibility with your reseller.

## Who is it for?

vSphere Express looks like a good fit when you:

- Run a small, single environment that stays within 128 cores in total.
- Need vMotion, HA, and the Distributed Switch, but not DRS.
- Want to move from vSphere 8 to vSphere 9 without adopting VVF or VCF.

Look at VVF, VCF, or an alternative when you:

- Depend on DRS, vGPU, or SR-IOV.
- Need central management across multiple sites.
- Have more than 128 cores across your organization, or expect to in the near future.
- The pricing is to high

## Conclusion

vSphere Express brings a low-end vSphere 9 option back, but three big questions remain:

- **Pricing**. You have to buy the full 128-core pack, even if you use fewer cores. 
- **Licensing**. The pack is fixed at 128 cores per customer per 12 months, with no add-ons and no option to split the license. Does this fit how smaller customers actually grow?
- **Customer trust**. Many vSphere Standard users and former partners were burned by Broadcom's earlier changes. Can VMware win them back?

## Resources

- Broadcom Updates VMware Portfolio to Protect and Accelerate Private AI Cloud Deployments [***Read the article**](https://blogs.vmware.com/cloud-foundation/2026/11/04/broadcom-vcf-portfolio-updates/)
- Broadcom TechDocs: vSphere Express. [**Read the article**](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/9-1/vsphere-express.html)