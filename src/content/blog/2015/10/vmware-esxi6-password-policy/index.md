---
title: "VMware ESXi6 Password Policy"
pubDate: "2015-10-07T10:08:48.000Z"
categories: 
  - "esxi"
  - "VMware"
tags: 
  - "esxi-2"
  - "VMware"
author: Ivo Beerens
url: /2015/10/07/vmware-esxi6-password-policy/
---

With VMware ESXi 6 the password policy is changed and require to use more complex passwords. The password policy in ESXi 6 has the following requirements:
- Passwords must contain characters from at least three character classes.
- Passwords containing characters from three character classes must be at least seven characters long.
- Passwords containing characters from all four character classes must be at least seven characters long.

An uppercase character that begins a password does not count toward the number of character classes used. A number that ends a password does not count toward the number of character classes used.

For LAB environments I change frequently the password policy  in the ESXi 5 default, because it is possible to generate passwords that are easier to remember. The ESXi 5 default password policy has the following requirements:

- Passwords containing characters from one or two character classes must be at least eight characters long.
- Passwords containing characters from three character classes must be at least seven characters long.
- Passwords containing characters from all four character classes must be at least six characters long.

The default configuration is for ESXi 5 and ESXi 6 are:

- **ESXi 5**: retry=3 min=8,8,8,7,6
- **ESXi 6**: retry=3 min=disabled,disabled,disabled,7,7

This means for the ESXi 5 password policy:
- **retry**\=3 min=**N0**,**N1**,**N2**,**N3**,**N4**
- **retry**\=3: A user is allowed 3 attempts to enter a sufficient password. 
- **N0**\=8: Passwords containing characters from one character class must be at least eight characters long. For example: VMwareee 
- **N1**\=8: Passwords containing characters from two character classes must be at least eight characters long. For example: VMware12 
- **N2**\=8: Passphrases must contain words that are each at least eight characters long. For example: VMwareee
- **N3**\=7: Passwords containing characters from all three character classes must be at least seven characters long. For example: VMware12 
- **N4**\=6: Passwords containing characters from all four character classes must be at least six characters long. For example: VMware1!

The word "disabled" can be used to not use specific password complexity. The password policy can be changed in the vSphere (Web) Client advanced system settings (see screenshot). No editing of PAM config files on the ESXi host is required anymore.

[![vSphere client](images/vSphere-client-300x180.png)](images/vSphere-client.png)

To change the password policy on multiple ESXi hosts, PowerCLI can be used. Here's an example to change the Password Policy to the ESXi 5 password policy default:

```powershell
# Set the ESXi Password Policy by using PowerCLI for every ESXi host
# Default Password Policy ESXi 6 = retry=3 min=disabled, disabled, disabled, 7, 7
# Default Password Policy ESXi 5 = retry=3 min=8,8,8,7,6
# Last updated by: Ivo Beerens October 4, 2015
$PasswordPolicy = "retry=3 min=8,8,8,7,6"
$VMHosts = Get-VMHost | Where { $_.ConnectionState -eq "Connected" }
foreach ($VMHost in $VMHosts)
{
$VMHosts | Get-AdvancedSetting -Name “Security.PasswordQualityControl" | Set-AdvancedSetting -Value $PasswordPolicy -Confirm:$false
}
```
