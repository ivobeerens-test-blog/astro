---
author: Ivo Beerens
title: "Enable SSH for VMware ESX 3i"
pubDate: "2008-08-07T20:11:24.000Z"
categories:
- VMware ESX
tags:
- VMware ESX
url: /2008/08/07/enable-ssh-for-VMware-esx-3i/
---

There is a hack to enable SSH for VMware ESX 3i. Here is the procedure to enable SSH

– Boot ESXi and wait till the till"loaded

– Press ALT-F1, you see the console screen

– Type ```unsupported``` and press ENTER

– Enter the root password

– Enter the following command ```vi /etc/inetd.conf```

– Search for the #SSH row

– Remove the # from the SSH row

– Save the config by entering ```:wq!```

– Type ```ps | grep inetd``` on the console

– Send a hangup signal by using the following command: ```kill -s HUP <PID>```

Open now your favorite SSH client (for example Putty) and SSH to the VMware ESXi server.



