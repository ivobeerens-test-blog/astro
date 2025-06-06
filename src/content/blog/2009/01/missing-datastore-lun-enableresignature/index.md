---
title: "Missing datastore (LUN), EnableResignature"
pubDate: "2009-01-23T14:18:32.000Z"
categories: 
  - "virtualcenter"
  - "VMware"
author: Ivo Beerens
url: /2009/01/23/missing-datastore-lun-enableresignature/
---

After investing the log files on the VMware ESX host i found the following message:

> **Jan 22 12:39:34 boz101 vmkernel: 152:21:01:58.702 cpu4:1040)ALERT: LVM: 4476: vml.020003000060a980004335434b464a4b77554e59744c554e202020:1 may be snapshot: disabling access. See resignaturing section in SAN config guide**.

It seems that the VMFS volume has been detected with a different LUN ID. The LUN ID is stored in the LVM header of the volume. When the LUN ID changes you need to enable resignature option to see the datastore again.

In the evening we powered all VMs on that LUN down.  On the host that was missing the datastore, I enabled the resignaturing option by:

- Go to the configuration tab of the VMware ESX host and select Advanced settings

- Click on LVM, and changed  the EnableResignature  0 (off) in 1 (on).

Did a rescan on the VMware ESX host and the LUN appeared as “SNAP-17EABCCC-VMware-LUN-03”. Tried the change the “SNAP-17EABCCC-VMware-LUN-03” LUN back to the old name “VMware-LUN-03”,  the following message appeared:

> The name “VMware-LUN-03” already exists.

The solution was to switch the view to DATASTORES in vCenter and unregister all VMs on the “SNAP-17EABCCC-VMware-LUN-03” LUN. After all VMs were unregistered, i was able to rename it back to  the old “VMware-LUN-03” name. Then i register all the VMs on the “VMware-LUN-03” LUN and start them.

I checked the datastores on the other VMware ESX hosts,  they were fine. As last step i changed the EnableResignature option back to 0 (off) on the VMware ESX host.