---
title: "Identify LUN IDs in Windows Server 2012 R2"
description: "Using diskpart commands to find LUN IDs for iSCSI disks in Windows Server 2012 R2."
pubDate: "2013-12-26T19:32:53.000Z"
categories: 
  - "hyper-v"
  - "windows-server-2012"
tags: 
  - "hyper-v-2"
  - "windows-server-2012"
author: Ivo Beerens
url: /2013/12/26/identify-lun-ids-in-windows-server-2012-r2/
---

During a Windows Server 2012 R2 Hyper-V implementation I needed to identify all the iSCSI disks (LUNs) presented by an EMC VNX SAN to the Hyper-v Failover cluster. Each presented iSCSI disk has a unique LUN ID. To View the LUN ID of a disk, you can use the **diskpart** command. Here are the steps to view the LUN ID of a disk:

- **View the disks**

`list disk`

- **Select a disk**

`select disk <number>`

![image](images/image_thumb6.png "image")

- **View the LUN ID of the disk**

`detail disk`

![image](images/image_thumb7.png "image")

I didn't find a PowerShell command to view the LUN IDs. You can create a PowerShell script that uses Diskpart to view all the disks and the corresponding LUN IDs.