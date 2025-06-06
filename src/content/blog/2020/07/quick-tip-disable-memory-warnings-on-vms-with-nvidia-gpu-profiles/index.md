---
title: "Quick Tip: Disable memory warnings on VMs with NVIDIA GPU profiles"
pubDate: "2020-07-07T05:58:27.000Z"
author: Ivo Beerens
url: /2020/07/07/quick-tip-disable-memory-warnings-on-vms-with-nvidia-gpu-profiles/
---

When using PCI passthrough devices such as for example NVIDIA GPUs with VMware vSphere and configure the VMs with a GPU profile, the full memory is reserved (100% Memory Active). When the VM is active, a red “Virtual Machine memory usage” alarm is displayed in the vCenter for every VM.

[![](images/VM-memory-Usage-300x37.png)](images/VM-memory-Usage.png)

I see this behavior in a lot of  VDI environments with PCI passthrough GPU cards. Customers I work for ask me to disable this annoying alarm. This can be easily done in the vSphere Client by disabling the "Virtual machine memory usage" alarm:

[![](images/2-300x120.png)](images/2.png)

When using PowerCLI this can be done with the following command:

```powershell
Get-AlarmDefinition -Name ‘Virtual machine memory usage’ | Set-AlarmDefinition -Enabled:$false  
```
