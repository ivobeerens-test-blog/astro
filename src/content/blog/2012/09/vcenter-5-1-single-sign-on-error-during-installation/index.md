---
title: "vCenter 5.1 Single Sign On error during installation"
description: "How to fix SSO installation error by configuring SQL Server authentication mode."
pubDate: "2012-09-11T16:24:14.000Z"
categories: 
  - "vcenter-2"
  - "vSphere51"
tags: 
  - "vcenter"
  - "vSphere51"
author: Ivo Beerens
url: /2012/09/11/vcenter-5-1-single-sign-on-error-during-installation/
---

Today vSphere 5.1 is released. I did an upgrade of my existing vSphere 5 vCenter server. During the installation of the vCenter Single Sign On (SSO) software the following warning occurred:

Error 29115: Cannot authenticate to DB.

[![image](images/image_thumb6.png "image")](images/image7.png)

After this error the installation stops and the rollback begins. To solve this make sure the **server authentication** checkbox is set to **SQL Server and Windows Authentication mode** on the SQL server.

[![image](images/image_thumb7.png "image")](images/image8.png)

Thanks to [Gabrie van Zanten](http://www.gabesvirtualworld.com/) and [Maish Saidel-Keesing](http://technodrone.blogspot.com/) for helping me out!