---
title: "Create a VMware Horizon View self signed certificate with makecert"
description: "Step-by-step guide to create self-signed certificates for VMware Horizon View using makecert utility."
pubDate: "2014-06-24T07:03:38.000Z"
categories: 
  - "VMware Horizon"
  - "VMware View"
tags: 
  - "VMware View"
  - "VMware Horizon"
author: Ivo Beerens
url: /2014/06/24/create-a-vmware-horizon-view-self-signed-certificate-with-makecert/
---

With the command line Windows utility **makecert.exe** it is possible to create quickly a self-signed (private) certificate that can be used with VMware Horizon View. Makecert is part of the Windows Software Deployment Kit (SDK)for Windows 7 and 8. Below are the steps outlined to create a self-signed certificate using makecert.

- The SDK can be downloaded here, [link](http://www.microsoft.com/en-us/download/details.aspx?id=8279). Install the SDK and choose as feature to install "Windows Software Deployment".
- After the installation copy the makecert.* utility to the VMware View Connection server
- Open a elevated command prompt
- Create the self-signed root certificate, command: `makecert -pe -n "CN=ViewRootCA" -ss root -sr LocalMachine -sky signature -r "ViewRootCA.cer`

[![image](images/image_thumb6.png "image")](images/image7.png)

- Open certlm.msc and go to "Trusted Root Certification Authorities" and verify if the root certificate generated with makecert.exe exist. The root certificate can copied to all the servers and View Clients. If the clients are domain joined a Group Policy can be used to distribute the root certificate. More information can be found here, [link](http://technet.microsoft.com/en-us/library/cc772491.aspx).

[![image](images/image4_thumb1.png "image")](images/image41.png)

- Create a new self-signed certificate, command: `makecert -pe -n "CN=viewcon02.beerens.local,cn=viewcon02" -ss my -sr LocalMachine -sky exchange -in "ViewRootCA" -is root -ir LocalMachine -sp "Microsoft RSA SChannel Cryptographic Provider" -sy 12 viewcon02.cer`

[![image](images/image_thumb7.png "image")](images/image8.png)

- The certificate is added to the personal store of the local computer

[![image](images/image19_thumb.png "image")](images/image19.png)

- Change the Friendly name of the newly created self-signed certificate to: `vdm`
- Remove the already existing self-signed certificate

[![image](images/image16_thumb.png "image")](images/image16.png)

- Restart the VMware View Connection Server service
- In the System Health dashboard the Connection Server system health gets green

[![image](images/image23_thumb.png "image")](images/image23.png)