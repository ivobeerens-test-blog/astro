---
title: "Unable to delete a VMDK because it&rsquo;s locked"
pubDate: "2011-03-30T10:16:11.000Z"
categories: 
  - "VMware"
  - "vSphere"
tags: 
  - "VMware"
  - "vpshere"
author: Ivo Beerens
url: /2011/03/30/unable-to-delete-a-vmdk-because-its-locked/
---

When trying to delete an “old” VMDK file, I’ve got the following message “device **or resource is busy**”. I was pretty sure that the VMDK was not connected to any VM(s) anymore. I tried to delete the VMDK by command line and by using the datastore browser.
I found the VMware KB article  
> “[Virtual machine does not power on because of locked files”](http://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=10051)

This KB article describes how to find the VMware ESX host that holds the lock.

To identify the VMware ESX server that holds the lock, used the following command:

```
vmkfstools -D /vmfs/volumes/<LUN/<name server.VMDK>
```

This command reports in the vmkernel.log the MAC address of the ESX server that holds the lock. Look in the vmkernel.log by using the following command:

```
tail /var/log/vmkernel log
```

The vmkernel.log output:

> Mar 29 15:43:07 server vmkernel: 7:03:34:25.713 cpu9:4223)FS3: 142: <START                                                     
server-flat.vmdk>  
> Mar 29 15:43:07 server vmkernel: 7:03:34:25.713 cpu9:4223)Lock \[type 10c00001 offset 31932416 v 142, hb offset 3272704  
> Mar 29 15:43:07 server vmkernel: gen 99305, mode 1, owner 4d39b32d-ef567209-7754-**0025b3e1a4c8** mtime 3227617\]

The bold text is the MAC address of the VMware ESX server that holds the lock. Now we need to find the VMware ESX server that matches the MAC address. The following PowerCLI script displays all MAC address of all VMware ESX servers and displays this in a gridview.

```powershell
Connect-viserver vCenterserver
Get-vmhostnetworkadapter | Select vmhost,mac | Out-GridView
```

With a gridview it is possible to filter easily. Add the last part of the MAC address (including the : ) and the corresponding VMware ESX server is displayed:

[![2011-03-29 16h20_42](images/2011-03-29-16h20_42_thumb.jpg "2011-03-29 16h20_42")](images/2011-03-29-16h20_42.jpg)

On the VMware server that holds the lock restart the Management agents by using the following command:

```
service mgmt-VMware restart
```

The lock disappeared and I was able to remove the VMDK file.