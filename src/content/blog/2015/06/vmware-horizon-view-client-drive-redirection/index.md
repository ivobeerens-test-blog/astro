---
title: "VMware Horizon View Client Drive Redirection"
pubDate: "2015-06-05T09:42:21.000Z"
categories: 
  - "horizon-view"
  - "VMware-view"
tags: 
  - "view"
  - "VMware-horizon"
author: Ivo Beerens
url: /2015/06/05/vmware-horizon-view-client-drive-redirection/
---

On of the new features of VMware Horizon 6 version 6.1.1 is Client Drive Redirection (CDR). Microsoft RDS and Citrix already have CDR for many years in there product. Now this handy feature is available in Horizon View. CDR is supported on VDI desktops (single-user) and RDS desktops and applications on Windows and as Tech Preview on Mac OS X clients.

Here's a quick overview how-to enable Client Drive Redirection (CDR):

**Requirements**

- Horizon View 6.1.1 environment (Connection Server, composer etc.)
- View Agent 6.1.1 or later
- VMware Horizon Client 3.4.0 build-2769709

Install the Horizon View Agent. During the installation of the VMware Horizon Agent enable the Client Drive Redirection feature.

[![agent](images/agent-300x227.png)](images/agent.png)

After installing the new Horizon View Agent is deployed on the Horizon View environment,  connect with  new 3.4.0 Horizon Client. When connecting for the first time to the there's  a pop-up asking to access your local files. Make sure to allow this and select "Do not show this dialog again".

[![View Deskstop](images/View-Deskstop-300x131.png)](images/View-Deskstop.png)

In the Horizon View Client there is a option called "Share Folders". In the sharing box add local drives and folders to share in the VDI desktop session.

[![0_sharing](images/0_sharing.png)](images/0_sharing.png) [![Sharing](images/Sharing-300x233.png)](images/Sharing.png)

In the Windows Explorer the drives and folders that are mapped are visible.

[![files](images/files-300x181.png)](images/files.png)

 **Note**: With Client Drive Redirection (CDR), the folders and files that are sent across the network are NOT encrypted!