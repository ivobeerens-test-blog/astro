---
title: "What Windows 10 version for my VDI desktop?"
pubDate: "2018-10-24T18:32:04.000Z"
tags: 
  - "vdi"
  - "windows-10"
author: Ivo Beerens
url: /2018/10/24/what-windows-10-version-for-my-vdi-desktop/
---

In a VDI project one of the questions in the design phase is always: “What version I use for my Windows 10 VDI desktop?”. Before Windows 10, the Operating System release cycle was approximate 3 to 5 years. With Windows 10 a new release management concept is introduced called “Windows as a Service (WaaS)”. WaaS includes:

- **Feature updates**: Twice a year new feature updates to Windows 10 will be released
- **Quality updates**: Deliver both security and non-security fixes every month on patch Tuesday such as:
    - Security updates
    - Critical updates
    - Servicing stack updates
    - Driver Updates
- **Servicing channels**: Allow organizations to choose when to deploy new features. The following channels are available:
    - **Semi-Annual Channel (SAC)**:  This is also known as the Current Branch. Receive feature updates twice a year (Around March and September/October) with a 18/30 months support cycle. SAC releases numbers are for example: 1703, 1709, 1803 and 1809. (1809 stands for 18 = 2018, 09 = September).
    - **Long Term Servicing Branch (LTSB) that is now called the Long Term Servicing Channel (LTSC)**. LTSC shares the same codebase as Windows 10 IoT and is only available when having a Windows 10 Enterprise license. The typical use cases are embedded systems such as manufacturing or medical equipment and KIOSK systems that don't run Office and receive new feature updates every 2 to 3 years. LTSC comes with 10 years support cycle and looks like an Operating System release cycle before Windows 10 such as Windows 7 for example. The new announced LTSC version is called: Windows 10 2019 LTSC build 1809.
- **Deployment rings**: are groups of devices used to initially pilot, and then to broadly deploy, each feature update in an organization

So we can choose between two servicing channels. Here is a quick comparison table between the two channels:

<table style="border-collapse: collapse; width: 100%; height: 217px;" border="1"><tbody><tr style="height: 25px;"><td style="width: 33.3333%; height: 25px;"></td><td style="width: 33.3333%; height: 25px;"><strong>LTSB/LTSC</strong></td><td style="width: 33.3333%; height: 25px;"><strong>Semi-Annual Channel (SAC)</strong></td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Support</td><td style="width: 33.3333%; height: 24px;">10 years</td><td style="width: 33.3333%; height: 24px;">18/30 months (Windows 10 Support lifecycle, <a href="https://support.microsoft.com/en-us/help/13853/windows-lifecycle-fact-sheet" target="_blank" rel="noopener">link</a>.)</td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Latest new features or security enhancements</td><td style="width: 33.3333%; height: 24px;">No</td><td style="width: 33.3333%; height: 24px;">Yes</td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Support for new hardware (silicon) and Surface</td><td style="width: 33.3333%; height: 24px;">No</td><td style="width: 33.3333%; height: 24px;">Yes</td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Default browser(s)</td><td style="width: 33.3333%; height: 24px;">Internet Explorer 11</td><td style="width: 33.3333%; height: 24px;">Internet Explorer 11, Microsoft Edge</td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Office</td><td style="width: 33.3333%; height: 24px;">LTSC only supports Office 2019.<div></div>On January 14, 2020 , Office 365 ProPlus will be no longer supported on LSTC or the older LTSB version (<a href="https://techcommunity.microsoft.com/t5/Windows-IT-Pro-Blog/Changes-to-Office-and-Windows-servicing-and-support/ba-p/151509" target="_blank" rel="noopener">link</a>)</td><td style="width: 33.3333%; height: 24px;">Yes</td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Updates and Security updates</td><td style="width: 33.3333%; height: 24px;">Yes</td><td style="width: 33.3333%; height: 24px;">Yes</td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Office support</td><td style="width: 33.3333%; height: 24px;">Yes</td><td style="width: 33.3333%; height: 24px;">Yes</td></tr><tr style="height: 24px;"><td style="width: 33.3333%; height: 24px;">Universal Apps Support</td><td style="width: 33.3333%; height: 24px;">Yes</td><td style="width: 33.3333%; height: 24px;">Yes</td></tr><tr><td style="width: 33.3333%;">Cortana support</td><td style="width: 33.3333%;">No</td><td style="width: 33.3333%;">Yes</td></tr><tr><td style="width: 33.3333%;">Windows Store</td><td style="width: 33.3333%;">No</td><td style="width: 33.3333%;">Yes</td></tr><tr><td style="width: 33.3333%;">Windows Ink and MS camera support</td><td style="width: 33.3333%;">No</td><td style="width: 33.3333%;">Yes</td></tr><tr><td style="width: 33.3333%;">Includes non-business apps like Xbox, Minecraft, Candy crush</td><td style="width: 33.3333%;">No</td><td style="width: 33.3333%;">Yes</td></tr><tr><td style="width: 33.3333%;">ConfigMgr Express Update</td><td style="width: 33.3333%;">No</td><td style="width: 33.3333%;">Yes</td></tr><tr><td style="width: 33.3333%;">OneNote<div></div>OneDrive files on demand that is introduced in release 1709 is not included in LTSB 1607.</td><td style="width: 33.3333%;">No</td><td style="width: 33.3333%;">Yes</td></tr></tbody></table>

The advice from Microsoft is to use SAC channel over a LTSB/LTSC channel. Ask yourself the question: **Why do I use a Windows OS? My personal answer on this question is: Because I need to run legacy Windows apps.**  So a stable OS that requires less patching and overhead can be more relevant than having the latest features which involves more management, testing  and overhead. But more and more customers are migrating to Office 365.  Office 365 ProPlus delivers cloud-connected and always up-to-date versions of Office desktop apps. This requires Windows Update OS requirements for Office 365 ProPlus which means you're stuck with the SAC channel.

For choosing between the Professional and the Enterprise edition there is a comparison table available [link](https://www.microsoft.com/en-us/windowsforbusiness/compare). Windows 10 Enterprise has for example more advanced security and management functions and support for LTSC.

When deciding what channel and Windows 10 version release to use, ask yourself the following questions:

- Define the business scope, requirements, constrains, assumptions and risks.
- What Windows 10 versions are supported by my VDI brokers and software such as Citrix XenDesktop, VMware Horizon, App Volumes and NVIDIA for example?
- Are we going to use Office 365?
- Do my applications support the channel and version? Ask the software vendors.
- Define a update and patch management plan.
- Perform a Proof of Concept (PoC).

I hope this blog post makes it easier to choose the right Windows 10 version for the VDI desktop.