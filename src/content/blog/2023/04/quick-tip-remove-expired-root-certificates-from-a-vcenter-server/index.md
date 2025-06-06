---
title: "Remove expired root certificates from a vCenter Server the easy way"
pubDate: "2023-04-17T17:44:33.000Z"
categories: 
  - "vcenter-server"
  - "VMware"
tags: 
  - "certificate"
  - "powercli"
  - "vcenter-server"
  - "vcsa"
author: Ivo Beerens
url: /2023/04/17/quick-tip-remove-expired-root-certificates-from-a-vcenter-server/
---

I see a lot of vCenter Servers that have expired root certificates. In the vCenter Server Appliance Administration section under Certificate Management, you can see the expired certificates.

![](images/1-1024x445.jpg)

Cleaning up expired root certificates from the vCenter Server can be done by using the "vecs-cli" command on the vCenter Server Appliance (In the vSphere Client this is not possible). This involves multiple steps ([VMware KB](https://kb.VMware.com/s/article/2146011)). An easy way to clean up expired root certificates is by using PowerCLI and following the steps below:
- Make sure that PowerCLI is installed. If not use the following command in PowerShell to install PowerCLI:
```powershell
Install-Module VMware.PowerCLI -Scope CurrentUser -Force -SkipPublisherCheck -AllowClobber
```
- Connect to the vCenter Server
```powershell
Connect-VIServer "VCENTER-FQDN"
```
- List the expired root certificate
```powershell
Get-VITrustedCertificate -vCenterOnly | Where-Object { $_.NotValidAfter -lt (Get-Date) }
```
- Remove the expired root certificate
```powershell
Get-VITrustedCertificate -vCenterOnly | Where-Object { $_.NotValidAfter -lt (Get-Date) } | Remove-VITrustedCertificate
```
![](images/2-1024x118.jpg)

With the latest PowerCLI oneliner, all the expired root certificates are removed from the VCSA. This is less complex than using the ```vecs-cli``` command.