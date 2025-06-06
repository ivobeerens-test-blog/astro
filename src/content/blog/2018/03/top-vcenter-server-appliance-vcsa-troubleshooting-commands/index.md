---
title: "Top vCenter Server Appliance (VCSA) troubleshooting commands"
pubDate: "2018-03-06T14:17:31.000Z"
categories: 
  - "VMware"
tags: 
  - "vcsa"
author: Ivo Beerens
url: /2018/03/06/top-vcenter-server-appliance-vcsa-troubleshooting-commands/
---

During the configuration and troubleshooting of vCenter Server Appliances (VCSA) I maintain a list of commands that I frequently use. This list contains my top configuration and troubleshooting VCSA commands:

- Enable access the Bash shell:

``` 
shell.set –enabled true  
```

- Permanently configure the default Shell to BASH for Root:

``` 
chsh -s /bin/bash root  
```

- Log location of the VCSA:

``` 
/var/log/vmware/vsphere-client/logs/  
```

- VCSA service management:

``` 
Check status  
service-control –status –all  
List services  
service-control –list  
Stop all services  
service-control –stop –all  
Start all services  
service-control –start –all  
```

- Join the AD domain from PSC:

``` 
/opt/likewise/bin/domainjoin-cli join domain.nl aduser password  
```

After the AD domain join reboot the appliance

- Check the AD domain join status:

``` 
/opt/likewise/bin/domainjoin-cli query  
```

- Leave AD domain join:

``` 
/opt/likewise/bin/domainjoin-cli leave  
```

After the AD domain leave reboot the appliance

- Certificate Manager location:

``` 
/usr/lib/vmware-vmca/bin/certificate-manager  
```

- Test port connectivity from the VCSA:

``` 
curl -v telnet://target ip address:port  
Example:  
curl –v telnet://mypsc.domain.local:443  
```

- Identity which PSC the VCSA is pointing to:

``` 
/usr/lib/vmware-vmafd/bin/vmafd-cli get-ls-location –server-name localhost  
```

- Repoint the VCSA to another PSC:

``` 
cmsso-util repoint –repoint-psc "PSC01"  
```

- Check the PSC replication partner:

``` 
/usr/lib/vmware-vmdir/bin/vdcrepadmin -f showpartners -h localhost -u administrator -w password  
```

- Check the PSC replication status:

``` 
/usr/lib/vmware-vmdir/bin/vdcrepadmin -f showpartnerstatus -h localhost -u administrator -w password  
```

Output:

``` 
Partner: psc02  
Host available: Yes  
Status available: Yes  
My last change number: 4274  
Partner has seen my change number: 4274  
Partner is 0 changes behind.  
```

- VDC Admin tool test LDAP and force replication

``` 
/usr/lib/vmware-vmdir/bin/vdcadmintool  
```
