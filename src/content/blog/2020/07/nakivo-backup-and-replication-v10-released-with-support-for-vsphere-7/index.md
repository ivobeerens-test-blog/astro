---
title: "Nakivo Backup and Replication v10 released with support for vSphere 7"
pubDate: "2020-07-30T05:20:53.000Z"
categories: 
  - "backup"
tags: 
  - "backup"
author: Ivo Beerens
url: /2020/07/30/nakivo-backup-and-replication-v10-released-with-support-for-vsphere-7/
---

Nakivo Backup and Replication released last week version 10. I personally use Nakivo Backup and Replication in my lab environment because it can be installed on my NAS device. This saves me hardware resources of the backup VM (appliance or Windows/Linux) and the deployment is super fast.

In version 10 of Nakivo Backup and Replication the following new improvements are added:

- **VMware vSphere 7 support**. vSphere 7 support for Nakivo Backup & Replication. This is the latest version of VMware vSphere when writing this blog post.
- **User Interface Enhancements**. The user interface has a new facelift to improve the experience with the product.

[![](images/interface-300x157.png)](images/interface.png)

- **Physical Machine Recovery to VMware (P2V)**. To protect mixed physical and virtual IT environments, Nakivo Backup & Replication offers the Physical to Virtual Machine Recovery feature.
- **Backup to Wasabi Hot Cloud Storage**. You can create backup repositories in Wasabi buckets for backing up and storing virtual and physical machines.

[![](images/Wasabi-e1595788754134-300x90.png)](images/Wasabi-e1595788754134.png)

- **Linux Workstation Backup**. Perform app-aware, incremental backups of Linux workstations running Ubuntu 18.04 Desktop and 20.04 Desktop. Quickly recover entire workstations or restore individual files and objects directly from backups.

**Other improvements are**:

- Application permissions for Microsoft 365 accounts have been updated. Make sure you make the necessary changes to prevent backup and recovery jobs from failure. Refer to Obtaining Microsoft 365 credentials (item 10) for details.
- CentOS v7.0-7.6 support
- Improvements for Backup to Amazon S3

The release notes can be found here: [link](https://helpcenter.nakivo.com/display/RN/v10.0+Release+Notes) and a free trial can be found here: [link](https://www.nakivo.com/resources/download/trial-download/?utm_source=ivobeerens.nl&utm_medium=article&utm_campaign=backup).



