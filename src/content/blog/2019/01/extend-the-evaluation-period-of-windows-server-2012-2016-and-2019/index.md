---
title: "Extend the evaluation period of Windows Server 2012/2016 and 2019"
pubDate: "2019-01-03T07:55:35.000Z"
categories: 
  - "windows"
tags: 
  - "windows"
author: Ivo Beerens
url: /2019/01/03/extend-the-evaluation-period-of-windows-server-2012-2016-and-2019/
---

In my lab environment I use evaluation versions of Windows Server 2012, 2016 and 2019 (if available). The evaluation versions of Windows Server are valid for 180 days by default and can be extended.

In this example below, the Windows Server 2016 evaluation has only 10 days remaining . 

[![](images/1-1-300x182.png)](images/1-1.png) [![](images/2-2-300x116.png)](images/2-2.png)

To extend the evaluation period the following steps can  be used:

- Open an elevated command prompt (cmd)
  - Enter the following command:

`cscript.exe %windir%\system32\slmgr.vbs /dlv`

[![](images/3-300x181.png)](images/3.png)

- There are 6 remaining rearms available. This means the Windows Server evaluation version can be used for 3 years. To rearm use the following command:

`cscript.exe %windir%\system32\slmgr.vbs /rearm`

- Restart the system 
- After the restart the evaluation period is extended for another 180 days