---
title: "vCenter Server Appliance (VCSA) Failed to send http data error"
pubDate: "2018-09-12T14:23:45.000Z"
tags: 
  - "VMware"
coverImage: "error.png"
author: Ivo Beerens
---

When trying to upgrade the vCenter Server Appliance (VCSA) to version 6.7 using the GUI wizard, I’ve got the following error:

[![](images/error-300x58.png)](images/error.png)

> Failed to send http data.

I checked the logs but didn't find any clue. When installing the VCSA using the CLI I've got the same "Failed to send http data" error ([link](https://www.ivobeerens.nl/2018/08/20/vcenter-server-appliance-vcsa-automated-unattended-deployment/)).  The FQDN of the ESXi host was revolvable by DNS and reverse lookup worked.  After changing the ESXi FQDN to the IP address of the ESXi  host, the deployment finished without errors. I changed the "ESXi host or vCenter Server name" in the wizard step 3 and 4 to fix the problem.

[![](images/failed-to-send-1-300x153.png)](images/failed-to-send-1.png) [![](images/failed-to-send-300x153.png)](images/failed-to-send.png)

I couldn't find  what causes the "Failed to send http data" error. I had this error during installs and upgrades in different environments. Hopefully someone can explain what happen or it is a bug that will be solved in future releases.