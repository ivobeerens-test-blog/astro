---
title: "Blue circle in the vSphere client after upgrading to vCenter Server 6.7 Update 2"
pubDate: "2019-04-24T07:02:21.000Z"
categories: 
  - "VMware"
  - "vSphere"
tags: 
  - "vcenter-server"
  - "vcsa"
  - "VMware"
author: Ivo Beerens
url: /2019/04/24/blue-circle-in-the-vsphere-client-after-upgrading-to-vcenter-server-6-7-update-2/
---

After upgrading the vCenter Server Appliance (VCSA) to version 6.7 Update 2, I tried to log in using the vSphere Client. After entering the credentials an endless blue running circle appears.

[![](images/vcsaup2-300x161.png)](images/vcsaup2.png)

In the VAMI interface (https://vcsa-fqdn:5480) of the VCSA, the health statistics of all the components are green (okay) so I decided to reboot the VCSA.

After the VCSA reboot I encountered the same blue running circle when trying to log in using the vSphere Client. I tried Firefox and Google and the Internet Explorer browser. The only browser that worked was Internet Explorer. I never used  Internet Explorer before so I tried to clear the cache of Google Chrome and Firefox using the following methods:

Clear cache, cookies and history of Google Chrome:

- Open Chrome.
- At the top right, click More ![More](https://storage.googleapis.com/support-kms-prod/ArAlBcUAe8h1l5m69uxnwElxkqwW0QdtIc3F)
- Click More tools and then Clear browsing data
- Time range: All time
- Select Browser history, cookies and cache images and files
- Click Clear data

Clear cache and cookies of Firefox browser:

- Open firefox
- In the address bar enter: about:preferences
- Click Privacy & Security
- Under Cookies and Site Data select Clear Data
- Check Cookies and Site Data and Cached Web Content
- Click Clear and select Clear Now

After clearing the cache I was able to log in using the vSphere Client without the endless blue circle. So make sure to clear the cache of the browser(s) when experiencing the circle problem.