---
title: "VMworld Europe 2013&ndash; End User Computing (EUC) recap"
description: "Summary of VMware's end-user computing announcements and updates from VMworld Europe 2013."
pubDate: "2013-10-23T11:10:17.000Z"
categories: 
  - "vmworld"
tags: 
  - "vmworld"
author: Ivo Beerens
url: /2013/10/23/vmworld-europe-2013-end-user-computing-euc-recap/
---

To deliver IT as a Service VMware has for the coming year(s) the following focus areas:

- **Software-Defined Data Center (SDDC). See the VMworld 2013 SDDC recap here. [Link](https://www.ivobeerens.nl/2013/10/20/vmworld-europe-2013the-software-defined-data-center-sddc-recap/)**
- **End User Computing (EUC)**
- **vCloud Hybrid Services (vCHS)**

In this blog post I dig deeper in **End User Computing (EUC)** announcements . In the next blog post I will cover the vCHS and DAAS announcements.

### End User Computing (EUC)

**The VMware Horizon Suite has three main components:**

- **VMware Horizon View**
- **VMware Horizon Mirage**
- **VMware Horizon Workspace**

In the Horizon suite VMware vCenter Operations Manager for View will now be included and Horizon Workspace will support Citrix XenApp. The other announcements were only on Horizon View and Horizon Mirage.

**VMware Horizon View**

VMware Horizon View 5.3 is announced.  Some new features are:

- **Support for Virtual SAN (VSAN) beta**. One use case for Horizon View  is definitely VSAN. It would be great if VMware could include the VSAN license when it Generally Available (GA) in the Horizon View!
- **3D graphics with virtual Dedicated Graphics Acceleration (vDGA)**.  For graphical demanding apps such as 3D CAD you can use a dedicated GPU card such as the NVIDIA GRID K1 and K2 card.

<table cellspacing="0" cellpadding="2" width="400" border="0"><tbody><tr><td valign="top" width="200"><a href="images/k1.jpg"><img title="k1" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="k1" src="images/k1_thumb.jpg" width="219" height="244"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2013/10/k2.jpg"><img title="k2" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="k2" src="images/k2_thumb.jpg" width="265" height="240"></a></td></tr></tbody></table>

- **Support for Windows 8.1 VDI desktops**. Using the latest Windows Desktop OS as VDI desktop.
- **Use Windows 2008 as VDI desktop OS**. Using Windows 2008 as VDI desktop simplifies the licensing when connecting with non-Windows devices.
- **View Agent Direct Connection (VADC)**.  This can be handy for branch ROBO offices to connect to the VDI desktop(s) without a broker.

For more new features see the “What’s New in VMware Horizon View 5.3 “ information. Link

**ThinApp**

ThinApp 5.0 is announced. Back in March, VMware let our customers know that we planned to consolidate ThinApp licensing into the Horizon Suite and bundles After partners and customers complaining about this. VMware now announced that they will continue to deliver ThinApp as a standalone SKU!  Great news!

Other new features are:

- Supports 64-bit applications
- Support for Office 2013 and Internet Explorer 10
- Improved ThinDirect management with new ADMX & ADM policy files

**VMware Mirage**

Horizon Mirage version 4.3 is announced.  When combining View with VMware View 5.3, administrators can now manage View persistent desktop pools with full clones. Application and base images can be updated without affecting users installed applications    and  personalization. Other new features are:

- **New CVD Policy Features** . Horizon Mirage 4.3 introduces some CVD policy features that will help speed up deployments. A new image management policy allows centralization of CVDs to occur with little to no data upload. This feature also helps in Windows 7 migration deployments because there is less data that gets uploaded to the Horizon Mirage Server. Optimization settings for LAN environments allow for faster centralization phases. IT also now has more control over throttling of the Horizon Mirage client on each endpoint.
- **Windows 7 Migration Enhancements** – During a Windows 7 migration project, user downtime is a critical component to how successful the project will be. In Horizon Mirage 4.3, during OS migration we’ve introduced the ability to deploy Windows 7 applications layers along with the base layer. This helps in getting applications to users in a quicker manner.
- **Web Console Enhancements.** A new role in the Horizon Mirage Web Console has been introduced. The Protection Manager role helps IT administrate endpoints from a single pane of glass. Endpoint centralization status, trends and endpoint errors are provided in a dashboard view. The Protection Manager can edit upload policies, build collections, restore endpoints,and much more.
- **Centralization Calculator.**  Endpoints typically get centralized while end users work. Now, estimating how long the centralization process can take is made possible with the new Centralization Calculator. Simply fill in the values that your environment is comprised of, such as total number of endpoints and CVD size, and the calculator will estimate the centralization time phase. This is applicable to any environment of any size.