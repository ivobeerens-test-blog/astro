---
title: "Upgrading to vSphere 5.1? Check your third party software"
description: "Compatibility matrix of third-party software support for VMware vSphere 5.1 upgrade."
pubDate: "2012-11-28T13:29:27.000Z"
categories: 
  - "upgrade"
  - "vSphere51"
tags: 
  - "upgrade"
  - "vSphere51"
author: Ivo Beerens
url: /2012/11/28/upgrading-to-vsphere-5-1-check-your-third-party-software/
---

Before upgrading to vSphere 5.1 it is important to check your existing hardware, firmware levels, drivers, vSphere versions, other VMware products that integrates and third party software if it is compatible with vSphere 5.1. Here is a list of third party software and it’s support for vSphere 5.1 .

| **Software** | **Version** | **vSphere 5.1 Support** | **Comment** |
|---|---|---|---|
| Veeam Backup &amp; Replication | 6.5 | yes |  |
| CommVault | 9 SP8 | yes | 3 extra SP8 post patches needed |
| PHDVB | 6.1 | yes |  |
| Trilead Explorer | 4.1.010 | yes |  |
| Quest vRanger Backup &amp; Replication | 6 | no |  |
| Trend Micro Deep Security | 8 SP2 | yes | <sup>\*4 </sup> |
| NetApp Virtual Storage Console | 4.1 | yes | Including SnapManger for Virtual Infrastructure (SMVI) |
| Symantec NetBackup | 7.5.0.4 | yes | <sup>\*3 </sup> |
| Symantec Backup Exec | 2010    2012 | no | Beta for Backup Exec 2010 R3 SP3 and Backup Exec 2012 SP2<sup>\*2</sup> |
| HP Insight Control for VMware vCenter server | 7.1 | yes |  |
| EMC NetWorker | 8.0 SP1 | Yes |  |
| Citrix VDI-in-a-Box | 5.2 | Yes |  |
| Citrix XenDesktop | 5.6 | No | <sup>\*1</sup> |
| IBM Tivoli Storage Manager | 6.4 | Yes |  |

If other third party software vendors have support for vSphere 5.1 please let me know so I could add them to the list.