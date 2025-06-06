---
title: "Display the maximum concurrent connected users in VMware Horizon View with PowerCLI"
description: "PowerCLI commands to report on daily maximum concurrent View user connections."
pubDate: "2013-07-23T09:37:33.000Z"
categories: 
  - "horizon"
  - "powercli"
  - "view"
tags: 
  - "powercli"
  - "VMware-horizon-view"
author: Ivo Beerens
url: /2013/07/23/display-the-maximum-concurrent-connected-users-in-vmware-horizon-view-with-powercli/
---

VMware Horizon View generates everyday at 5 minutes for midnight an event how many concurrent users connected to View that day. This information can be useful for example when when investing trends.

When the Event database in the VMware Horizon View Administrator is configured, this information can be found using the VMware Horizon View Administrator, Monitoring, select Events and filter for "over the past"

[![image](images/image_thumb6.png "image")](images/image6.png)

With PowerCLI the daily maximum concurrent connected users can be displayed by using the following command from the VMware View Connection server using View PowerCLI:

`Get-EventReport -viewName user_count_events`

[![image](images/image_thumb7.png "image")](images/image7.png)

The following command displays the concurrent users from the last 5 days:

`Get-EventReport -viewName user_count_events -startDate ((Get-Date).AddDays(-5)) | sort time | Select Time,Usercount`

[![image](images/image_thumb8.png "image")](images/image8.png)

You can customize the command further for your needs.