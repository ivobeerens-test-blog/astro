---
title: "VMware Horizon View and Microsoft Lync 2013 support"
description: "Overview of supported Lync 2013 features and architecture in VMware Horizon View 5.2."
pubDate: "2013-04-03T12:10:29.000Z"
categories: 
  - "lync"
  - "view"
  - "VMware"
tags: 
  - "lync"
  - "view"
  - "VMware"
author: Ivo Beerens
url: /2013/04/03/vmware-horizon-view-and-microsoft-lync-2013-support/
---

VMware Horizon View 5.2 adds support for Microsoft Lync 2013 with audio en video. With Microsoft Lync 2010, only VoIP was supported, but required a dedicated IP-based phone. Microsoft and VMware collaborated to bring Lync 2013 support to the View 5.2 desktop.

Here is a list of supported features with Lync 2013 in VMware View:

<table border="1" cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="151"><p><b>Features</b></p></td><td valign="top" width="439"><p><b>Support/Unsupported</b></p></td></tr><tr><td valign="top" width="151"><p><b>Presence</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>Instant Message</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>Desktop Sharing</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>Application Sharing</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>PowerPoint Sharing</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>Whiteboards</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>File transfer</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>Online meetings</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>Office Integration</b></p></td><td valign="top" width="439"><p>Supported</p></td></tr><tr><td valign="top" width="151"><p><b>Audio</b></p></td><td valign="top" width="439"><p>Supported (with Lync 2010, this used to only be supported via IP-Phone)</p></td></tr><tr><td valign="top" width="151"><p><b>Video</b></p></td><td valign="top" width="439"><p>Supported (with Lync 2010, this was never supported)</p></td></tr><tr><td valign="top" width="151"><p><b>Recording audio</b></p></td><td valign="top" width="439"><p>Unsupported</p></td></tr></tbody></table>

All the media processing is offloaded from the datacenter to the client endpoint. The following diagram highlights the different components and the communication flow of the VMware View and Microsoft Lync 2013:

[![image](images/image_thumb.png "image")](images/image.png)

The VDI Plug-in is a standalone application that needs the be installed on the local Windows computer and allows the use of local audio and video devices with the Lync 2013 client running in the View Desktop. Audio and Video traffic is sent point-to-point between the endpoints.

On the moment only Windows 7  SP1 is supported as client OS and View desktop.