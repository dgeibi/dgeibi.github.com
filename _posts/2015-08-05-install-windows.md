---
layout: post
title: 重装或升级 Windows
date: 2015-08-05 16:38:38 +0800
tags: Windows
---

### 0. 参考

*   [免费用正版Win10完全攻略](http://www.ithome.com/html/win10/163188.htm)
*   [Win7/Win8.1升级Win10正式版后如何全新安装系统？](http://www.ithome.com/html/win10/166773.htm)
*   [跳过从Win7/8升级，直接格式化全新安装 Windows 10 并自动永久激活系统的方法教程](http://www.iplaysoft.com/clean-install-windows10-activate.html)
*   [对应版本的信息来源](http://www.ithome.com/html/win10/152882.htm)

### 1. 备份C盘的重要文件

### 2. 下载

1）系统镜像

需要免费升级win10的用户请下载对应版本的[镜像](https://www.microsoft.com/zh-cn/software-download/windows10ISO)

* Windows7简易版、家庭普通版、家庭高级版 --> Windows10家庭版
* Win7专业版和旗舰版 --> Win10专业版
* Win8/Win8.1 --> Win10家庭版
* Win8/Win8.1专业版 --> Win10专业版
* Win8.1/Win8中文版 --> Win10家庭中文版
* Win8.1 含Bing（必应）版 --> Win10家庭版
* Win8.1/Win8单语言版 --> Win10家庭单语言版

注意：32/64位不能升级位64/32位系统；下载列表中 N 是欧洲版和 KN 是韩版；Win10专业版/家庭版包含在列表的“Windows 10”里，其实也可以下下面的镜像

Windows 10 (Multiple Editions), Version 1511 (x64) - DVD (Chinese-Simplified)

```
ed2k://|file|cn_windows_10_multiple_editions_version_1511_x64_dvd_7223622.iso|4187224064|FE3F221D193FEF02627F7F8CF0041BB3|/
```

更多镜像见 [MSDN，我告诉你](http://msdn.itellyou.cn/)

2）搜索、下载、安装 EasyBCD

### 3. 重装或升级系统

#### 3.1. 重装(格式化)

将准备好的系统镜像解压至一非系统分区 (非C盘) 的 <del>任意目录</del> 根目录

>关于 WIN10 免费升级的提示：在 Win10 镜像里的 Sources 文件夹下找到名为 `gatherosstate.exe` 的程序，将其复制到桌面。双击运行 `gatherosstate.exe`，稍等片刻，它将会在桌面上生成一个名为`GenuineTicket.xml`的文件。从文件命名就能看出，`GenuineTicket.xml` 就是「正版通行证」的意思，它里面保存了当前电脑的系统激活信息，你可以用U盘将它保存好，后面我们将会需要这个文件。

打开 EasyBCD

添加新条目 -->　WinPE

* 类型：WIM映像
* 名称：随意
* 路径： 选择之前解压得到的目录的 `sources\boot.win`

--> 添加条目 --> 重启电脑 --> 选择刚刚随意填的条目


开始安装

![](/image/install-windows/05.jpg)

![](/image/install-windows/06.jpg)

▲语言、区域和输入法设置，中国用户使用默认即可，点击“下一步”继续

![](/image/install-windows/07.jpg)

▲点击“现在安装”

![](/image/install-windows/08.jpg)

▲安装密钥：

WIN10：“没有安装密钥”；选择与原系统对应版本以免费升级

WIN8.1：XHQ8N-C3MCJ-RQXB6-WCHYG-C9WKB (专业版)

![](/image/install-windows/09.jpg)

▲勾选“我接受许可条款”后，点击“下一步”继续

![](/image/install-windows/10.jpg)

▲由于我们目前执行纯净安装，因此要选择第二项“自定义”安装方式

![](/image/install-windows/11.jpg)

▲先将当前系统盘（根据分区大小判断）格式化，并选择这个分区，然后“下一步”即可

![](/image/install-windows/12.jpg)

▲此后，Windows 安装程序要至少重启两次，耐心等待30分钟左右将进入后续设置。后续设置很简单，这里就跳过了。

>关于 WIN10 免费升级的提示：待 Win10 安装完成并进入桌面后，按键盘 Win+R 快捷键，打开“运行”，输入
>
>```
%ProgramData%\Microsoft\Windows\ClipSVC\GenuineTicket
>```
>并点确定
这时系统会打开一个文件夹，将之前生成的 `GenuineTicket.xml` 文件复制到这个文件夹中。
确保电脑正常联网然后重启电脑。待电脑重启后，稍等片刻 Win10 将会自动进行激活。如果没有，手工进入“设置”，点击窗口底部的 “Windows没有激活。请立即激活Windows” 链接，然后点击 “在线激活Windows” 下的 “激活” 按钮即可手工激活。

#### 3.2. 升级系统（不格式化）

将下载好的 iso 文件解压到非系统盘的任意位置

打开该位置根目录的 setup.exe

按照提示升级便可。

升级完后如果不想回到以前的系统可以删掉系统盘的 Windows.old 文件夹

### 4. 激活

注：激活过程保持联网

按键盘 Win+X 快捷键，选择“命令提示符（管理员）”

输入如下命令

```batch
slmgr /upk
slmgr /ipk XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```

注：XXXXX-XXXXX-XXXXX-XXXXX-XXXXX 是你购买的正版密钥。

稍等片刻，你可以在“系统”(按键盘 Win+X 快捷键，选择“系统”）中发现“Windows 已激活”。

### 5. 更新驱动

刚装完系统，Windows 一般会自动更新驱动等。

系统更新完并重启之后，按键盘 Win+X 快捷键，选择“设备管理器”，如果没有感叹号，说明驱动都正常工作了，若有就右键有黄色感叹号的项目，进行联网更新。

感叹号没消失，一般可以去找设备的官网按型号、系统下驱动。

再不行就装“驱动精灵”，“鲁大师”等，有开机黑屏的风险哦！
