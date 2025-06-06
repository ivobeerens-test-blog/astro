---
title: "Unable to pair the broker agent with the Horizon adapter in vROps"
pubDate: "2016-01-13T19:05:05.000Z"
author: Ivo Beerens
url: /2016/01/13/vrealize-operations-manager/
---

When trying to pair the Broker agent 6.2 with the Horizon adapter in vRealize Operations Manager (vROps), it fails with the following error:
> Could not Pair with Adapter Address .... An Error has Occurred. Failed to pair the Adapter. Operation Adapter Pairing Failed.

[![1](images/1-300x224.png)](images/1.png)

This issue occurs when the firewall rules on the vRealize Operations Manager are incorrect. To resolve this issue update the firewall rules using the following steps:

- Open the VM console of the vRealize Operations Appliance or enable SSH (l[ink](https://www.ivobeerens.nl/2015/12/08/4105/))
- Log in as root user/
- Open the `/opt/VMware/etc/VMware-vcops-firewall.conf` file in the **vi** editor
- Make sure the following entries are added to the V4V Adapter specific ports section

```
# v4V Adapter specific ports
TCPPORTS="$TCPPORTS 3091:3095" 
TCPPORTS="$TCPPORTS 3099:3101"
```

[![2](images/2-300x38.png)](images/2.png)

- Save the file
- Restart the firewall by using the following command:

`/etc/init.d/VMware-vcops-firewall restart`

Try to pair the adapter again. The pairing must now be successful.

[![3](images/3-300x223.png)](images/3.png)