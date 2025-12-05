---
title: "Configure a Offline Depot for VMware Cloud Foundation or VMware vSphere Foundation on my UGREEN NAS"
description: "Running a Offline depot for VFF or VCF 9 on my UGREEN NAS"
author: Ivo Beerens
pubDate: 2025-12-04T00:00:00+01:00
image: 
draft: false
categories:
    - broadcom
    - vmware
    - vexpert
    - vcf
    - home lab
tags:
    - broadcom
    - vmware
    - vexpert
    - vcf
    - home lab
---

# Introduction

In my home lab I have a UGREEN DXP2800 NAS. This is a 2-bay NAS. For my lab environment I wanted to  create a Offline Depot for VMware Cloud Foundation or VMware vSphere Foundation. The most blogs are running an Ubuntu with Apache as webserver VM as offline depot server. I didn't wanted to use an Ubuntu VM as webserver. I use a small NGINX container that is running on the NAS as offline depot web server without requiring certificates. The VCF Download Tool (VCFDT) will be used for downloading install and upgrade VCF components. With the VCFDT you can enable  Update Manager Download Service (UMDS) for downloading a ESX software depot that is backwards compatible. 

## Webserver NGINX container configuration

- In the webportal of the UGREEN NAS perform the following steps:
  - In the App Center seach for Docker and install it
  - Open Control Panel - Select "Terminal" and enable the SSH protocol on port 22
- Download the vcfweb folder from my GitHub [repository]()  and transfer it in the docker file (I use [WinSCP](https://winscp.net/eng/download.php) for example on Windows)
- Make a SSH connection to the NAS and perform the command 'id'
```
ibeerens@DXP2800-01:~$ id
uid=1000(ibeerens) gid=10(admin) groups=10(admin),100(users),133(ughomeusers)
```

- In the web UI of the UGREEN NAS docker
  - Open Docker
  - Copy the vcfweb folder under the docker folder
  - Open Docker on the NAS and select Project
  - Select Create
    - Name = vcfweb
    - Storage path:
    - Paste the following Docker compose file and match the `PUID` and `PGID` with the IDs from the ID command:

```
services:
  nginx:
    image: nginx:latest
    container_name: vcfweb
    ports:
      - "8085:80"

    volumes:
      - /volume1/docker/vcfweb/config:/usr/share/nginx/html
      - /volume1/docker/vcfweb/nginx.conf:/etc/nginx/nginx.conf
      - /volume1/docker/vcfweb/.htpasswd:/etc/nginx/.htpasswd

    restart: unless-stopped
    environment:
        PUID: 1000
        PGID: 10
```


![alt text](image-9.png)

- Select Deploy and the container will be created

![alt text](image-10.png)

- Use the SSH connection to the UGREEN NAS and enter the following command: 
`sudo chmod 755 /volume1/docker/vcfweb`

- In the web browser enter the NAS IP with the port number
`http://192.168.250.166:8086/`

- Check if the webpage with authentication is displayed. The authentication is:
  - username: `vcf`
  - password: `VCFdepot`

![alt text](image-11.png)

You can create your own passwords with a .httpd password generator such as [.htpasswd Generatorr](https://codeshack.io/htpasswd-generator/)

The NGINX webserver is now running.

## VCF Download Tool
The VCF Download Tool is a command-line interface (CLI) utility designed to simplify the management of binaries and metadata for VMware Cloud Foundation platforms. 

- SSH to to the UGREEN NAS and go to the following folder
`/volume1/docker/vcfweb/vcfdt` and perform the following command:
`tar -xvf vcf-download-tool-9.0.1.0.24962179.tar.gz`
- Copy the download token from the Broadcom website and create a file named 'downloadtoken.txt' and save this in the `/volume1/docker/vcfweb` folder

Perform the following command to download install binaries needed by VCF Installer for deploying VCF instance:

`sudo /volume1/docker/vcfweb/vcfdt/bin/vcf-download-tool binaries download --depot-download-token-file=/volume1/docker/vcfweb/downloadtoken.txt --depot-store /volume1/docker/vcfweb/config/PROD --vcf-version=9.0.1 --automated-install --type=install --ceip=disable`

Download vSphere binaries

Use the VCF Download Tool UMDS commands to install UMDS and list, download and manage ESX binaries and metadata.
`sudo /volume1/docker/vcfweb/vcfdt/bin/vcf-download-tool umds install`
`sudo /volume1/docker/vcfweb/vcfdt/bin/vcf-download-tool umds run -S --add-entitlement-token <enter the download token>`
`sudo /volume1/docker/vcfweb/vcfdt/bin/vcf-download-tool umds run -S --patch-store /volume1/docker/vcfweb/config/umds-patch-store/`

The default Host platforms will be downloaded are:
```
embeddedEsx-9.0-INTL
embeddedEsx-9.0.1-INTL
esxio-8.0-INTL
esxio-9.0-INTL
esxio-9.0.1-INTL
embeddedEsx-7.0-INTL
embeddedEsx-8.0-INTL
```

- We only need the ESX 9 bits, so we disable all the host platforms and enable ESX 9 bits. 

`sudo /volume1/docker/vcfweb/vcfdt/bin/vcf-download-tool umds run -S --disable-host`

`sudo /volume1/docker/vcfweb/vcfdt/bin/vcf-download-tool umds run -S -e embeddedEsx-9.0-INTL`

- To start the download use the following command:
`sudo /volume1/docker/vcfweb/vcfdt/bin/vcf-download-tool umds run vmware-umds -D`

## VMware Cloud Foundation Installer appliance

After installing the VMware Cloud Installer appliance perform the following steps to connect to the Offline Depot web server.
- SSH to the VMware Cloud Foundation Installer appliance
- Perform the following commands:

`sudo`

`echo "lcm.depot.adapter.httpsEnabled=false" >> /opt/vmware/vcf/lcm/lcm-app/conf/application-prod.properties`

`systemctl restart lcm`

- Log in to the VMware Cloud Foundation Installer.
- Select "Depot settings and binary management".

![alt text](image.png)


- Select "Offline depot" configure

![alt text](image-1.png)

- Enter Offline depot credentials  
  `- FQDN or IP Address`  
  `- Port`  
  `- Username`  
  `- Password`    

![alt text](image-3.png)
- If everything is ok the Offline Depot checkmark is green

![alt text](image-4.png)

- Select the product and version and download all the components

![alt text](image-6.png)

After configuring these steps you have an offline depot on your UGREEN NAS configured with a NGINX docker web container.

More information:

VCF download tool
https://techdocs.broadcom.com/us/en/vmware-cis/vcf/vcf-9-0-and-later/9-0/lifecycle-management/what-is-the-vcf-download-tool-.html

