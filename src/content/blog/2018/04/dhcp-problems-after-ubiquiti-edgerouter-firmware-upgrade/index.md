---
title: "DHCP problems after Ubiquiti EdgeRouter firmware upgrade"
pubDate: "2018-04-16T06:57:40.000Z"
categories: 
  - "home-lab"
tags: 
  - "homelab"
author: Ivo Beerens
url: /2018/04/16/dhcp-problems-after-ubiquiti-edgerouter-firmware-upgrade/
---

In my homelab I use a Ubiquiti EdgeRouter Lite 3-port and UniFi AC Access Points for some time now. After upgrading the Ubiquiti EdgeRouter to the latest firmware (EdgeOS 1.10.1) my WIFI devices where unable to get an IP address. I have different VLANs defined on the EdgeRouter for the WIFI networks. Each VLAN has it’s own DHCP scope configured.

In the EdgeRouter GUI I didn't find any clue why the WIFI devices didn't get an IP address anymore, so I opened a SSH session to the EdgeRouter and start troubleshooting. First I tried to start the DHCP service by using this command.

```
sudo service dhcpd start
```
The following error is displayed:

> \[....\] Cannot start the DHCP server because configuration file /opt/vyatta/etc/d \[FAILconf is absent. ... failed!

The DHCP service cannot be started, that's the problem why the WIFI devices didn't get an IP address anymore. Then i looked in the following log files:
```
cat /var/log/messages
cat /var/log/vyatta/vyatta-commit.log
```

In the ```vyatta-commit.log``` the following error is displayed under the [service dhcp-server] section:

> \[ service dhcp-server \] Static DHCP lease IP '192.168.249.11' under static mapping 'Chromecast' under shared network name 'WIFI' is already is in by static-mapping ''. DHCP server configuration commit aborted due to error(s).

[![](images/UBNT-300x161.png)](images/UBNT.png)

In the DHCP scope for the WIFI VLAN there was a static IP mapping called "Chromecast". I removing the "Chromecast" static IP mapping in the GUI of the EdgeRouter. In the SSH session tried to start the DHCP service by using the following command.

```
sudo service dhcpd start
```

> Starting DHCP server daemon...

The DHCP service is started.  In the vyatta-commit.log no new errors are displayed and the WIFI devices were able to get an IP address.  Removing the "Chromecast" static mapping cleared the duplicate static IP error.