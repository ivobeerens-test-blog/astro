---
title: "Install a wildcard certificate on a VMware Horizon View Security Server"
description: "Steps to convert and install wildcard SSL certificates with private keys for View Security Server."
pubDate: "2014-03-20T20:15:02.000Z"
categories: 
  - "horizon"
  - "view"
  - "VMware"
tags: 
  - "horizon-view"
  - "view"
  - "VMware"
author: Ivo Beerens
url: /2014/03/20/install-a-wildcard-certificate-on-a-vmware-horizon-view-security-server/
---

On a View Security Server I needed to change the default self signed certificate to a signed wildcard certificate. The customer had a wildcard certificate that didn't include the private key. A certificate that include the private key is a requirement for a VMware View Security server.

If you have the certificate (*.cer or *.crt) and private key (*.key), convert it to a PCKS#12 (PFX) format before you import the certificate. To create a certificate that include the private key I used the following steps:

- Download and install OpenSSL and Visual C++ 2008 Redistributables. [Link](http://slproweb.com/products/Win32OpenSSL.html)
- The install folder of OpenSSL is: `C:\OpenSSL-Win64\`
- Place the certificate (*.cer or *.crt) and private key (*.key) file in the `C:\OpenSSL-Win64\bin directory` folder
- Open a command prompt and set the environment variable: `Set OPENSSL_CONF=c:\OpenSLL-Win64\bin\openssl.cfg`
- Create another environment variable: `Set RANDFILE = .rnd`
- Generate a PCKS#12 (PFX) keystore file from the private key and certificate file. Syntax example: `OpenSSL.exe pkcs12 –export -out newcertificatename.pfx –inkey privatekey.key –in certificate.crt`

[![image](images/image_thumb3.png "image")](images/image3.png)

- Enter the password for the certificate

The next step is to Import the certificate on the security server:

- Open the MMC on the Security Server and add the Certifcates snap-in
- In the Windows local computer store import the generated P12 certificate
- Type the password for the private key
- Make sure the certificate is exportable
- Change the friendly name to `vdm` and make sure that the friendly name of the self signed certificate is changed to something else
- Restart the View Connection Security service

[![image](images/image_thumb4.png "image")](images/image4.png)

The new wildcard certificate has a private key and is trusted in the VMware View client and on the View Administrator page.

<table border="0" width="400" cellspacing="0" cellpadding="2"><tbody><tr><td valign="top" width="200"><a href="images/image5.png"><img style="display: inline; border: 0px;" title="image" src="images/image_thumb5.png" alt="image" width="308" height="385" border="0"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2014/03/image6.png"><img style="display: inline; border: 0px;" title="image" src="images/image_thumb6.png" alt="image" width="265" height="400" border="0"></a></td></tr></tbody></table>