---
title: "Enable Adobe Flash support for the VMware Horizon Administrator console"
pubDate: "2021-03-07T21:53:58.000Z"
tags: 
  - "VMware-horizon"
author: Ivo Beerens
url: /2021/03/07/enable-adobe-flash-player-for-vmware-horizon-environments/
---

Adobe Flash is no longer supported after December 31, 2020, and currently disabled by default.

[![](images/1-300x164.jpg)](images/1.jpg)

During my consulting work, I still see organizations that use Adobe Flash-based applications such as the VMware Horizon Administrator. VMware Horizon 7.10 has an HTML5 based Horizon Console that nearly feature-complete and replaces the Adobe Flash-based Horizon Console.

For organizations, it can difficult to manage there VMware Horizon environments below version 7.10 of VMware Horizon. This can be done by enabling Adobe Flash temporarily. **Caution: Enabling Adobe Flash is a security breach for your environment. So use with caution!!!**

With the following steps you can enable Adobe Flash support on a Windows:

- Download Firefox 78.6.1 ESR, [link](http://releases.mozilla.org/pub/firefox/releases/78.6.1esr/win64/en-US/)
- Create or edit the following file: 'C:\\Windows\\SysWOW64\\Macromed\\Flash\\mms.cfg' with the following settings:

```
EOLUninstallDisable=1  
SilentAutoUpdateEnable=0  
EnableAllowList=1  
AutoUpdateDisable=1  
ErrorReportingEnable=1  
AllowListUrlPattern=https://fqdn-of-the-horizon-connection-server:443  
```

- Replace the 'AllowListURLPattern' with the FQDN of the VMware Horizon Connection server or load balancer URL
- Open Firefox and enter the VMware Horizon Connection server or load balancing URL

[![](images/Horizon-Administrator-300x108.jpg)](images/Horizon-Administrator.jpg)

When you are still using the VMware Horizon Administrator make sure to upgrade your VMware Horizon environment. The end of general support for Horizon 7 is March 2021. Upgrade to minimal VMware 7.13 (has general support till October of 2022) or VMware Horizon 8.x.