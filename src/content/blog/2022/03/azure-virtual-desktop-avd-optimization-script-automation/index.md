---
title: "Optimize the Azure Virtual Desktop (AVD) golden image automatically"
pubDate: "2022-03-25T11:01:55.000Z"
categories: 
  - "avd"
  - "azure-virtual-desktop"
tags: 
  - "avd"
  - "azure-virtual-desktop"
url: /2022/03/25/azure-virtual-desktop-avd-optimization-script-automation/
author: Ivo Beerens
---

For Azure Virtual Desktop (AVD) there is an Optimization Tool available called Virtual Desktop Optimization Tool (VDOT). With this tool/script you optimize the following categories within an Azure Virtual Desktop (AVD):
  - Universal Windows Platform (UWP) app cleanup
  - Optional Features cleanup
  - Local policy settings
  - System services
  - Scheduled tasks
  - Apply Windows (and other) updates
  - Automatic Windows traces
  - Windows Defender optimization
  - Client network performance tuning by registry settings
  - Additional settings from the "Windows Restricted Traffic Limited Functionality Baseline" guidance.
  - Disk cleanup

Optimizing the AVD Golden Image will improve the User Experience, so it is highly recommended to use it. Vendors such as VMware (VMware OS Optimization Tool) and Citrix (Citrix Optimizer Tool) use their own tools for optimizing their Golden Images.

To optimize an AVD image you must do some things manually before you run the Virtual Desktop Optimization Tool (VDOT). I created a PowerShell script that downloads the latest VDOT and optimizes the AVD image automatically.

The PowerShell script below does the following:
- Create a folder on the AVD  VM called c:\optimize
- Download the latest Virtual Desktop Optimization Tool
- Expand the Virtual Desktop Optimization Tool  zip file to the c:\optimize folder
- Remove the VDOT Archive file
- Download a modified apppackages.json file. The default apppackages.json file will enable all the APPX packages.
- Copy the apppackages.json file to the configuration folder for each build
- Unblock all the downloaded files
- Execute the Virtual Desktop Optimization Tool
- Remove the c:\optimize folder
- Reboot the AVD host

```powershell
<#
    .SYNOPSIS
        Virtual Desktop Optimalization Tool (VDOT)
    .DESCRIPTION
        Download the Virtual Desktop Optimalization Tool (VDOT), creates a folder called optimize and runs VDOT tool.
        The VDOT tool determines OS version at run-time
    .NOTES
        Version:        1.0
        Author:         Ivo Beerens
                        info@ivobeerens.nl
        Creation pubDate:  25-02-2022
        Plattform:      Azure Virtual Desktop (AVD)
        Changelog:      
                        25-05-2022      1.0 - Initial script development
    .COMPONENT
 
    .LINK
  
    .Example
        Script needs to be run with PowerShell elevated
#>
 
# Variables
$verbosePreference = 'Continue'
$vdot = 'https://github.com/The-Virtual-Desktop-Team/Virtual-Desktop-Optimization-Tool/archive/refs/heads/main.zip'
$apppackages = 'https://raw.githubusercontent.com/ibeerens/AVD/main/vdot/ConfigFiles/AppxPackages.json'
$vdot_location = 'c:\Optimize'
$vdot_location_zip = 'c:\Optimize\vdot.zip'
$apppackages_location = 'C:\Optimize\AppxPackages.json'
 
# Enable TLS 1.2
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
 
# Clear screen
Clear
 
# Create Folder
$checkdir = Test-Path -Path $vdot_location
if ($checkdir -eq $false){
    Write-Verbose "Creating '$vdot_location' folder"
    New-Item -Path 'c:\' -Name 'Optimize' -ItemType 'directory' | Out-Null
}
else {
    Write-Verbose "Folder '$vdot_location' already exists."
}
 
# Download VDOT
Write-Verbose "Dowmload VDOT"
Invoke-WebRequest -Uri $vdot -OutFile $vdot_location_zip
 
# Expand Archive
Write-Verbose "Expand Archive"
Expand-Archive $vdot_location_zip -DestinationPath $vdot_location -Verbose -Force
 
# Remove Archive
Write-Verbose "Remove Archive"
Remove-Item $vdot_location_zip
 
# Download AppPackages
Write-Verbose "Dowmload Apppackages.json APPX file"
Invoke-WebRequest -Uri $apppackages -OutFile $apppackages_location
 
# Copy the AppPackage file to all versions
Write-Verbose "Copy Apppackages.json to all configurationfiles folders"
Copy-Item $apppackages_location -Destination 'C:\Optimize\Virtual-Desktop-Optimization-Tool-main\1909\ConfigurationFiles\AppxPackages.json'
Copy-Item $apppackages_location -Destination 'C:\Optimize\Virtual-Desktop-Optimization-Tool-main\2004\ConfigurationFiles\AppxPackages.json'
Copy-Item $apppackages_location -Destination 'C:\Optimize\Virtual-Desktop-Optimization-Tool-main\2009\ConfigurationFiles\AppxPackages.json'
 
# Unblock all files
Write-Verbose "Unblock all files"
dir $vdot_location -Recurse | Unblock-File
 
# Change folder to VDOT
Write-Verbose "Change folder to VDOT location"
$vdot_folder = $vdot_location + '\Virtual-Desktop-Optimization-Tool-main'
cd $vdot_folder
 
Write-Verbose "Run VDOT"
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force
.\Windows_VDOT.ps1 -Verbose -AcceptEULA
 
# Sleep 5 seconds
sleep 5
 
# Remove folder
Write-Verbose "Remove Optimize folder"
cd \
Remove-Item $vdot_location -Recurse -Force
 
# Restart AVD Golden image
Restart-Computer -Force
```

You can use this script in your AVD Golden Image building process. The Virtual Desktop Optimization Tool (VDOT) changes a lot of settings so be sure to test your image very carefully. The script can be found on my GitHub, [link](https://github.com/ibeerens/AVD/tree/main/vdot).