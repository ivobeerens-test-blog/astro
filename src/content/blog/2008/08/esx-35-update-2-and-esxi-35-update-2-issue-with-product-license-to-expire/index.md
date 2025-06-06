---
author: Ivo Beerens
title: "ESX 3.5 Update 2 and ESXi 3.5 Update 2 issue with product license to expire"
pubDate: "2008-08-12T08:36:53.000Z"
categories: 
  - VMware ESX
tags: 
  - VMware ESX
url: /2008/08/12/esx-35-update-2-and-esxi-35-update-2-issue-with-product-license-to-expire/
---

You got the following error when powering on a VM:

**Unable to Power On virtual machine with “A General System error occurred: Internal error”**

An issue has been uncovered with ESX 3.5 Update 2 and ESXi 3.5 Update 2 that causes the product license to expire on August 12. VMware is alerting customers and partners of this issue. VMware regrets the inconvenience caused to customers. Updated product bits with correct licensing will be made available for download as soon as possible.

 The work-around: turn off NTP (if you're using it), and then manually set the date of all ESX 3.5u2 hosts back to 10th of August. This can be done either through the VI Client (Host -> Configuration -> Time Configuration) or by typing date -s "08/10/2008" at the Service Console command line on the ESX hosts.

This seems to affect initial VM power-on (including from suspended state) and VMotion.
On the VMTN forum there is a thread post about this problem, check it [here](http://communities.VMware.com/thread/162377?tstart=0)

**Update:**

VMware has created a KB article: **Unable to Power On virtual machine with “A General System error occurred: Internal error”**



