---
title: "Remove an orphaned VM from SCVMM"
description: "PowerShell solution for removing stuck or orphaned VMs in System Center Virtual Machine Manager."
pubDate: "2014-07-08T06:40:35.000Z"
categories: 
  - "hyper"
  - "hyper-v"
  - "scvmm"
tags: 
  - "hyper-v-2"
  - "scvmm"
author: Ivo Beerens
url: /2014/07/08/remove-an-orphaned-vm-from-scvmm/
---

During a migration of a VM from a different cluster the job failed in SCVMM.

[![image](images/image_thumb.png "image")](images/image.png)

The status of the VM in SCVMM Virtual Machine State is still “Starting”.

[![image](images/image_thumb2.png "image")](images/image2.png)

In SCVMM I was unable to stop, repair or delete the VM. When looking on the Hyper-V host, the VM didn’t exist in Failover Cluster Manager or Hyper-V manager. After some troubleshooting I was able to use the following PowerShell command to remove the orphaned VM in SCVMM:

```powershell
Import-Module VirtualMachineManager
Get-VM -VMMServer <VMMSERVER> –Name <VMNAME> | Remove-VM -Force
```

Replace the <VMMSERVER> and <VMName> in the PowerShell syntax with your own names