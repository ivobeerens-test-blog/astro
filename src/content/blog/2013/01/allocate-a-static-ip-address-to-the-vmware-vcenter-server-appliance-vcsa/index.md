---
title: "Allocate a static IP address to the VMware vCenter Server Appliance (VCSA)"
description: "How to configure static IP address on VCSA when DHCP is not available."
pubDate: "2013-01-14T21:15:44.000Z"
categories: 
  - "vcenter-2"
  - "vcsa"
tags: 
  - "vcenter"
  - "vcsa"
author: Ivo Beerens
url: /2013/01/14/allocate-a-static-ip-address-to-the-vmware-vcenter-server-appliance-vcsa/
---

When deploying the VMware vCenter Server Appliance (VCSA) it will default look for a DHCP address. When there is no DHCP server available the following error is displayed:

> O NETWORKING DETECTED.

![image](images/image_thumb.png "image")

it is possible to manually configure a static IP address by using the command line. Here are the steps:

- Open a console session of the VCSA 
- Login as: **root**
- Default password is: **VMware**
- Execute the following command:

`/opt/vmware/share/vami/vami_config_net`

- After executing the command, a menu is displayed. Within the menu It is possible to change the IP address, hostname, DNS, Default gateway and proxy server.

![image](images/image_thumb1.png "image")

- After allocate a static IP Address to the VCSA the post configuration can be done by using the following URL: 

`https://static-ip-address:5480`