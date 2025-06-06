---
title: "First impressions of Cisco UCS Central 1.3"
pubDate: "2015-04-10T09:32:13.000Z"
categories: 
  - "cisco"
tags: 
  - "central"
  - "cisco"
  - "ucs"
author: Ivo Beerens
url: /2015/04/10/first-impressions-of-cisco-ucs-central-1-3/
---

Cisco released version 1.3(1a) of UCS Central. Cisco UCS Central integrates management of one or more UCS domains in a single management solution. This release has the following new enhancements:
- HTML5 UI: New task based HTML5 user interface.
- KVM Hypervisor Support: Ability to install Cisco UCS Central in KVM Hypervisor
- Scheduled backup: Ability to schedule domain backup time. Provides you flexibility to schedule different backup times for different domain groups.
- Domain specific ID pools: The domain specific ID pools are now available to global service profiles.
- NFS shared storage: Support for NFS instead of RDM for the shared storage is required for Cisco UCS Central cluster installation for high availability.
- The ability to manually push global VLANs and VSANs to UCS Manager without having to deploy a Global Service Profile to improve the centralized VLAN and VSAN management.
- Support for Cisco M-Series Servers.
- Connecting to SQL server that uses dynamic port.
- Support for SQL 2014 database and Oracle 12c Database.

**Upgrading**

For upgrading Cisco UCS Central, use the ISO image. You can upgrade Cisco UCS Central to release 1.3(1a) from any of the following two releases:

- From 1.1(2a) to 1.3(1a)
- From 1.2(x) to 1.3(1a)

The upgrade process is simple, attach the ISO and reboot the the Cisco UCS Central Virtual Machine and select the upgrade option.

[![1](images/1-300x166.png)](images/1.png) [![2](images/2-300x226.png)](https://www.ivobeerens.nl/wp-content/uploads/2015/04/2.png) [![3](images/3-300x226.png)](https://www.ivobeerens.nl/wp-content/uploads/2015/04/3.png)

After a couple of minutes the upgrade is finished and the appliance can rebooted.

**User Interfaces (UI)**

The legacy interface can still be used by using a https connection to the UCSC appliance.

[![4](images/4-300x150.png)](images/4.png)

The new HTML 5 interface can be accessed by using the following URL:

- **https://<ucs central ip>/ui**

Below are some screenshots of the new HTML-5 UI:

[![5](images/5-300x130.png)](images/5.png) [![6](images/6-300x150.png)](https://www.ivobeerens.nl/wp-content/uploads/2015/04/6.png) [![7](images/7-300x150.png)](https://www.ivobeerens.nl/wp-content/uploads/2015/04/7.png) [![8](images/8-300x150.png)](https://www.ivobeerens.nl/wp-content/uploads/2015/04/8.png)
