---
title: "Perform ESXi host maintenance on a VMware Horizon View floating desktop pool"
description: "Steps to safely maintain ESXi hosts running View floating pools with local storage."
pubDate: "2013-08-19T13:02:47.000Z"
categories: 
  - "horizon"
  - "maintenance"
  - "view"
  - "VMware"
tags: 
  - "maintenance"
  - "VMware-horizon-view"
author: Ivo Beerens
url: /2013/08/19/perform-esxi-host-maintenance-on-a-vmware-horizon-view-floating-desktop-pool/
---

When you need to perform maintenance (planned downtime) on an ESXi host which is part of a floating pool the following steps can be be taken:

These steps are only required when using local storage for the linked clones!

1. In the VMware Horizon View Administrator, edit the pool and uncheck the datastore for the host on which maintenance is required. By unchecking the datastore no new desktops are provisioned to this host
2. In the pool settings modify the "Delete or refresh desktop on logoff" to "Delete Immediately"
3. **Optionally**: In the pool settings modify the "Automatically or logoff after disconnect" to 240 minutes or less so that disconnected sessions are removed.
4. Decrease the maximum number of desktops in the Provisioning settings so it matches the cluster
5. When there are no more floating desktops on the ESXi host place, it in maintenance mode
6. Perform maintenance of the ESXi host.

A good practice is to perform steps 1 till 4 a day before the actually maintenance of the ESXi host, so all the VDI desktops are removed. After the maintenance is done perform steps 1 to 6 by using the originally settings.