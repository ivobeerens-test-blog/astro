---
author: Ivo Beerens
title: "VMware ESX servers unable to manage via VIC, SSH or iLO session"
pubDate: "2009-01-06T19:25:56.000Z"
categories: 
  - "bug"
  - "VMware"
url: /2009/01/06/VMware-esx-servers-unable-to-manage-via-vic-ssh-or-ilo-session/
---

Today i had a nasty problem with a VMware environment. Some VMware ESX servers were disconnected from vCenter. Tried to connect the VMware ESX hosts using the VIC,  but that was not possible. I was unable to login via SSH connection, connect with HP iLO to the HP Blade enclosure and did a remote connection to the console. There where HA errors on the screen. I tried to log in the console, after typing the password and hit the enter button the login prompt re-appears every time i try.  **The VMware ESX servers were not manageable anymore, DAMM.**

The VMs on the disconnected VMware ESX servers were still running and had RDP enabled. The only solution so far was to log in via RDP and shutdown the VMs.  I did this for one VMware ESX server. After shutting down all VMs, i did a cold reboot of the VMware ESX server. After several minutes the VMware ESX server reappears in vCenter. I went to the log files and found the following error:

fork: Resource temporarily unavailable

[![clip_image002](images/clip-image002-thumb.jpg "clip_image002")](images/clip-image002.jpg)

After searching the VMware Knowledge base i found the following article:

[Defunct cimservera processes seen on VMware ESX 3.5 running hardware management agents](http://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1007887)

It looks like we have the same symptoms:
- Unable to login through SSH to VMware ESX host
- Unable to login on local Service console
- HA errors.

I perform the command `ps-ef` on the console of other VMware ESX servers that were still working and returned a couple of thousands cimservera defunct processes. Holy shit.

[![clip_image002[5]](images/clip-image0025-thumb.jpg)]

After restarting the pegasus service on the host the cimservera defunct processes are away. Now there are 134 processes active.

It seems that one ISCSI target was offline and that all the VMware ESX servers tried to connect to the ISCSI target every 60 seconds, the failed login attemps results in thousands of cimservera defunct processes. This is a bug and VMware will release a patch for this nasty problem. Watch your patches.

I did a temporarily fix by schedule restarting the pegasus service every day on every VMware ESX server using the [plink](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) utility.

Watch your processes frequently on your VMware ESX hosts!