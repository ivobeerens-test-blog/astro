---
title: "After upgrading vSphere 4 to 5 the Fusion-IO card is in minimal mode"
description: "How to fix Fusion-io card firmware compatibility issues after vSphere 5 upgrade."
pubDate: "2013-12-03T09:49:04.000Z"
categories: 
  - "vpshere"
  - "vpshere-5"
  - "vSphere"
  - "vSphere5"
tags: 
  - "esxi-2"
  - "fusion-io"
  - "ssd"
  - "upgrade"
  - "VMware"
  - "vSphere"
author: Ivo Beerens
url: /2013/12/03/upgrading-vsphere-5-x-fusion-io-card-disappeared/
---

Last week I did a VMware vSphere and VMware View 4 to 5 upgrade. The ESXi servers for the VMware View environment uses Fusion-IO (HP IO Accelerators) PCI flash cards for there non-persistent VDI pools. After the upgrade to vSphere 5.1 I imported the latest Fusion-IO drivers and created a baseline in vSphere Update Manager (VUM) and deployed the new drivers to the cluster.

<table width="400" border="0" cellspacing="0" cellpadding="2"><tbody><tr><td valign="top" width="200"><a href="images/image10.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" alt="image" src="images/image_thumb10.png" width="310" height="222" border="0"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2013/10/image11.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" alt="image" src="images/image_thumb11.png" width="315" height="226" border="0"></a></td></tr></tbody></table>

After the installation of the Fusion-IO drivers on the ESXi hosts, the Fusion-IO card was not listed in the vSphere (Web) client. Via SSH I make a connection the the ESXi servers. When i run the **fio-status** command the following warning appeared:

> Driver is in Minimal mode: The firmware on this device is not compatible with the currently installed version of the driver.
> 
> ACTIVE WARNINGS: The ioMemory is currently running in a minimal state.

[![image](images/image_thumb12.png "image")](images/image12.png)

The warning means that the firmware needs to be upgraded. I uploaded the firmware to a central datastore and run the following command:

`fio-update-iodrive firmwarefilename.fff`

[![image](images/image_thumb13.png "image")](images/image13.png)

When the firmware upgrade completed, the ESXi servers needed to restart.

[![image](images/image_thumb14.png "image")](images/image14.png)

After the rebootI checked the status with the **fio-status** command again.  The Fusion-IO card is out of minimal mode.

[![image](images/image_thumb15.png "image")](images/image15.png)

[![image](images/image1_thumb.png "image")](images/image11.png)

After the firmware upgrade the Fusion-IO card is listed again.