---
title: "What to check before upgrading to vSphere 6.5"
pubDate: "2016-11-21T16:04:32.000Z"
categories: 
  - "vSphere"
tags: 
  - "vSphere"
author: Ivo Beerens
url: /2016/11/21/check-upgrading-vsphere-6-5/
---

Last week vSphere 6.5 was released (GA). This release has a lot of new cool features (see this [link](http://localhost/2016/10/18/whats-new-vsphere-6-5/) for more information). In the past I saw vSphere environments that are upgraded without proper preparation resulting in a rollback because compatibility issues with hard-or software. So I created a simple list with steps to check before upgrading to vSphere 6.5:
- Check the hardware against the VMware Compatibility Guide, [link](http://www.VMware.com/resources/compatibility/search.php)
    - There is a PowerCLI script to check the hardware against the VMware Compatibility Guide, [link](http://www.virten.net/2016/11/powercli-script-to-verify-esxi-6-5-support/)
    - Devices deprecated and unsupported in ESXi 6.5, [link](https://kb.VMware.com/selfservice/search.do?cmd=displayKC&docType=kc&docTypeID=DT_KB_1_1&externalId=2145810)
- Check if all vSphere products are supported by vSphere 6.5. The following product are **not** supported yet (when writing this blog):
    - VMware NSX
    - VMware Integrated OpenStack
    - vCloud Director for Service Providers
    - vRealize Infrastructure Navigator
    - App Volumes
    - Horizon Air Hybrid-Mode
    - Integrated OpenStack
    - vCloud Networking and Security
    - vRealize Business for Cloud
    - vRealize Configuration Manager
    - vRealize Hyperic
    - vRealize Networking Insight
- Check the "Important information before upgrading to vSphere 6.5 article, [link](https://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147548)
- Check the update sequence for vSphere 6.5 and its compatible VMware products, [link](https://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147289)
- Check if all the third-party products are supported by vSphere 6.5. For example last week Veeam Backup & Replication 9.5 is released. This release has no support yet for vSphere 6.5. Veeam Availability Suite 9.5 Update 1 will add support for vSphere 6.5.
- The existing vSphere 6.0 license keys are supported for vSphere 6.5. No new license key are needed. More info: [link](https://kb.VMware.com/selfservice/search.do?cmd=displayKC&docType=kc&docTypeID=DT_KB_1_1&externalId=2059926)
- Check the vSphere 6.5 upgrade documentation, link
- Always install vSphere 6.5 first in non-production environments and test all the critical stuff for some time. vSphere 6.0 had some nasty Change Block Tracking (CBT) bugs that you don't want in your production environment.
- Check the supported and deprecated topologies for VMware vSphere 6.5 article, more info: [link](https://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147672)
- The vSphere Windows (C#) Client is  deprecated. Use the vSphere Web client of the new HTML5 based Client.
- VMFS6 is the new filesystem of vSphere 6.5. VMFS6 cannot be inline or offline upgraded from VMFS5 to VMFS6. More info: [link](https://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147824)
- TLS protocol versions 1.0, 1.1, and 1.2 are enabled by default in vSphere 6.5. More information about disabling TLS 1.0 can be found here: [link](https://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2147469).