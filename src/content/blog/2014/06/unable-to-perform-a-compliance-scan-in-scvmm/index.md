---
title: "Unable to perform a Compliance Scan in SCVMM"
description: "Fix for SCVMM compliance scan failure by resetting proxy server configuration."
pubDate: "2014-06-19T06:23:50.000Z"
categories: 
  - "hyper-v"
  - "scvmm"
tags: 
  - "hyper-v-2"
  - "scvmm"
author: Ivo Beerens
url: /2014/06/19/unable-to-perform-a-compliance-scan-in-scvmm/
---

In System Center Virtual Machine Manager (SCVMM) an Update (WSUS) Server is added, so VMM can be used to update the hosts with Windows patches.When trying to scan a cluster of hosts for compliance the following error occurred:

**Error (24035)**

Compliance scan failed with error: 80244017.

**Recommended Action:**

Ensure the WINHTTP proxy settings are correctly configured for the communications with WSUS. If WSUS is configured to use SSL ensure the WSUS certificate is installed in the trusted Root CA for the machine and then try the operation again.

[![image](images/image_thumb3.png "image")](images/image3.png) 

The cluster consist of several Microsoft Hyper-V Server 2012 R2 hosts. All the hosts are configured with a proxy server during the initial installation. After resetting the proxy server per host,  the SCVMM was able to perform a compliance scan without errors. The following command is used to reset the proxy server configuration on the core version:

`netsh winhttp reset proxy`

[![image](images/image4_thumb.png "image")](images/image4.png)