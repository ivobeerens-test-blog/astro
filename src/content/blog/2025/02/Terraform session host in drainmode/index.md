---
title: "Deploy new Azure Virtual Desktop (AVD) session hosts in drain mode with Terraform"
description: "Guide to implementing drain mode for AVD session hosts using Terraform and AzAPI."
author: Ivo Beerens
pubDate: 2025-02-20T00:00:36+01:00
image: 
draft: false
categories:
    - avd
tags:
    - azure
    - avd
    - daas
    - euc
---

Using Terraform I can create new AVD session hosts when I want.
For example after patch tuesday I create new AVD images with Packer and deploy new AVD session hosts using Terraform with GitHub Actions.

When deploying new AVD session hosts in existing host pools, I don't want users to log in directly after the new AVD session host is created. In the Terraform `azurerm` provider, I could not find a way to enable drain mode. Then, the AzAPI Terraform provider showed up.

**What is AzAPI?**
> The AzAPI provider is a thin layer on top of the Azure ARM REST APIs. It enables you to manage any Azure resource type using any API version, enabling you to utilize the latest functionality within Azure. AzAPI is a first-class provider designed to be used on its own or in tandem with the AzureRM provider.

First, I needed to find the drain mode property. I used the following steps:
- Deploy a single AVD session host or use an existing AVD session host.
- Authenticate to Azure (`az login`)
- The following PowerShell/AZ commands list the properties of the AVD session host:
```powershell
# Variables 
$subscriptionId = "01433xxx-48xx-48xx-8cxx-20941a55f5xx"
$resourceGroup = "ibs-rg-avd-sessionhosts"
$hostpool = "ibs-hp-001"
$sessionHost = "000vdp0225-0.ibeerens.nl"

az rest --method get --url https://management.azure.com/subscriptions/$subscriptionid/resourceGroups/$resourceGroup//providers/Microsoft.DesktopVirtualization/hostpools/$hostpool/sessionHosts/${sessionHost}?api-version=2024-04-03
```
After running the script the following output displayed:

```
{
  "id": "/subscriptions/01433xxx-48xx-48xx-8cxx-20941a55f5xx/resourcegroups/ibs-rg-avd-sessionhosts/providers/Microsoft.DesktopVirtualization/hostpools/ibs-hp-001/sessionhosts/000vdp0225-0.ibeerens.nl",
  "name": "ibs-hp-prod/000vdp0225-0.ibeerens.nl",
  "properties": {
    "agentVersion": "1.0.9742.2500",
    "allowNewSession": true,
    "assignedUser": null,
    "friendlyName": null,
    "lastHeartBeat": "2025-02-18T07:33:44.08Z",
    "lastUpdateTime": "2025-02-18T07:33:44.23Z",
    "objectId": "e899785b-1b91-42a9-8cf5-61a43fba2c05",
    "osVersion": "10.0.22631.4890",
    ...
```
In the properties section, property `allowNewSession:` is set to `true`. This means the session host in not in drain mode. When setting the `allowNewSession:` to `false`, drain mode is enabled.

Now we know the property, add the AzApi Terraform provider in the Terraform code.

```
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "4.18.0"
    }
    azapi = {
      source  = "Azure/azapi"
      version = "2.2.0"
    }
  }
}

provider "azapi" {
  enable_preflight = true
}
```

Next is an example of the AzApi resource block that will enable drain mode:

```
# AVD session host - enable drain mode 
resource "azapi_resource_action" "enterdrainmode" {
  count       = var.vm_count
  type        = "Microsoft.DesktopVirtualization/hostPools/sessionHosts@2024-04-03"
  resource_id = "${data.azurerm_virtual_desktop_host_pool.hp-prod.id}/sessionhosts/${local.sessionhostname}-${count.index}.${var.domain}"
  method = "PATCH"
  body = {
    properties = {
      allowNewSession = false
    }
  }

  depends_on = [
    azurerm_virtual_machine_extension.registersessionhost
  ]
}
```
This code can be implemented in your existing Terraform code for provisioning new AVD session hosts and enable drain mode.

More information can be found here:
- [Terraform Provider for Azure Resource Manager Rest API](https://github.com/Azure/terraform-provider-azapi/tree/main)
- [Announcing AzAPI 2.0.](https://techcommunity.microsoft.com/blog/azuretoolsblog/announcing-azapi-2-0/4275733)
- [Overview of the Terraform AzAPI provider](https://learn.microsoft.com/en-us/azure/developer/terraform/overview-azapi-provider)
- [Azure REST API reference documentation](https://learn.microsoft.com/en-us/rest/api/desktopvirtualization/session-hosts/update?view=rest-desktopvirtualization-2024-04-03&tabs=HTTP)