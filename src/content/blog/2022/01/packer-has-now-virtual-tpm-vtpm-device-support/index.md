---
title: "Packer has now virtual TPM (vTPM) device support"
pubDate: "2022-01-27T19:45:12.000Z"
categories: 
  - "packer"
tags: 
  - "packer"
  - "vtpm"
  - "windows-11"
author: Ivo Beerens
url: /2022/01/27/packer-has-now-virtual-tpm-vtpm-device-support/
---

In an earlier blogpost called “[Use Packer to install Windows 11 and enable vTPM and VBS](http://localhost/2021/10/22/use-packer-to-install-windows-11-and-enable-vtpm-and-vbs/)” I highlighted a workaround for adding a virtual TPM (vTPM) device to a VM in a VMware vSphere environment. A vTPM device is needed for running Windows 11 (without using registry hacks to bypass the TPM device check).

The latest Packer Plugin for VMware vSphere (V1.0.3) has now support for adding a vTPM device. Default a vTPM device is not added to the VM deployed with Packer. So if you want to create a Windows 11 Golden Image for example you can use Packer with the VMware vSphere plugin with a vTPM device.

Here are the high over steps outlined to add a vTPM device when provisioning a new VM with Packer.
  - Download Packer 1.7.9  or later (https://www.packer.io/downloads).
  - Add the VMware vSphere plugin to the HCL configuration file (https://github.com/hashicorp/packer-plugin-vSphere)

```json
packer {
  required_version = ">= 0.0.1"
  required_plugins {
    vsphere = {
      version = ">= 0.0.1"
      source  = "github.com/hashicorp/vsphere"
    }
  }
}
```

[![](images/1-300x100.jpg)](images/1.jpg)

- Add a variable to enable vTPM

```json
variable "vm_tpm" {
  type = string
  default = "true"
}
```

- In the vSphere-iso section, add the vTPM configuration parameter that uses the vm\_tpm variable to enable the vTPM device (more options can be found here, [link](https://www.packer.io/plugins/builders/vSphere/vSphere-iso))

```json
source "vSphere-iso" "win11basic" {
  vTPM = "${var.vm_tpm}"
}
```

- Perform a packer init command to download the Packer plugin binaries define in the config file
    -  `packer init config.pkr.hcl` 
- Run the packer build command to create the VM
    - `packer build config.pkr.hcl`

The VM will be created with a vTPM device.

[![](images/2-300x271.jpg)](images/2.jpg)

With Packer and the VMware vSphere plugin, it is now possible to create a VM with a vTPM device which is needed for deploying Windows 11 VMs. This is a great improvement!