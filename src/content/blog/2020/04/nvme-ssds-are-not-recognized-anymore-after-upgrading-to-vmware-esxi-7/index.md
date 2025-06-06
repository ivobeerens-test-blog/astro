---
title: "NVMe SSDs are not recognized anymore after upgrading to VMware ESXi 7"
pubDate: "2020-04-09T09:47:19.000Z"
categories: 
  - "home-lab"
  - "VMware"
tags: 
  - "homelab"
  - "VMware"
author: Ivo Beerens
url: /2020/04/09/nvme-ssds-are-not-recognized-anymore-after-upgrading-to-vmware-esxi-7/
---

Last week VMware released vSphere 7. The first thing I did was upgrading my homelab. My homelab has two hosts (Shuttle SH370R6 Plus and a Shuttle SH370R8 Plus). After upgrading my hosts from VMware ESXi 6.7 Update 3 to VMware ESXi 7, the NVMe SSDs are not recognized anymore. I Have the following NVMe SSD disks in the hosts:
- Samsung SSD 970 EVO 1TB NVMe
- Samsung SSD 950 PRO 512GB NVMe

My college and fellow vExpert Jesper Alberts encountered the same problem with his Supermicro X9DRL-iF and Samsung 970 EVO MZ-V7E1T0BW NVMe SSD homelab.

To fix this, perform a clean installation of VMware ESXi 7. After the clean installation, the NVMe disks are recognized.

[![](images/1-300x78.png)](images/1.png)

**Update May 16, 2020**: [Jeffrey Kusters](https://www.jeffreykusters.nl/2020/04/14/VMware-nvme-pcie-driver-missing-on-esxi-7-0-after-upgrade/) experienced the same problem and was able to provide William Lam the support bundle of the host that failed the upgrade. William Lam and the VMware support team discovered quickly that we used the wrong esxcli update command (**esxcli software vib update)**. The correct command to upgrade an ESXI host is: **esxcli software profile update.** William explains the commands in his blog found here, [link](https://www.virtuallyghetto.com/2020/04/important-nvme-ssd-not-found-after-upgrading-to-esxi-7-0.html).

So the steps when upgrading a standalone ESXi host are:
- Stop the VMs on the ESXi host
- Enter Maintenance Mode
- Copy to VMware ESXI offline bundle to a datastore with enough space available. In this example I use the "nfs01" datastore
- SSH to the host and perform the following command: `esxli software sources profile list -d /vmfs/volumes/<datastore>/<ESXofflinebundle.zip>`

`[root@esxi01:~ | esxcli software sources profile list -d /vmfs/volumes/nfs01/ISO/VMware-ESXi-7.0.0-15843807-depot.zip`
| Name    |                      Vendor  |      Acceptance Level |  Creation Time  |       Modification Time |
| ---------------------------- | ------------ | ---------------- | ------------------- | ----------------- |
| ESXi-7.0.0-15843807-standard | VMware, Inc. | PartnerSupported | 2020-03-16T10:48:54 | 2020-03-16T10:48:54 |
| ESXi-7.0.0-15843807-no-tools | VMware, Inc. | PartnerSupported | 2020-03-16T10:48:54 | 2020-03-16T10:48:54 |

- This list the image profiles available from the offline bundle
- Execute the command: `esxcli software sources profile update -d /vmfs/volumes/<datastore>/<ESXiOfflineBundle.zip> -p <Image profile>`

``` 
esxcli software sources profile update -d /vmfs/volumes/nfs01/ISO/VMware-ESXi-7.0.0-15843807-depot.zip -p ESXi-7.0.0-15843807-no-tools
```

- When the upgrade is completed successfully, reboot the ESXi host
- Log in and exit the maintenance mode on the ESXi host

Thanks, to  Jeffrey and William for solving this problem. Great community work!