---
title: "Migrate to VMware ESXi? Use the &ldquo;ESX System Analyzer&rdquo; tool"
pubDate: "2011-12-05T18:31:53.000Z"
categories: 
  - "esx"
  - "esxi"
  - "tools"
tags: 
  - "esx"
  - "esxi-2"
  - "tools"
author: Ivo Beerens
url: /2011/12/05/tool-esx-system-analyzer/
---

VMware Flings did it again. They released another cool tool called “ESX System Analyzer”. This tool helps when you want to migrate from VMware ESX to VMware ESXi. It scans the VMware environment and collects the following information:
- Hardware compatibility with ESXi. It checks if the hardware is compatible with ESXi 4 and ESXi 5.
- VMs registered on the ESX host, as well as VMs located on the host’s local disk
- Modifications to the Service Console  
        - RPMs which have been added or removed  
        - Files which have been added  
        - Users and cronjobs which have been added

This tool also provides summary information for the whole existing environment

- Version of VMware Tools and Virtual Hardware for all VMs
- Version of Filesystem for all datastores

By having this information, administrators can determine what tasks need to be done prior to the migration. Examples include:
- Relocate VMs from local datastores to shared datastores
- Make note of what agent software has been added to the host and obtain the equivalent agentless version
- Replace cronjobs with equivalent remote scripts written with PowerCLI or vCLI

The installation and configuration of the “ESX System Analyzer” appliance is very easy. Here are some screenshots of the appliance:

<table border="0" cellspacing="0" cellpadding="2" width="400"><tbody><tr><td valign="top" width="200"><a href="images/image.png"><font color="#000000"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 7px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="images/image_thumb.png" width="270" height="188"></font></a></td><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2011/12/2011-12-05-15h14_18.jpg"><font color="#000000"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 7px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="2011-12-05 15h14_18" border="0" alt="2011-12-05 15h14_18" src="images/2011-12-05-15h14_18_thumb.jpg" width="274" height="192"></font></a></td></tr><tr><td valign="top" width="200"><a href="https://www.ivobeerens.nl/wp-content/uploads/2011/12/2011-12-05-15h19_56.jpg"><font color="#000000"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 7px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="2011-12-05 15h19_56" border="0" alt="2011-12-05 15h19_56" src="images/2011-12-05-15h19_56_thumb.jpg" width="272" height="187"></font></a></td><td valign="top" width="200"><font color="#000000"></font></td></tr></tbody></table>

Screenshots of the Output in XLS (Excel):

**Overview output:**

[![image](images/image_thumb1.png)]

**ESX server output:**

[![2011-12-05 15h24_11](images/2011-12-05-15h24_11_thumb.jpg "2011-12-05 15h24_11")](images/2011-12-05-15h24_11.jpg)

This is a very handy tool when you want to migrate from VMware ESX to ESXi. More information can be found on the VMware Flings website found [here](https://labs.VMware.com/flings/esx-system-analyzer).