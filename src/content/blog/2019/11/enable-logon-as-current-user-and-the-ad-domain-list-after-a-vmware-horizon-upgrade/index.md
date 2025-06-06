---
title: "\"Logon As Current User\" and the \"AD domain list\" options default disabled after a VMware Horizon upgrade"
pubDate: "2019-11-18T19:18:48.000Z"
tags: 
  - "VMware-horizon"
author: Ivo Beerens
url: /2019/11/18/enable-logon-as-current-user-and-the-ad-domain-list-after-a-vmware-horizon-upgrade/
---

When upgrading a VMware Horizon Connection server to version 7.8 or higher the following message appears during the upgrade.

[![](images/1-300x141.jpg)](images/1.jpg)

This means the following settings are disabled after the upgrade:

- Login As Current User will no longer work when selecting the "Log in as current user" in the Horizon Client
- List of user domains will be withheld from Horizon clients

<table style="border-collapse: collapse; width: 100%;"><tbody><tr><td style="width: 50%;"><a href="images/domainon.jpg"><img class="aligncenter size-medium wp-image-7175" src="images/domainon-300x168.jpg" alt="" width="300" height="168"></a></td><td style="width: 50%;"><a href="images/client.jpg"><img class="aligncenter size-medium wp-image-7177" src="images/client-300x198.jpg" alt="" width="300" height="198"></a></td></tr></tbody></table>

With this option, the Active Directory domain name is not visible and replace \*DefaultDomain\*

These settings are disabled to improve security but sometimes after a Horizon environment upgrade one or more settings needs re-enabled again. Here are the steps to enable these settings:

## **Enabling Login As Current User**

Allow the Connection Server to accept logon as current user authentication

1. Open: _**https://fqdn/admin**_
2. Enter the user name and password
3. Click on "View Configuration" and select Servers
4. Select the Connection Servers tab
5. Select the Connection Server and click on Edit
6. Select the Authentication tab
7. Scroll down the bottom and select "Accept logon as current user"
8. Click on OK

Repeat steps 5-8 for each VMware Horizon Connection Server.

[![](images/3-300x135.jpg)](images/3.jpg)

## **Enabling the domain list in the Horizon Client**

1. Open: https://fqdn/admin
2. Enter the user name and password
3. Click on "View Configuration" and  Edit the "Global Settings"
4. Scroll down and select "Send domain list"
5. Click on OK

[![](images/2-300x136.jpg)](images/2.jpg)

After enabling this global setting the Active Directory domain is visible again and it is possible to select another AD domain.

[![](images/domainon-300x168.jpg)](images/domainon.jpg)