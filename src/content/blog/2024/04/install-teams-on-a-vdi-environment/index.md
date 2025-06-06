---
title: "Installing the New Teams Client in VDI Environments"
description: "Complete guide to deploying new Microsoft Teams in various VDI platforms."
author: Ivo Beerens
pubDate: 2024-04-03T08:02:36+01:00
image: 
draft: true
categories:
    - news
tags:
    - news
    - azure
    - vmware
    - avd
    - w365
    - euc
---

# Install the new Teams client in different environments

Deploying the new Teams app is different from the Teams Classic app


Some things to known:
- The end of availability for classic Teams client in Virtualized Desktop Infrastructure (VDI) environments is on **June 30th 2024**. [Read more](https://learn.microsoft.com/en-us/MicrosoftTeams/teams-classic-client-end-of-availability)
- Use Windows 10.0.19041 or higher 
- Windows Server 2016 is **not** supported, use Windows Server 2019 or higher. 
- The new Teams client uses MSIX packages
- The MSIX installer installs the new Teams app in the `WindowsApps` folder instead of the user profile folder. For example the 64-bits version is installed in the following location 
`C:\Program Files\WindowsApps\PublisherName.AppName_AppVersion_architecture_PublisherID` 
Example:
`C:\Program Files\WindowsApps\MSTeams_24033.813.2773.520_x64__8wekyb3d8bbwe`
- The name of the folder where the new Teams app is installed is dynamic and it changes when the app’s version is updated.
- Get an overview of all the published Teams versions can be found [Teams Versions](https://learn.microsoft.com/en-us/officeupdates/teams-app-versioning)
- To get information about the new Teams Client use the following PowerShell command: `Get-AppXPackage -Name "*msteams*" | Select-Object -ExpandProperty Version`


https://github.com/MicrosoftDocs/OfficeDocs-SkypeForBusiness/blob/public/Teams/new-teams-vdi-requirements-deploy.md


```
Name              : MSTeams
Publisher         : CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US
Architecture      : X64
ResourceId        : 
Version           : 24033.813.2773.520
PackageFullName   : MSTeams_24033.813.2773.520_x64__8wekyb3d8bbwe
InstallLocation   : C:\Program Files\WindowsApps\MSTeams_24033.813.2773.520_x64__8wekyb3d8bbwe
IsFramework       : False
PackageFamilyName : MSTeams_8wekyb3d8bbwe
PublisherId       : 8wekyb3d8bbwe
IsResourcePackage : False
IsBundle          : False
IsDevelopmentMode : False
NonRemovable      : False
IsPartiallyStaged : False
SignatureKind     : Developer
Status            : Ok
```

Profile and cache location for the new Teams client
```
C:\Users<username>\AppData\Local\Packages\MSTeams_8wekyb3d8bbwe\
C:\Users<username>\AppData\Local\Packages\MSTeams_8wekyb3d8bbwe\Settings\settings.dat
C:\Users<username>\AppData\Local\Publishers\8wekyb3d8bbwe\TeamsSharedConfig\app_switcher_settings.json
C:\Users<username>\AppData\Local\Publishers\8wekyb3d8bbwe\TeamsSharedConfig\tma_settings.json
```


## Prerequisites

- FSLogix 2210 hotfix 3 (2.9.8784.63912).This hotfix can be found here [FSLogix 2210 hotfix 3](https://learn.microsoft.com/en-us/fslogix/overview-release-notes). 
1. Download the bootstapper[linl](https://go.microsoft.com/fwlink/?linkid=2243204&clcid=0x409).exe tool
2. Download the Teams MSIX installation file MSIX x64, MSIX x86 https://learn.microsoft.com/en-us/microsoftteams/new-teams-vdi-requirements-deploy#vmware-horizon-and-workspace-one-requirements
3. Run the following command:
.\teamsbootstrapper.exe -p -o "c:\Users\Administrator\Downloads\MSTeams-x64.msix"

## Azure Virtual Desktop

- https://learn.microsoft.com/en-us/azure/virtual-desktop/whats-new-webrtc

## VMware Horizon (Omnissa)

- Use the latest version of Horizon (2312).New Microsoft Teams on Horizon VDI - Known Issues and resolutions (95838)
https://kb.vmware.com/s/article/95838?lang=en_US
- Configure Media Optimalization for Micosoft Teams [Media Optimization for Microsoft Teams]](https://docs.vmware.com/en/VMware-Horizon/2312/horizon-remote-desktop-features/GUID-F68FA7BB-B08F-4EFF-9BB1-1F9FC71F8214.html)

# OS Optimization Tool (OSOT)

Use the OS Optimization Tool but configure it to Keep all Windows Store Applications (Optimize > Common Options).
https://techzone.vmware.com/blog/how-optimize-horizon-golden-image-new-microsoft-teams-client


Microsoft Store Apps stop working in VDI after applying Microsoft Monthly Patch (KB5034763) (97111)
https://kb.vmware.com/s/article/97111?lang=en_US




DEM

https://communities.vmware.com/t5/Dynamic-Environment-Manager/New-Microsoft-Teams-AppX/ta-p/2992598


# Captue the new Teams client in an AppStack

The new Teams uses MSIX packages therefore it is not possible to capture in app volumes using the standard procedure of capturing a package. Using the app volumes tools, the new teams can be captured as a package in App Volumes.

Capturing new teams as a package in App Volumes 4.x (97141). [link](https://kb.vmware.com/s/article/97141?lang=en_US)


Virus

To prevent issues with starting the new Teams app, add the following processes to the exclusion list in the antivirus software that you’re using:
ms-teams.exe
ms-teamsupdate.exe


Ivanti

https://forums.ivanti.com/s/article/HOWTO-Configure-user-settings-for-the-Microsoft-New-Teams-app?language=en_US

https://forums.ivanti.com/s/article/HOWTO-Configure-user-settings-for-the-Microsoft-New-Teams-app?language=en_US


Citrix
https://docs.citrix.com/en-us/profile-management/current-release/how-to/enable-new-teams-roaming


Koating
https://github.com/Koetzing/Powershell-Scripts/blob/main/install-new-teams-srv2019.ps1

https://www.koetzingit.de/index.php/en/blog-en/238-procedure-for-setting-up-the-new-microsoft-teams-on-the-windows-2022-platform?utm_content=bufferc46ee&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

