---
title: "What's announced at VMworld 2015?"
pubDate: "2015-09-01T08:24:33.000Z"
categories: 
  - "vmworld"
tags: 
  - "vmworld"
author: Ivo Beerens
url: /2015/09/01/whats-announced-at-vmworld-2015/
---

This blog contains the most VMworld 2015 announcements summarized. The VMworld 2015 day 1 announcements were all about the Software Defined Datacenter (SDDC), Hybrid cloud and Cloud Native Apps (containers). This blogpost will be updated with new announcements when available.

**VMworld 2015 day 1**

**VMware EVO SDDC (EVO RACK).** VMware EVO SDDC is designed to provide a simple to deploy and updated SDDC at rack-scale, and includes software-defined compute, storage, networking security, and management.

More information: [Link](https://blogs.VMware.com/virtualblocks/2015/08/31/introducing-VMware-evo-sddc-the-fastest-path-to-the-software-defined-data-center-2/)

**Virtual SAN (VSAN) 6.1.** VSAN 6.1 is the third release with the following new features:

- Virtual SAN Stretched Cluster
- Virtual SAN for Remote Office / Branch Office (ROBO)
- Virtual SAN Replication with vSphere Replication
- Support for Multi-Processor Fault Tolerance (SMP-FT)
- Support for Windows Server Failover Clustering (WSFC) and Oracle Real Application Cluster (RAC)
- Maximum Performance and Low latencies
- Virtual SAN Health Check-Plug-in
- Virtual SAN Management Pack for vRealize Operations

More information: [Link](https://blogs.VMware.com/virtualblocks/2015/08/31/whats-new-VMware-virtual-san-6-1/)

**Unified Hybrid Cloud.** The Unified Hybrid Cloud platform has the following new services and features:

- Project Skyscraper (Technology Preview): Live Migration (vMotion) between datacenters. For example between on-premises and vCloud Air.
- VMware vCloud Air Disaster Recovery.
- VMware vCloud Air Object Storage
- VMware vCloud Air SQL
- VMware vCloud Aur Advanced Networking Services
- VMware vCloud Aur Hybrid Cloud Manager

More information: [Link](http://blogs.VMware.com/vSphere/2015/08/technology-preview-enriching-vSphere-with-hybrid-capabilities.html)

**vSphere Integrated Containers and Photon Platform.** VMware vSphere Integrated Containers will enable IT teams to support any application, including containerized applications, on a common infrastructure. The VMware Photon Platform, which will include future integrations with VMware NSX, VMware Virtual SAN and VMware vRealize Suite.

More information: Link

**VMware Integrated OpenStack (VIO) 2.** The new release is based on the OpenStack Kilo.

**VMware Validated Design.** VMware Validated Designs are architectures created and validated by VMware experts to build your SDDC.

More information: [Link](https://blogs.VMware.com/cto/introducing-VMware-validated-designs/)

### Other announcements (not in the general session)

**NVIDIA GRID 2.0:**

- Double user density up to 128 user per server
- Blade support for NVIDIA GRID
- Linux support

More information: [Link](http://nvidianews.nvidia.com/news/nvidia-grid-2-0-launches-with-broad-industry-support), [YouTube](https://www.youtube.com/watch?v=pJHvh4MCESE)

**App-Delivery Decision Maker for Horizon 6**. The Decision Maker helps you navigate the wide array of options that Horizon 6 supports to meet your application delivery and user requirements.

More information: [Link](http://www.VMware.com/files/pdf/techpaper/VMware-horizon-6-application-delivery-decision-maker.pdf)

**End User Computing Best Practices poster**.

More information: [Link](http://www.VMware.com/files/pdf/techpaper/VMware-end-user-computing-best-practices-poster.pdf)

**Site Recovery Manager 6.1**.  SRM 6.1 has the following new capabilities:

- Storage Profile Based Protection. Storage policy-based management to simplify the process of adding and removing protection to virtual machines.
- Stretched Storage and Orchestrated vMotion. Support for stretched storage solutions combined with cross-vCenter vMotion allows companies to achieve application mobility without incurring downtime, while taking advantage of all the benefits of Site Recovery Manager
- Enhanced integration with VMware NSX. Enhancements to and integration with NSX 6.2 that simplify both the creation and execution of recovery plans and accelerate recovery time.

More information: Link

**VMware NSX 6.2**. NSX vSphere 6.2 includes the following new and changed features:

- Cross vCenter Networking and Security
- NSX 6.2 with vSphere 6.0 supports Cross vCenter NSX where logical switches (LS), distributed logical routers (DLR) and distributed firewalls (DFW) can be deployed across multiple vCenters, thereby enabling logical networking and security for applications with workloads (VMs) that span multiple vCenters or multiple physical locations.
- Consistent firewall policy across multiple vCenters: Firewall Rule Sections in NSX can now be marked as "Universal" whereby the rules defined in these sections get replicated across multiple NSX managers. This simplifies the workflows involving defining consistent firewall policy spanning multiple NSX installations
- Cross vCenter vMotion with DFW: Virtual Machines that have policies defined in the "Universal" sections can be moved across hosts that belong to different vCenters with consistent security policy enforcement.
- Universal Security Groups: Security Groups in NSX 6.2 that are based on IP Address, IP Set, MAC Address and MAC Set can now be used in Universal rules whereby the groups and group memberships are synced up across multiple NSX managers. This improves the consistency in object group definitions across multiple NSX managers, and enables consistent policy enforcement
- Universal Logical Switch (ULS): This new functionality introduced in NSX 6.2 as a part of Cross vCenter NSX allows creation of logical switches that can span multiple vCenters, allowing the network administrator to create a contiguous L2 domain for an application or tenant.
- Universal Distributed Logical Router (UDLR): This new functionality introduced in NSX 6.2 as a part of Cross vCenter NSX allows creation of distributed logical routers that can span multiple vCenters. The universal distributed logical routers enable routing across the universal logical switches described earlier. In addition, NSX UDLR is capable of localized north-south routing based on the physical location of the workloads.

### **VMworld 2015 day 2**

Day 2 announcements are about business mobility and End User Computing (EUC).

**VMware Project A2,**.  A new Technology Preview called Project A2 that offers a new mobile-centric approach to delivering and managing applications and devices for Windows 10 using AirWatch enterprise mobile management (EMM) and VMware App Volumes application delivery technology. This integrated solution enables our customers to accelerate their adoption of Windows 10 with mobile-like management for their devices and applications. Project A2combining #Airwatch and #Appvolumes to deploy applications to Physical endpoints

**VMware Identity Manager Advanced Edition**. introducing a new identity solution called VMware Identity Manager Advanced Edition that is a standalone identity as a service (IDaaS) solution for simplified access and identity management. Our existing solutions, Horizon and AirWatch already include this key enabling technology platform for delivering a single sign-on experience for Windows, SaaS and mobile applications. We are now announcing the release of this key, proven technology as a standalone product for customers that seek a standalone identity as a service solution.

More information: [Link](https://blogs.VMware.com/euc/2015/09/VMware-identity-manager-advanced-edition.html).

**VMware Horizon 6.2 and VMware Horizon 6.2 for Linux such offers the following new capabilities:**

- VMware Horizon 6.2 will deliver applications at scale with new features to make the deployment and management of RDSH applications easier and more scalable. View Composer with Linked Clones will allow you to simply deploy and quickly update your entire RDSH farm. Load balancing improvements will allow you to balance applications based on various load metrics (CPU or memory usage) and will include an extensible interface to balance RDSH hosts based on metrics. The solution will also integrate Horizon Apps into the Cloud Pod Architecture (CPA) to allow virtual machines to scale between sites and between datacenters.
- VMware Horizon 6.2 will also deliver a richer and more seamless user experience for apps and desktops.
- Delivering rich 3D desktops and apps has never been easier. VMware Horizon 6.2 together with NVIDIA GRID cards will deliver high-end 3D graphics applications with RDSH in addition to 3D VDI desktops. VMware Horizon 6.2 will add support for NVIDIA GRID and NVIDIA GRID 2.0. NVIDIA GRID 2.0, based on NVIDIA’s award winning Maxwell architecture, will offer higher user density with higher performance to more platforms. The solution will support 4K (3840×2160) high resolution desktops and Linux desktops. Finally, vDGA pass through graphics will be extended to support select AMD FirePro GPUs for Windows VDI desktops.
- It will be easier to work with local files too, with VMware Horizon 6.2. With VMware Horizon 6.2, hosted applications will be easier than ever to use with support for File Type Association with Windows clients, making it easy to open a file with a remote app right from the Windows Explorer. Client Drive Redirection, which allows easy access to files on your computer, will be extended with encryption for greater security, along with new support for Mac clients. In addition, Linux client support will be available as a tech preview.
- There will also be communication improvements. VMware Horizon 6.2 will support the Skype for Business messaging application (formerly known as Microsoft Lync) on several Windows platforms including Windows 7, Windows 8.1, Windows 2008 R2, Windows 2012 R2 with Windows 10 desktops, and RDSH desktops running on Windows 2008 R2 and Windows 2012 R2 Servers.
- VMware Horizon 6.2 with latest Horizon Client 3.5 for iOS will also offer the option of using Touch ID for easy login to your apps or desktops. Once enabled by the administrator, end-users can enjoy amazing one-touch access when using an iPhone or iPad.
- Oh, did I forget Windows 10? Windows 10 is fully supported across the entire VMware Horizon portfolio including Horizon clients, desktops and hosted applications. . This day 0 support of Windows 10 continues our commitment to offering compatibility with the latest innovative technologies. With Windows 10 desktops running on VMware Horizon virtual desktops, end-users have full access to the features and functionality available from Windows 10 and VMware Horizon.
- VMware Horizon 6.2 is also optimized for the VMware SDDC environment and already supports the latest release of vSphere – vSphere 6 U1. We leverage the new all-flash Virtual SAN to support double the number of users at the same cost, double your density, and supports over four thousand users per cluster. You can take advantage of the vSAN stretched cluster technology to deploy Horizon across multiple sites.
- There will be more security in VMware Horizon as well. VMware Horizon 6.2 includes a hardened appliance to secure access to the Horizon infrastructure from outside the corporate firewall. Integration with VMware Identity Manager, included with Horizon Advanced and Horizon Enterprise, will provide end-users with secure, customizable access to resources using an expanding set of authentication sources including two-factor and bio-metric fingerprint authentication.
- For federal government customers, the solution will also be compliant with the FIPS 140-2 regulation for security
- VMware User Environment Manager (UEM) 8.7, included with Horizon Enterprise, will fully support Windows 10 and will offer even greater efficiency for dynamic updates to the mobile user environment. It will also be able to detect a wide range of connections including PCoIP, Blast, RDP, and Citrix. VMware User Environment Manager natively supports policies based on client name and IP for VMware Horizon connections with improved application profiling. Administrators will have greater visibility and new tools for analysis to understand when and where UEM settings are applied.
- There will be new advancements in VMware Horizon for Linux as well. VMware Horizon for Linux will support NVIDIA GRID 2.0 to deliver shared and scalable 3D graphics to Linux users with up to 4 displays. VMware Horizon 6.2 for Linux will also offer support for Red Hat Enterprise Linux 7.1.

More information: [Link](https://blogs.VMware.com/euc/2015/09/VMware-desktop-and-application-updates.html)

**VMware Project Enzo**. Offers our customers transformed economics and cloud simplicity for virtual desktops and apps via a modern hybrid architecture and hyper converged infrastructure. Project Enzo will be available as beta.

More information: [Link](https://blogs.VMware.com/euc/2015/08/get-into-the-fast-lane-with-project-enzo-and-learn-more-at-vmworld-2015.html)



