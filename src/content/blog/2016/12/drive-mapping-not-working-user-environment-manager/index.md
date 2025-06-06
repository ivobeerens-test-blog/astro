---
title: "Drive mapping not working with User Environment Manager (UEM)"
description: "Fix drive mapping issues with VMware UEM for local admin users with UAC enabled."
pubDate: "2016-12-21T14:25:19.000Z"
categories: 
  - "horizon"
  - "VMware"
tags: 
  - "horizon"
  - "VMware"
author: Ivo Beerens
url: /2016/12/21/drive-mapping-not-working-user-environment-manager/
---

During a Horizon View implementation with User Environment Manager (UEM) 9.1 the drive mappings don't show up for some with a Windows 10 VDI. The flexEngine log shows the drive mapping was successfully.

> 2016-12-16 15:18:45.084 [INFO ] Successfully mapped drive 'G:' to '\\filesrv-01\apps$' ('Applicaties.xml')

When opening an elevated command prompt and type the command `net use` the drive mappings where displayed and accessible. The users that didn't get the drive mappings where local administrator in the Windows 10 VDI desktop.

There is a  known limitation with drive mappings if the user is:

- Local Admin
    - **and**
- User Account Control (UAC) is enabled

Changing one of them results in displaying the drive mapping in the Windows 10 VDI desktop. More information about this issue can be found here, [link](https://communities.VMware.com/message/2609027#2609027).

**UppubDate: December 22, 2016**: Pim van de Vis pointed me to the following setting to solve this issue. The VMware UEM FlexEngine Advanced ADMX template has an advanced setting that is called 'Special Drive Mapping Logic'. Enabling the 'Special Drive Mapping Logic' setting solves this issues. More information can be found here, [link](https://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2145286).