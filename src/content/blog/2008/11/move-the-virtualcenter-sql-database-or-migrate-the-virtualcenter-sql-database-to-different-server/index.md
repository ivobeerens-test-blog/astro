---
author: Ivo Beerens
title: "Move the VirtualCenter SQL database or migrate the VirtualCenter SQL database to different server."
pubDate: "2008-11-29T20:39:42.000Z"
categories: 
  - "vCenter"
  - "VMware"
tags: 
  - "vCenter"
  - "VMware"
url: /2008/11/29/move-the-virtualcenter-sql-database-or-migrate-the-virtualcenter-sql-database-to-different-server/
---

VMware released two new handy KB articles about how to move or migrating  the SQL VirtualCenter database to different server.

To move the database

When relocating your SQL database:
- To move SQL Server databases to a new location by using Detach and Attach functions in SQL Server, see Microsoft KB article [](http://support.microsoft.com/kb/224071/en-us)[http://support.microsoft.com/kb/224071/en-us](http://support.microsoft.com/kb/224071/en-us)
- If you are using the Copy Database Wizard in SQL Server 2000.
- Update the Datasource (DSN) in the OBDC Administrator to reflect any changes made.
- If either the database login or password changed during the relocation, VirtualCenter must be updated to with the new credentials. For more information, see the _Modifying the username and password VirtualCenter uses to connect to the database server_ section of [Troubleshooting the database data source used by VirtualCenter Server (1003928)](http://kb.VMware.com/kb/1003928).
[Read the KB article here.](http://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=7960893)

Migrate the database to a new server:
- Shutdown the VirtualCenter Server service. For more information, see [Stopping, starting, or restarting the VirtualCenter Server service (1003895)](http://kb.VMware.com/kb/1003895).
- Take a backup of the SQL database.
- If the SQL database is also being moved, create a second instance of your database and use the vendor's tools to migrate the data.**Note**: For SQL Server, use Microsoft's Copy Database Wizard.
- Create the appropriate System DSN connections on the new VirtualCenter Server host.
- Begin the installation of the VirtualCenter software on the new server. If you are installing VirtualCenter in a virtual machine, guidelines for deploying VirtualCenter in a virtual machine, including sizing, installation and functionality.
- When prompted, select **Use existing database**, and provide the correct credentials to that database.
- When prompted, select to **not re-initialize the data**, as this erases all your inventory data.
- Reboot the virtual machine when the installation is finished.
- When you first start the VirtualCenter Client, it may ask for licenses. Configure the licenses as you had previously in your environment. For more information about licensing for ESX Server 3 hosts, see the Installation Guide. For more information about licensing for ESX Server 3i hosts, see the Setup Guide. You are now able to see the same settings and configuration details.**Note**: If the IP address of the new VirtualCenter Server has changed your ESX Servers must be made aware of that change, otherwise the ESX Servers continue to send their heartbeats to the original IP address of VirtualCenter and appear as Not Responding.To correct this situation: 
    1. Log in as root with an SSH client to each ESX host. 
    2. Use a text editor to change the IP address inside the <serverIp>xxx.xxx.xxx.xxx</serverIptags the following file:/etc/opt/VMware/vpxa/vpxa.cfg (VirtualCenter 2.5.x) /etc/VMware/vpxa.cfg (VirtualCenter 2.0.x). 
    3. Save your changes and exit.
    4. Restart the management agents. For more information, see [Restarting the Management agents on an ESX Server (1003490)](http://kb.VMware.com/kb/1003490).
    5. Repeat for all ESX hosts connected to the VirtualCenter Server.

[Read the KB article here.](http://kb.VMware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=5850444)



