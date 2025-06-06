---
title: "VM snapshot needs consolidation"
pubDate: "2012-05-10T07:59:18.000Z"
categories: 
  - "snapshot-2"
  - "vSphere5"
tags: 
  - "snapshot"
  - "vSphere5"
author: Ivo Beerens
url: /2012/05/10/vm-snapshot-needs-consolidation/
---

When a snapshot didn’t commit properly, it can happen that the snapshot manager in the vCenter server shows no snapshot(s), but that there are still active delta files on the datastore. These ‘hidden’ snapshot can cause the datastore to run out of space.

To report these ‘hidden’ snapshots (prior vSphere 5), I created a script that searches all the datastores  for ‘\*.delta’ files and reported them by mail.  

In vSphere 5 you have a new feature that reports and make it possible to consolidate these  ‘hidden’ snapshot(s). In vSphere 5 you get  a warning ‘**Virtual machine disks consolidation is needed’** when the virtual machine snapshot consolidation has failed.

[![image](images/image8_thumb.png)]

The snapshot manager shows no snapshots but there are delta files present on the datastore(s).

| [![image](images/image_thumb9.png)] | [![image](images/image_thumb10.png)]  |
|---|---|

In the vCenter server on the Virtual Machines tab you can enable the field “Needs Consolidation” to filter all the VMs that needs consolidation.

[![image](images/image12_thumb.png)]

To consolidate the snapshot, right-click the virtual machine and choose **Snapshot** - **Consolidate**.

[![image](images/image20_thumb.png)]

Confirm the consolidate

[![image](images/image24_thumb.png)]

Check the datastore and all the delta files are consolidated

[![image](images/image27_thumb.png)]

With PowerCLI you can use the following one liner to list all the VMs that needs consolidation:

```
Get-VM | where {$\_.ExtensionData.Runtime.consolidationNeeded} | Select Name 
```
