---
title: "Test Microsoft Hyper-V R2 server on your laptop with Virtual Hard Disk (VHD)"
pubDate: "2010-12-03T09:29:40.000Z"
categories: 
  - "hyper-v"
  - "microsoft"
tags: 
  - "hyper-v-2"
  - "microsoft"
author: Ivo Beerens
url: /2010/12/03/test-microsoft-hyper-v-r2-server-on-your-laptop-with-virtual-hard-disk-vhd/
---

When you want to test some Microsoft Hyper-V R2 stuff it’s handy to do that on your laptop. I test a lot stuff on my laptop equipped with Microsoft Windows 7, 8GB RAM and VMware Workstation. Installing Microsoft Hyper-V R2 for example in VMware Workstation is possible, but it is not possible to start any Virtual Machines (VMs). Microsoft Hyper-V requires a processor with Intel-VT or AMD-V with the No-Execute (NX) feature. In VMware Workstation the virtual CPU has no VT.

So how could I test Microsoft Hyper-V R2 and start VMs on my laptop? The solution is by using **Virtual Hard Disks (VHDs).**

Microsoft Windows 7 and Microsoft Windows 2008 R2 provides native support for Virtual Hard Disks (VHD). With Windows 7 (Enterprise and Ultimate editions) and Windows 2008 R2 (All versions except Windows 2008 R2 Foundation) you can create, configure and boot from VHD.

Here’s how to create, install and boot the VHD equipped with Microsoft WIndows 2008 R2 (so you could install the Microsoft Hyper-V role) in Microsoft Windows 7.

**Step 1 Create a VHD using Disk Management**
- In Microsoft Windows 7 open Disk Management (diskmgmt.msc)
- From the Action menu choose ‘Create VHD’
- Select the location to store the VHD disk file and choose a VHD size. For the best performance use a fixed size.

[![2010-12-02 11h14_54](images/2010-12-02-11h14_54_thumb.jpg "2010-12-02 11h14_54")](images/2010-12-02-11h14_54.jpg)

- Initialize the VHD disk and assign a drive letter, a name and format the disk. In this example the VHD has drive letter G.

[![2010-12-02 11h13_30](images/2010-12-02-11h13_30_thumb.jpg "2010-12-02 11h13_30")](images/2010-12-02-11h13_30.jpg)

**Step 2 Transfer the image to the VHD**

- Mount the ISO image of Windows 2008 R2 (available for MSDN and TechNet subscribers). The ISO contains multiple images of different versions of Windows 2008 R2 and Windows 7. Here’s a list with the corresponding index number and the WIM images (found in the Install.wim).

Now we need to apply he WIM image to the VHD partition by  using the  ‘**Install-WindowsImage.ps1’** PowerShell script. This PowerShell script does the following:

The Install-WindowsImage PowerShell script uses the wimgapi.dll in Windows 7 or Windows Server 2008 R2 to apply a Windows image in a .wim file to a specified location. The script can be used to apply a Windows 7 or Windows Server 2008 R2 .wim image to a Virtual Hard Disk (VHD) used for native VHD boot or to boot in a Hyper-V virtual machine.

- Download the ‘Install-WindowsImage’ PowerShell script [here](http://code.msdn.microsoft.com/InstallWindowsImage).
- Open PowerShell and and use the following syntax to apply the image to the VHD.:
- .\\Install-WindowsImage.ps1 –WIM  <CDROMDriveLetter\\sources\\install.wim> -Apply -Index WIMimagenumber –Destination <VHD Drive>

Example:

```
Install-WindowsImage.ps1 -WIM Z:\\sources\\install.wim -Apply -Index 3 -Destination G:
```

- The WIM image is now applying to the VHD. This can take up to 15 minutes.

**Step 3 Prepare the VHD image for native boot**

- Open the command prompt (**RUN as Administrator**)
- Create a new Boot Configuration Data (BCD) entry for native boot using the following syntax:

```
g:\Windows\\System32\bcdboot g:\Windows
```

- Using the command bcdedit command you can see the new boot entry pointing to the VHD image

[![2010-12-02 12h50_02](images/2010-12-02-12h50_02_thumb.jpg "2010-12-02 12h50_02")](images/2010-12-02-12h50_02.jpg)

- To change the default boot options use the **bcdedit –v** command to list the associated GUID numbers. Use the **bcdedit  / default  {GUID}** command to set the default boot config. A easier option is to use the **MSCONFIG** command to set the default boot entry and the timeout.

[![image](images/image_thumb.png "image")](images/image.png) 

When restarting Microsoft Windows 7, there is an extra option for booting the  Windows 2008 R2 server OS and your able to install the Microsoft Hyper-V R2 role.

More information can be found in the  Microsoft Windows 2008 R2 Getting Started with Virtual Hard Disks document.