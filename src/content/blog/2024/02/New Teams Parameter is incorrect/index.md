---
title: "The New Microsoft Teams Client throw an error in AVD - The parameter is incorrect"
description: "Troubleshooting guide for Teams client parameter errors in Azure Virtual Desktop."
author: Ivo Beerens
pubDate: 2024-02-28T15:44:42+01:00
image: 
draft: false
categories:
    - azure virtual desktop
    - avd
tags:
    - troubleshooting
    - azure virtual desktop
    - avd
    - vdi
---

After deploying new Azure Virtual Desktop (AVD) session hosts with the new Teams Client installed, users getting the following error after the login:

> **C:\Program Files\WindowsApp\MSTeams_24004.1307.2669.7070_x64_8wekyb..\msteams_autostarter.exe**
>
> **The parameter is incorrect**

![newsletter](images/Screenshot%202024-02-28%20101737.png)

In the picture the error `The parameter is incorrect` is displayed as `de parameter is onjuist` because the AVD host has a Dutch language pack installed.

To solve this issue I performed the following steps:
- Install FSLogix 2210 hotfix 3 (2.9.8784.63912). [**link**](https://learn.microsoft.com/en-us/fslogix/overview-release-notes#fslogix-2210-hotfix-3-29878463912) on the AVD image.
- Check if the following file and folder exclusions are added. [**FSLogix Configure Antivirus file and folder exclusions**](https://learn.microsoft.com/en-us/fslogix/overview-prerequisites#configure-antivirus-file-and-folder-exclusions)
- Add the following files to the virus exclusion list:

    `%programfiles%\WindowsApps\MSTeams_*\ms-teams.exe`

    `%programfiles%\WindowsApps\MSTeams_*\ms-teamsupdate.exe`
- Uninstall the existing Teams Client on the AVD image.
- Install the new Teams client as described in the following article [**Upgrade to new Teams for Virtualized Desktop Infrastructure (VDI**)](https://learn.microsoft.com/en-us/microsoftteams/new-teams-vdi-requirements-deploy) on the AVD image

I created a new image and deployed new AVD Session hosts from the image. After performing these steps the error disappeared.
