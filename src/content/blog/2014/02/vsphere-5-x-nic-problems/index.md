---
title: "vSphere 5.x NIC problems"
description: "Recent network adapter issues affecting ESXi 5.x including E1000 and Broadcom problems."
pubDate: "2014-02-27T14:22:33.000Z"
categories: 
  - "esxi"
  - "VMware"
tags: 
  - "esxi-2"
  - "VMware"
author: Ivo Beerens
url: /2014/02/27/vsphere-5-x-nic-problems/
---

Last week ik blogged about the "Broadcom adapter data corruption on ESXi/ESX hosts using the tg3 driver and TSO enabled" NIC problem. [Link](http://www.ivobeerens.nl/2014/02/19/vmware-esxi-broadcom-data-corruption-problem-with-tg3-driver-check-your-environment/) This week I found two new vSphere NIC issues worth to mention:

- Hosts with virtual machines using the E1000/E1000E adapter have networking issues after upgrading to ESXi 5.1 U2 (2072694). [Link](http://kb.VMware.com/selfservice/microsites/search.do?cmd=displayKC&docType=kc&externalId=2072694)
- ESXi 5.x host experiences a purple diagnostic screen mentioning E1000PollRxRing and E1000DevRx (2059053). [Link](http://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2059053)



