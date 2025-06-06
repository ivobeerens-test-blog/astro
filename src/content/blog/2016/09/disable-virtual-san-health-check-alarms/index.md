---
title: "Disable Virtual SAN health check alarms"
pubDate: "2016-09-07T06:38:44.000Z"
categories: 
  - "VMware"
  - "vsan"
tags: 
  - "virtual-san"
  - "vsan"
author: Ivo Beerens
url: /2016/09/07/disable-virtual-san-health-check-alarms/
---

When using PCIE/NVMe SSDs in the capacity layer of Virtual SAN, the SSDs are generating a warning for the “Hardware Compatibility – SCSI Controller on Virtual SAN HCL” health check, even when the devices are on the Virtual SAN HCL.

[![alarm](images/alarm-300x67.png)](images/alarm.png)

The "Hardware Compatibility - SCSI Controller on Virtual SAN HCL**"** health check cannot detect the PCIE/NVMe SSDs because they do not use standard I/O controllers.

To disable the HCL health check alarm use these simple steps:

- In the vCenter Web Client top level, navigate to Manage and select "**Alarm Definitions**"
- Navigate to the alarm and select **Edit**

[![alarm1](images/alarm1-300x140.png)](images/alarm1.png)

- Deselect the "**Enable this alarm**" checkbox and click on Finish

[![alarm3](images/alarm3-300x175.png)](images/alarm3.png)

Another use case is to disable the HCL health check(s) in non-production lab environments that use Virtual SAN with hardware that is not certified.