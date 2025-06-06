---
title: "Create a signed certificate for VMware View Connection Servers using a Windows Server 2012 CA"
description: "Guide to replace self-signed certificates with CA-signed certificates on View Connection Servers."
pubDate: "2013-06-19T06:42:00.000Z"
categories: 
  - "certificate"
  - "horizon"
  - "view"
  - "VMware"
  - "windows-server-2012"
tags: 
  - "certificate"
  - "horizon"
  - "view"
  - "VMware"
  - "windows-server-2012"
author: Ivo Beerens
url: /2013/06/19/create-a-signed-certificate-for-vmware-view-connection-servers-using-a-windows-server-2012-ca/
---

For VMware Horizon View it is recommends that you configure your VMware View Horizon Servers with a signed SSL certificate. Default when you install a VMware View Horizon servers, a certificate is generated that is not signed by a CA. Because it is not signed by a CA It is possible to to intercept traffic. So it is highly recommend to replace the default certificate with a signed certificate after the installation.

In the VMware View Horizon Administrator dashboard you can see that the Connection Server does not have a valid signed certificate.

[![image](images/image_thumb3.png "image")](images/image3.png)

The following steps explains how-to create a signed certificate and replace the self-signed certificate on the VMware View Horizon Connection Server(s). As CA is a Windows Server 2012 Enterprise Certificate Authority used. The installation of this CA is not part of the steps! The VMware View Horizon Connection Server(s) are installed on Windows Server 2008 R2.

#### Steps on the Windows Server 2012 Certification Authority

- Open the **Certification Authority** program in the tools section in Server Manager from the Windows Server 2012 server
- Expand the server name and right click on Certificate Template and choose **Manage**

[![image](images/image_thumb4.png "image")](images/image4.png)

- Select the **Web Server Template** and choose **Duplicate Template**
- Leave all the fields defaults except the following:

- In General change the **Template** **display name**, **Template name** and **Validity period** and **Renewal period** fields to your needs
- In **Request Handling**  mark **Allow private key** to be exported
- In the **Security** add the **computer account** of the View Connection Servers with the **Read, Write and Enroll** permissions checked

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><a href="images/image5.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb5.png" width="182" height="249"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2013/06/image6.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb6.png" width="179" height="244"></a></td></tr><tr><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2013/06/image7.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb7.png" width="178" height="244"></a></td><td valign="top" width="200">&nbsp;</td></tr></tbody></table>

- Close the Certificate Templates Console
- In the Certificate Authority choose **New** – **Certificate Template to issue**  and select the Certificate Template just created

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><a href="images/image8.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb8.png" width="204" height="144"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2013/06/image9.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb9.png" width="218" height="141"></a></td></tr></tbody></table>

#### **Steps on the VMware Horizon View Connection Server(s**)

- Start – Run – MMC
- File – Add Snap-ins – Certificates – Computer Account – Local  computer
- Personal – Certificates – All Tasks – Select Request New Certificate

[![image](images/image_thumb10.png "image")](images/image10.png)

- Next
- Choose **Active Directory Enrollment Policy**
- Next
- **Check** the **VMware View** template and select **Properties** 

[![image](images/image_thumb11.png "image")](images/image11.png)

- In **subject -** Subject name Type select **Common Name**. Enter the FQDN name of the VMware View Horizon Connection server

[![image](images/image_thumb12.png "image")](images/image12.png)

- In General enter as Friendly name **vdm** in the field

[![image](images/image_thumb13.png "image")](images/image13.png)

- Check in the Private Key – Key Options field if **Make private key exportable** option is checked

[![image](images/image_thumb14.png "image")](images/image14.png)

- OK and press Enroll

[![image](images/image_thumb15.png "image")](images/image15.png)

- Rename the Friendly name of the old self signed certificate to another name as VDM

[![image](images/image_thumb16.png "image")](images/image16.png)

- Restart the **VMware View Connection Server** service.

[![image](images/image_thumb17.png "image")](images/image17.png)

- Wait some time so that the **VMware View Connection Server** can load
- Login the View Administrator portal and within a couple of minutes the dashboard System Health of the Connection Servers should get a green color. The VMware View Connection Servers has now a signed certificate

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><a href="images/image18.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb18.png" width="203" height="113"></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2013/06/image19.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb19.png" width="244" height="134"></a></td></tr></tbody></table>