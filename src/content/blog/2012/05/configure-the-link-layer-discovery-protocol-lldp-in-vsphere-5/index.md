---
title: "Configure the Link Layer Discovery Protocol (LLDP) in vSphere 5"
pubDate: "2012-05-16T07:50:58.000Z"
categories: 
  - "networking"
  - "vSphere5"
tags: 
  - "networking"
  - "vSphere5"
author: Ivo Beerens
url: /2012/05/16/configure-the-link-layer-discovery-protocol-lldp-in-vsphere-5/
---

Link Layer Discovery Protocol (LLDP)is a vendor-neutral open standard discovery protocol that is supported by multiple vendors such as Cisco, HP and Juniper for example. LLDP displays for example on what network switch and port the NIC in the ESXi hosts is connected. Prior VMware vSphere 5 only Cisco Discovery Protocol (CDP) was supported.

In vSphere 5 Link Layer Discovery Protocol (LLDP) is supported. CDP and LLDP can be handy for example when you want to know that the correct network switch port is used when installing or troubleshooting ESXi hosts. 

**LLDP is only available on the vNetwork Distributed Switch (vDS), so you need an Enterprise Plus license to use LLDP!**

### Enable the LLDP protocol

- Right-click the vSphere distributed switch in the inventory pane, and select Edit Settings.
- On the Properties tab, select Advanced.
- Select Enabled from the Status drop-down menu.
- Select Link Layer Discovery Protocol from the Type drop-down menu.
- Select the LLDP mode from the Operation drop-down menu.

[![image](images/image_thumb11.png "image")](images/image11.png)

There are three operation modes:

> **Listen**   
> ESXi detects and displays information about the associated physical switch port, but information about the vSphere distributed switch is not available to the switch administrator.
> 
> **Advertise**  
> ESXi makes information about the vSphere distributed switch available to the switch administrator, but does not detect and display information about the physical switch.
> 
> **Both**  
> ESXi detects and displays information about the associated physical switch and makes information about the vSphere distributed switch available to the switch administrator.

### Checking LLDP statistics

After configuring LLDP, you can check the port statistics by clicking on the ‘blue Information icon’ on the NIC in the ESXi host:

[![image](images/image_thumb12.png "image")](images/image13.png)