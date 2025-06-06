---
title: "Time for new whitebox for your VMware vSphere or MS Hyper-V home lab environment?"
pubDate: "2011-11-18T10:27:43.000Z"
categories: 
  - "homelab"
  - "vSphere"
  - "whitebox"
tags: 
  - "vSphere"
  - "whitebox"
  - homelab
author: Ivo Beerens
url: /2011/11/18/time-for-new-whitebox-for-your-vmware-vsphere-or-ms-hyper-v-home-lab-environment/
---

When using a whitebox lab environment at home and like to test for example vSphere 5, vCloud Director, VMware View and MS Hyper-V (nested in VMware vSphere you need a lot of processor power and memory. In almost all whitebox lab environment the processor power is not the problem but the amount of memory is.

Till now the Sandy Bridge desktop boards support up to 32GB memory with only four DIMM slots on the motherboard. For 32GB you need 4 * 8GB DIMMs, 8GB DIMMs are very expensive on the moment when writing this post.

Intel Introduced the Sandy Bridge-E  processors and motherboards with the X79 based chipset that support this processors. This gives new possibilities for building a new whitebox home lab.

### Processor

Intel introduced the Sandy Bridge-E or the 2nd generation Core i7 Extreme Processors. On the moment there are two Sandy Bridge-E processors available:

- Intel Core-I7-3960X 3,3GHz,15M L3-cache, list price around €950,00

- Intel Core-I7-3930K 3,2GHz,12M L3-cache, list price around € 550,00

As you can see the processors are pretty expensive. The Sandy Bridge-E has the following features:
- Socket LGA2011;
- 6 cores (12 cores with Hyper-Threading);
- Quad channel DDR3-1600 memory controller;
- Supports Hyper-Threading, Intel VT-x, VT-d;
- PCI-Express 3.0 support;
- 40 PCI-Express lanes;
- Max TDP 130 W;
- Multiplier unlocked.

The 2nd generation Core i7 Extreme Processors can be compared [here](http://ark.intel.com/).

Begin 2012 Intel will release the **Core I7 3820** Sandy Bridge-E processor. This  processor will support **4 cores** (8 with Hyper-Threading) and have **10MB** L3-cache. The price is not announced yet but will be much lower as the Intel 3930K and 3960X processors. When you buy a Sandy Bridge-E processor there is no CPU cooler in the box.

### Motherboard

The Intel X79 chipset support the Socket LGA2011. To choose a motherboard you can for example check the following things:
- How much DIMM slots it has (some X79 motherboard have 4 DIMM slots)
- How much expansion slots it has
- Price
- How many USB ports and what speed they have
- Type and number of SATA controllers
- Type of number of NIC(s)

Important for a whitebox lab configuration is that the SATA controller (if you want to use local storage) and NIC(s) are supported by VMware ESXi. When choosing a motherboard with enough expansion slots you can always add extra RAID and NIC cards that are supported.

The most X79 based motherboards have 8 DIMM slots and supports up to 64GB memory.  8GB memory modules are expensive. So you can make a configuration with 8 x 4GB = 32 GB DDR-3 memory which is much cheaper. When 8GB memory modules become cheaper you can upgrade to 64GB memory.

Asus has a nice overview of all the X79 bases series motherboards they have, found here.

### Shopping list

I made a shopping without the case, storage and the power supply. The prices are taken from the [Tweakers pricewatch](http://tweakers.net/pricewatch/) (Dutch) an can change every day.

**Shopping list**:
| | |
| Component | List Price (euro)
| --- | --- |
| Intel Core-I7-3930K	| 520,00 |
| Asus P9X79 | 230,00 |
| 4 x 4 x 2GB DDR3-1600 memory (total 32GB)	| 160,00 |
| Simple processor cooler	30,00 |
| Simple graphic card PCI-E	25,00 |
| Total	| 965,00|

### Conclusion

With the Sandy Bridge-E processor and X79 based motherboard you can build a monster whitebox lab environment with the best performance on the moment.

The advantage of using one huge whitebox you can use nesting to run your VMware vSphere and MS Hyper-V environment(s) on one box. An other advantage of using a whitebox is that you can make a low noise system. It’s a lot of money for a whitebox home lab environment but if you you wait for the Intel **Core I7 3820** Sandy Bridge-E processor (announced in January 2012) can save you around €270,00 (this is an assumption because the list prices are not available yet).