---
title: "Troubleshoot replication problems between VMware Horizon View Connection servers"
description: "Guide to diagnose and fix LDAP replication issues between Horizon View Connection servers."
pubDate: "2014-09-17T07:15:19.000Z"
categories: 
  - "VMware-horizon-view-2"
  - "VMware-view"
tags: 
  - "horizon"
  - "view"
  - "VMware"
author: Ivo Beerens
url: /2014/09/17/vmware-view-check-the-replication-status/
---

In environments with multiple Horizon View Connection Servers (High Available) the Lightweight Directory Access Protocol (LDAP) directory is replicated. Configuration, Pool and desktop information is stored in the ADAM database. Problems with replication can result in:
- Configuration changes made are not replicated
- Authentication problems

The VMware View Administrator dashboard does not check the replication status.  So regular checking the replication status is a good thing. Checking the replication status can be done by using the following command: 
```
repadmin.exe /showrepl localhost:389 DC=vdi,DC=VMware,DC=int
```
When the replication is okay, it looks like something below:

[![image](images/image11_thumb.png "image")](images/image11.png)

When there are problems with the replication between the  Connection Servers errors as "8453 Replication access was denied", "1772 The list of RPC servers available for the binding of auto handles has been exhausted" or 8457 The destination servers is currently rejecting replication requests" are displayed using the repadmin utility.

[![3](images/3.png)](images/3.png)

When having replication problems, changes are not replicated. Here is an example when logging in the VMware View Administrator  on each View Connection server, it displays differences in the " Preparing"  " Problem Desktops"  and " Prepare for use" amounts.

<table style="height: 67px;" width="623"><tbody><tr><td><a href="images/4.png"><img class="aligncenter size-medium wp-image-3010" src="images/4-300x62.png" alt="4" width="300" height="62"></a></td><td><a href="https://www.ivobeerens.nl/wp-content/uploads/2014/06/5.png"><img class="aligncenter size-medium wp-image-3011" src="images/5-300x58.png" alt="5" width="300" height="58"></a></td></tr></tbody></table>

**Here are some tips for troubleshooting replication problems:**

- Check if port 389 is open on the View Connection Servers
- Restart the VMware View LDAP directory service (VMware VDMS service). It will restart the View Connection Server service.

![image](images/image1_thumb.png "image")

- Force replication by using the following command: `repadmin.exe /replicate fqdn-localhost:389 fqdn-remotehost:389 dc=vdi,dc=VMware,dc=int`
- Change the fqdn-locahost and fqdn-remote host to the View Connection Server names in your environment

[![image](images/image_thumb5.png "image")](images/image6.png)

- Ensure that replication has not been disabled by using the following command:
`repadmin /options localhost:389 -DISABLE_OUTBOUND_REPL -DISABLE_INBOUND_REPL`

With the checks listed above the replication can be checked and in most cases repaired if it is broken.