---
title: "Hyper-V Get Snapshot checkpoint file sizes on Cluster Shared Volumes with PowerShell"
description: "PowerShell script to list and analyze Hyper-V snapshot sizes across Cluster Shared Volumes."
pubDate: "2013-09-17T13:39:07.000Z"
categories: 
  - "hyper-v"
  - "PowerShell"
  - "scvmm"
tags: 
  - "hyper-v-2"
  - "PowerShell"
  - "scvmm"
author: Ivo Beerens
url: /2013/09/17/list-hyper-v-snapshot-file-sizes-on-cluster-shared-volumes-with-powershell/
---

During a Windows Server 2012 Hyper-V Health Check I needed to know the snapshot file sizes for the all the snapshots on the Clustered Shared Volumes (CSVs). The Get-VMCheckpoint Cmdlet does not report the snapshot size. So I create a PowerShell one-liner that displays the following information:

- Location of the snapshot file
- Date and time that the snapshot file was created
- Last write access time of the snapshot file
- File size in MBs

The PowerShell one-liner is executed from a Hyper-V 2012 host that has access to all the  Cluster Shared Volumes (CSVs).

```
Get-ChildItem C:\ClusterStorage\ * -include *.avhd -recurse  | Select-Object Fullname,CreationTime,LastWriteTime,@{"Name"="Size (MB)"; "Expression"={[int]($_.Length/1mb)}} | Out-GridView
```

This PowerShell one-liner produces the following output: [![image](images/image_thumb.png "image")](images/image.png)