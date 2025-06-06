---
title: "In the vSphere Web Client the &ldquo;Use Windows session authentication&rdquo; is grayed out"
description: "How to enable Windows authentication in vSphere Web Client by installing Client Integration Plugin."
pubDate: "2013-01-24T09:44:15.000Z"
categories: 
  - "VMware"
  - "vSphere51"
tags: 
  - "VMware"
  - "vSphere51"
author: Ivo Beerens
url: /2013/01/24/in-the-vsphere-web-client-the-use-windows-session-authentication-is-grayed-out/
---

When logging in the vSphere Web Client login page the “Use Windows session Authentication” check box is grayed out. To solve this you need to install the Client Integration Plug-in.

The Client  Integration Plug-in provides:

- Access to the VM console
- Deploy OVF or OVA templates
- Transfer files with the datastore browser
- Use Windows Session authentication

Without the VMware Client Integration Plug-in, the “Use Windows session Authentication” check box is grayed out (1) in the vSphere Web Client login page.

![image](images/image_thumb6.png "image")

After installing the VMware Client Integration Plug-in (2) from the vSphere Web Client login page, the Use Windows session Authentication check box option can be checked and the current login setting are used in the vSphere Web Client.

![image](images/image_thumb7.png "image")