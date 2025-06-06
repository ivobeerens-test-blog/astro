---
title: "VMware ESXi 5 whitebox NIC support"
pubDate: "2011-12-13T15:44:34.000Z"
categories: 
  - "esxi"
  - "home-lab"
  - "whitebox"
tags: 
  - "esxi-2"
  - "homebrew"
  - "whitebox"
author: Ivo Beerens
url: /2011/12/13/vmware-esxi-5-whitebox-nic-support/
---

I tested the NICs below in my VMware ESXi 5.x whitebox server at home. Here the status:
<table border="0" width="400" cellspacing="0" cellpadding="2"><tbody><tr><td valign="top" width="133"><strong><span>NIC</span></strong></td><td valign="top" width="133"><strong><span >Recognized by VMware ESXi 5</span></strong></td><td valign="top" width="133"><strong><span >Listed in ESXi 5 as</span></strong></td></tr><tr><td valign="top" width="133"><span >Intel PRO/1000GT Desktop Adapter PCI</span></td><td valign="top" width="133"><span >Yes</span></td><td valign="top" width="133"><span >Intel 82541PI Gigabit Ethernet Controller</span></td></tr><tr><td valign="top" width="133"><span >Realtek RTL 8111E</span></td><td valign="top" width="133"><span >Yes</span></td><td valign="top" width="133"><span >Realtek 8168 Gigabit Ethernet</span></td></tr><tr><td valign="top" width="133"><span >Intel Gigabit CT Desktop Adapter PCI-e</span></td><td valign="top" width="133"><span >Yes</span></td><td valign="top" width="133"><span >Intel Corporation 82574L</span></td></tr><tr><td valign="top" width="133"><span >Intel 82579 Gigabit LAN controller</span></td><td valign="top" width="133"><span ><span ><strong>No </strong>You need the make a customized ESXi 5 ISO or VIB file.</span></span>This is a not supported configuration!</td><td valign="top" width="133"><span ><span >Intel Corporation 82579V&nbsp;</span></span>orIntel Corporation 82579LM</td></tr></tbody></table>

To add for example the Intel 82579 chipset, create a customized ESXi 5 ISO.  This is very simple because some people have already done the hard work.

Here are the steps:

1. Download ESXi-Customizer (create by Andreas Peetz)
2. Download the driver (created by Chilly)
3. Start the ESXi-Customizer and follow the 3 steps:

[![2011-12-04 17h03_20](images/2011-12-04-17h03_20_thumb.jpg "2011-12-04 17h03_20")](images/2011-12-04-17h03_201.jpg)

And you're ready to create the customized VMware ESXi 5 ISO. The ISO supports the Intel 82579V and 82579LM NIC(s) found on many whitebox motherboards today. Possible future updated version(s) of the driver can be found in the following [post](http://hardforum.com/showthread.php?t=1607992).