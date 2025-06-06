---
title: "Display the protocol used on the VMware View desktop background"
description: "Using BgInfo to show View environment variables like connection protocol on desktop background."
pubDate: "2013-02-21T14:49:43.000Z"
categories: 
  - "horizon"
  - "view"
  - "VMware"
tags: 
  - "horizon"
  - "view"
  - "VMware"
author: Ivo Beerens
url: /2013/02/21/display-the-protocol-used-on-the-vmware-view-desktop-background/
---

Systinternals has a tool called “BgInfo”. With this tool it is possible to display content on a Windows desktop background. For example environment variable Information such as “computer name” and the “IP address” can be displayed. This can be very handy when testing or for people that do they support for the Windows environment.

VMware View 5.1 has the following environment variables available in a desktop session :

- ViewClient\_Broker\_DNS\_Name
- ViewClient\_Broker\_DomainName
- ViewClient\_Broker\_Remote\_IP\_Address
- ViewClient\_Broker\_Tunneled
- ViewClient\_Broker\_Tunnel\_URL
- ViewClient\_Broker\_URL
- ViewClient\_Broker\_UserName
- ViewClient\_IP\_Address
- ViewClient\_LoggedOn\_Domainname
- ViewClient\_LoggedOn\_Username
- ViewClient\_Machine\_Name
- ViewClient\_MAC\_Address
- ViewClient\_Protocol
- ViewClient\_Type
- ViewClient\_Windows\_Timezone

The View environment variables can be added to BgInfo using the custom field option.

[![image](images/image_thumb11.png "image")](images/image11.png)

After running BgInfo, the View environment variables are displayed on the desktop background. In the following example we added information on the desktop about what protocol (RDP or PCoIP) is used  to connect to the View desktop:

[![image](images/image_thumb12.png "image")](images/image12.png)



