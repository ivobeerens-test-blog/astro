---
title: "Control (remotely) the power of your Home Lab"
description: "Using ICS-1000 to remotely control and schedule power for home lab equipment."
pubDate: "2013-02-15T12:39:15.000Z"
categories: 
  - "home-lab"
  - "homebrew"
  - "whitebox"
tags: 
  - "home-lab"
  - "homebrew"
  - "whitebox"
author: Ivo Beerens
url: /2013/02/15/control-remotely-the-power-of-your-home-lab/
---

I have a lab at home to test for example VMware vSphere and Microsoft stuff. Running your home lab for 24/7 will result in a high electricity bill. For a couple of months I use the Internet Control Station ICS-1000 (ICS-1000) to power on my home lab when needed from **anywhere**. The ICS-1000 controls (left picture) controls the receivers (right picture). The ICS-1000 is connected to my router. In the receivers are the power cables plugged from the devices you manage.

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><a href="images/foto-2.jpg"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="foto (2)" border="0" alt="foto (2)" src="images/foto-2_thumb.jpg" width="244" height="184"></a></td><td valign="top" width="200"><a href="images/foto-1.jpg"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="foto (1)" border="0" alt="foto (1)" src="images/foto-1_thumb.jpg" width="244" height="184"></a></td></tr></tbody></table>

So when needing my lab environment I  open the App on my iPhone and power on the home lab  from everywhere. After a short time I can remotely access the home lab and connect for example to my:

- NAS
- VMware vSphere with ESXi servers environment
- Microsoft Hyper-V environment

Using the web browser or the iPhone App for example you can program the timers to power on/off devices on specific times and dates.   

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><a href="images/image8.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb8.png" width="324" height="199"></a></td><td valign="top" width="200"><a href="images/image9.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb9.png" width="170" height="244"></a></td></tr></tbody></table>

I use different receivers through  the whole house and control it with the ICS-1000.  For example I control the light outside the house with timers I programmed in the the ICS-1000. The App has still some limitations and bugs.  For example it is not possible to edit timers.  To change the timers you need to delete and recreate them. Probably in March 2013 the App will be updated to solve some bugs and add new functionality.