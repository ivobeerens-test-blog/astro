---
title: "Configure VSAN on HP Servers"
description: "Guide to setting up VMware VSAN on HP Proliant servers with HBA mode."
pubDate: "2016-06-09T10:13:33.000Z"
categories: 
  - "vsan"
tags: 
  - "euc"
  - "sddc"
  - "vsan"
author: Ivo Beerens
url: /2016/06/09/vsan-hp/
---

For a new End User Computing (EUC) project I installed a Hybrid Virtual SAN (VSAN) configuration on HP Proliant server hardware. VSAN will be used as storage layer for VDIs. Each HP Proliant DL360 Gen9 server has the following components:
- HP Workload Accelerator as caching device
- HP Smart Array P440 controller with several 10k SAS disks as capacity tier

To enable VSAN the the first thing to do is to check the VSAN HCL([link](https://www.VMware.com/resources/compatibility/search.php?deviceCategory=vsan))

[![HCL1](images/HCL1-300x51.png)](images/HCL1.png)

[![HCL2](images/HCL2-300x58.png)](images/HCL2.png)

The VSAN HCL gives important information about:

- What hardware is supported?
- What configuration does the  HP Smart Array controller support?
- VSAN supported version(s)
- Device driver and firmware versions including the download location of the driver.

All the hardware is supported and the firmware levels are listed in the HCL. So the next step is to do is to configure the HP Smart Array P440 controller in Pass-Through mode. HP calls this "HBA mode". In HBA mode, all physical drives are presented directly to the operating system and the hardware RAID engine is disabled. This can be done in the Smart Storage Administrator.

[![HBAmode](images/HBAmode-300x193.png)](images/HBAmode.png)

After enabling the HBA mode the hosts needs a reboot.

The next step it to install the server with the HP Custom ESXi image . After the installation the ESXi, the HP Smart Array Controller is not recognized because the driver is not included. This same is for the HP Workload Accelerator that will serve for the caching tier. Download both drivers and add them to vSphere Update Manager. After both drivers are installed check the HP Smart Array Controller by using the following command (included in the HP Customed ESXi image):

```powershell  
esxcli hpssacli cmd -q "controller "slot=1" show config detail"  
```

[![esxi command](images/esxi-command-300x170.png)](images/esxi-command.png)

_The "slot=" option depends on the slot number the HP Smart Array P440 controller is installed._

To list the drives attached to the controller with the following command:

```powershell  
esxcli hpssacli cmd -q "controller slot=1 physicaldrive all show"  
```

The Workload Acccelerator status can be displayed with the following command:

```powershell  
esxcli hpssacli cmd -q "controller slot=1 physicaldrive all show"  
```

The last step is to  open the vSphere Web Client, start enabling VSAN and claiming the disks.