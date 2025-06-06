---
title: "Test your ESXi network resiliency with ESXCLI"
description: "Using ESXCLI commands to test network redundancy by bringing NICs up/down in ESXi."
pubDate: "2013-05-01T08:12:39.000Z"
categories: 
  - "esxi"
  - "networking"
  - "vSphere"
tags: 
  - "esxi-2"
  - "networking"
  - "vSphere"
author: Ivo Beerens
url: /2013/05/01/test-your-esxi-network-resiliency-with-esxcli/
---

After configuring the network portion for your ESXi servers you need to test if the redundancy is working as accepted. From the ESXi layer you can bringing down/up one or more uplinks to test the network resilience. No longer you need to pull out the UTP cables. Since ESXi5 this can be done by using the `esxcli network nic down/up` command.

First log in to ESXi using for example using Tech Support Mode
- Get a overview of the installed vmnics

`esxcli network nic list`

- Bring a vmnic down

`esxcli network nic down –n <vmnicNumber>`

- Bring a vmnic up

`esxcli network nic up –n <vmnicNumber>`

Only auto-negotiation 10Mb/100Mb/1000Mb/10000Mb speeds vmnics are supported. FlexNics with different speed are not supported.s