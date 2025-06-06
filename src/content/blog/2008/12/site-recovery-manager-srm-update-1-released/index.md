---
author: Ivo Beerens
title: "Site Recovery Manager (SRM) Update 1 released"
pubDate: "2008-12-05T08:10:48.000Z"
categories: 
  - "SRM"
  - VMware
tags:
  - VMware
  - SRM
url: /2008/12/05/site-recovery-manager-srm-update-1-released/
---

SRM 1.0 Update 1 has the following new features:

- **New Permission Required to Run a Recovery Plan**  
    SRM now distinguishes between permission to test a recovery plan and permission to run a recovery plan. After an SRM server is updated to this release, existing users of that server who had permission to run a recovery plan no longer have that permission. You must grant Run permission to these users after the update is complete. Until you do, no user can run a recovery plan. (Permission to test a recovery plan is unaffected by the update.)
- **Full Support for RDM devices**  
    SRM now provides full support for virtual machines that use raw disk mapping (RDM) devices. This enables support of several new configurations, including Microsoft Cluster Server. (Virtual machine templates cannot use RDM devices.)
- **Batch IP Property Customization**  
    This release of SRM includes a tool that allows you to specify IP properties (network settings) for any or all of the virtual machines in a recovery plan by editing a comma-separated-value (csv) file that the tool generates.
- **Limits Checking and Enforcement**  
    A single SRM server can support up to 500 protected virtual machines and 150 protection groups. This release of SRM prevents you from exceeding those limits when you create a new protection group. If a configuration created in an earlier release of SRM exceeds these limits, SRM displays a warning, but allows the configuration to operate.
- **Improved Support for Virtual Machines that Span Multiple Datastores.**  
    This release provides improved support for virtual machines whose disks reside on multiple datastores.
- **Single Action to Reconfigure Protection for Multiple Virtual Machines**  
    This release introduces a **Configure All** button that applies existing inventory mappings to all virtual machines that have a status of Not Configured.
- **Simplified Log Collection**  
    This release introduces new utilities that retrieve log and configuration files from the server and collect them in a compressed (zipped) folder on your desktop.
- **Improved Acceptance of Non-ASCII Characters**  
    non-ASCII characters are now allowed in many fields during installation and operation.

SRM 1.0 Update 1 has great improvements such as:
- RDM support including Microsoft Cluster services
- Support VM's that span multiple datastores
- Support for ESX 3.5 Update 3 (You must have the latest patches!)
- Support for VC 2.5 Update 3

Before you begin with SRM check the [compatibility matrix](http://www.VMware.com/pdf/srm_10_compat_matrix.pdf). 



