---
title: "Identify the Single Sign-On (SSO) deployment method for the vCenter Server"
description: "How to determine SSO deployment type in vSphere 5.5 environments."
pubDate: "2014-11-26T14:20:12.000Z"
categories: 
  - "sso"
  - "VMware"
  - "vSphere"
tags: 
  - "deployment"
  - "srm"
  - "sso"
  - "VMware"
  - "vSphere"
author: Ivo Beerens
url: /2014/11/26/identify-single-sign-sso-deployment-method-vcenter-server/
---

With vSphere 5.5 you have the following deployment methods for Single Sign-On (SSO):
- vCenter Single Sign-On for your first vCenter Server
- vCenter Single Sign-On for an additional vCenter Server in an existing site (formerly HA Cluster)
- vCenter Single Sign-On for an additional vCenter Server with a new site (formerly Multisite)

Once SSO is installed it can be usefull to identify what deployment options are used for example in a Site Recovery Manager (SRM) deployment. The following steps can be used to identify what deployment option are used for SSO on a vCenter Server 5.5:

- Browse to the following directory on the vCenter Server: `C:\ProgramData\VMware\VMware VirtualCenter`
- Use a type command to display  the `LS_ServiceID.prop` file. The file contains the site name and identifier.  For example:  **SiteName1**:10b042be-9b7a-467c-aa05-047a895c60fb
- Repeat the above steps on the other vCenter Server(s)

If the string is the same in both sites SSO has deployed as:  "vCenter Single Sign-On for an additional vCenter Server in an existing site". If the string is different, the vCenter Single Sign-On instance is deployed as:  "vCenter Single Sign-On for an additional vCenter Server with a new site".