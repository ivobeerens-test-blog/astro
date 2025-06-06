---
title: "Upgrading the vSphere Data Protection (VDP) appliance"
description: "Step-by-step guide for upgrading VMware vSphere Data Protection virtual appliance."
pubDate: "2012-12-07T10:10:13.000Z"
categories: 
  - "backup"
  - "vdp"
tags: 
  - "backup"
  - "vdp"
author: Ivo Beerens
url: /2012/12/07/upgrading-the-vsphere-data-protection-vdp-appliance/
---

Here are the steps outlined for upgrading the vSphere Data Protection (VDP) appliance.

1\. Check the version of the VDP.  SSH to the VDP appliance and use the following command:

`rpm –qa | grep vdr`

The current version of the VDP appliance is: `vdr-1.1.53-53`

[![image](images/image_thumb.png "image")](images/image.png)

2\. The vSphere (web) client displays version 5.1.0.0 (5.1.0.0). This version will not change after the upgrade.

[![image](images/image_thumb1.png "image")](images/image1.png)

3\. Shutdown the VDP appliance.

4\. The virtual disks used by the vSphere Data Protection appliance are set to be “Independent - Persistent.” However, in order to take a snapshot, the disks will have to be temporarily changed to “Dependent.” Starting with Hard disk 2 till disk 7

[![image](images/image22_thumb1.png "image")](images/image221.png).

5\. Take a snapshot.  This must be done else you wont be able to upgrade the VDP appliance

6\. Start the VDP appliance. Wait till the VDP appliance is started. It can takes 10 minutes!

7\. Download the VDP upgrade ISO needed and verify the checksum of the ISO!

[![image](images/image16_thumb.png "image")](images/image16.png)

8\. Mount the upgrade ISO to the VDP appliance using VM Edit Settings.

[![image](images/image25_thumb.png "image")](images/image25.png)

9\. Connect to the appliance using the following URL:

https://ip address of VDP appliance:8543/vdp-configure/

10\. Login the appliance (username is root)

11\. Go to the upgrade tab. Click check upgrades (be patient it will take some time to see the upgrade package)

[![image](images/image12_thumb.png "image")](images/image12.png)

12\. Select the package and press the upgrade VDP button

13\. The warning “No valid Integrity Check taken Today of Yesterday”  appeared.

[![image](images/image29_thumb1.png "image")](images/image291.png)

Run a manual Integrity Check by using the  vSphere Web Client, select “Run Integrity Check” in the vSphere Data Protection plugin.

[![image](images/image32_thumb2.png "image")](images/image322.png)

14\. Watch in the tasks till the VDP Integrity check completes

[![image](images/image35_thumb2.png "image")](images/image352.png)

15\. Select the package and press the upgrade VDP button

[![image](images/image38_thumb1.png "image")](images/image381.png)

16\. Wait till upgrade completes

[![image](images/image41_thumb2.png "image")](images/image412.png)

17\. Shut down the VDP appliance

18 . Delete the snapshot

19\. re-enable the independent disks

20 . Detach the ISO VDP upgrade

21\. Start the VDP appliance

22.  Check the version of the VDP appliance. Make a SSH connection and use the following command:

rpm –qa | grep vdr

[![image](images/image45_thumb.png "image")](images/image45.png)

The new version of the VDP appliance is: vdr-1.1.56-56.  The vSphere (web) client displays still version 5.1.0.0 (5.1.0.0).

[![image](images/image48_thumb1.png "image")](images/image481.png)