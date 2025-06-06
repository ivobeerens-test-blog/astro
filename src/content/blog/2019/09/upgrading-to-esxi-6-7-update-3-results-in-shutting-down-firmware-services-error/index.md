---
title: "Boot error: Shutting down firmware services... error after upgrading to VMware ESXi 6.7 Update 3"
pubDate: "2019-09-18T12:12:05.000Z"
categories: 
  - "esxi"
tags: 
  - "esxi-2"
  - "VMware"
author: Ivo Beerens
url: /2019/09/18/upgrading-to-esxi-6-7-update-3-results-in-shutting-down-firmware-services-error/
---

After upgrading one of my home lab servers to VMware ESXi 6.7 Update 3, I’ve got the following error when trying to boot:

[![](images/error-300x177.jpg)](images/error.jpg)

> Shutting down firmware services...
> 
> Page allocation error: Out of resources
> 
> Failed to shutdown the boot services.
> 
> Unrecoverable error

After changing the boot mode from UEFI to "legacy only" in the BIOS, the ESXi host booted without the error.

[![](images/bios-300x141.jpg)](images/bios.jpg)

VMware has confirmed that this is a bug. There is VMware community thread ([link](https://communities.VMware.com/thread/617099)) about this bug and two other workarounds. When there will be a permanent fix available is unclear at the moment.



