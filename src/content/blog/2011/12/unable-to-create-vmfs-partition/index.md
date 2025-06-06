---
title: "Unable to create VMFS partition"
pubDate: "2011-12-19T14:05:20.000Z"
categories: 
  - "esx"
  - "esxi"
  - "vmfs"
  - "VMware"
tags: 
  - "esx"
  - "esxi-2"
  - "VMware"
author: Ivo Beerens
url: /2011/12/19/unable-to-create-vmfs-partition/
---
On my home lab I tried to create a new VMFS volume on a RAID-0 disk set that was coming from another host. When creating the new VMFS volume from the vSphere client, the following error appeared:

> Call “HostDatastoreSystem.QueryVmfsDatastoreCreateOptions” for object “datastoresystem-9” on vCenter Server “VC01″ failed.

[![image](images/image_thumb2.png "image")](images/image2.png)

On the VMware ESXi 5 server I enabled “Local Tech Support Mode”, so I was able to logging in directly on the console and used the **fdisk-l** command to see the partition information on the disk. I notice that the disk contains four old partitions from another system.

[![2011-12-16 18h37_25](images/2011-12-16-18h37_25_thumb.jpg "2011-12-16 18h37_25")](images/2011-12-16-18h37_25.jpg)

I deleted the four partitions by using the following commands (**displayed in bold**):

- **fdisk /dev/disk/mpx.vmhba3:C0:T1:LO** (see the above picture)
- **p** (for printing the partition information and verify that you choose the right disk)
- **d** and enter the partition numbers (**1**, **2**, **3**, and **4)** for deleting the partition
**- p** to verify that all the partitions are deleted
- **w** to write the modifications to disk

After the deletion of the old partitions I was able to create the VMFS volume on the RAID-0 disk set.

[![image](images/image_thumb3.png "image")](images/image3.png)