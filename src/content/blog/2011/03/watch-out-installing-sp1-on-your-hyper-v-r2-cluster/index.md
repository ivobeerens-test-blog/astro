---
title: "Watch out installing SP1 on your Hyper-V R2 cluster"
pubDate: "2011-03-25T20:20:15.000Z"
categories: 
  - "hyper-v"
tags: 
  - "hyper-v-r2"
author: Ivo Beerens
url: /2011/03/25/watch-out-installing-sp1-on-your-hyper-v-r2-cluster/
---

Yesterday I spoke a customer who has problems after applying Windows 2008 R2 SP1 on his 5 node Hyper-V cluster. When validating the storage on the cluster, the following error “disk with identifier “2ef8c0……” has a persistent reservation” is displayed on multiple cluster disks.

**The problem can occur in the following scenario:**

**- You configure a failover cluster that has three or more nodes that are running Windows Server 2008 R2 Service Pack 1 (SP1).  
- You have cluster disks that are configured in groups other than the Available Storage group or that are used for Cluster Shared Volumes (CSV).  
- These disks are online when you run the Validate SCSI Device Vital Product Data (VPD) test or the List Potential Cluster Disks storage validation test.**

**In this scenario, the Validate SCSI Device Vital Product Data (VPD) test fails. Additionally, you receive an error message that resembles the following:**

> **Failed to get SCSI page 83h VPD descriptors for cluster disk <number> from <node name> status 2**

**The List Potential Cluster Disks storage validation test may display a warning message that resembles the following:**

> **Disk with identifier <value> has a Persistent Reservation on it. The disk might be part of some other cluster. Removing the disk from validation set.**

**A hotfix (KB 2531907) is now available that addresses the Win2008 R2 service pack 1 issue with Validate on a 3+ node cluster. You can find more information and the hotfix to download at the following link:  
**[**KB2531907**](http://support.microsoft.com/kb/2531907)

My advice, do **not** install SP1 on your production Hyper-V cluster(s) till Microsoft has solution for this nasty problem! 