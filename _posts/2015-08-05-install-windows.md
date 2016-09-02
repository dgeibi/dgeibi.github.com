---
title: 重装或升级 Windows
date: 2015-08-05 16:38:38 +0800
category: tutorial
---

## 备份C盘的重要文件

## 下载

1）系统镜像

Windows 10 (Multiple Editions), Version 1607 (Updated Jul 2016) (x64) - DVD (Chinese-Simplified)

```
ed2k://|file|cn_windows_10_multiple_editions_version_1607_updated_jul_2016_x64_dvd_9056935.iso|4347183104|35EA5DB0F3BB714F5CE0740FB89D82D1|/
```

更多镜像见 [MSDN，我告诉你](http://msdn.itellyou.cn/)

2）下载、安装 [EasyBCD](https://pan.baidu.com/s/1hsmEhSS)

## 重装或升级系统

### 重装(格式化 C 盘)

将准备好的系统镜像解压至一非系统分区 (非C盘) 的 **根目录**

*已通过微软官方渠道升级到 WIN 10 并确保激活的用户，可以重装相同版本的 WIN 10 且不需要密钥，自动激活*

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

### 升级系统（不格式化）

将下载好的 iso 文件解压到非系统盘的任意位置

打开该位置根目录的 setup.exe

按照提示升级便可。

升级完后如果不想回到以前的系统可以删掉系统盘的 Windows.old 文件夹

## 激活

注：激活过程保持联网

按键盘 Win+X 快捷键，选择“命令提示符（管理员）”

输入如下命令

```batch
slmgr /upk
slmgr /ipk XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```

注：XXXXX-XXXXX-XXXXX-XXXXX-XXXXX 是你购买的正版密钥。

稍等片刻，你可以在“系统”(按键盘 Win+X 快捷键，选择“系统”）中发现“Windows 已激活”。

## 更新驱动

刚装完系统，Windows 一般会自动更新驱动等。

系统更新完并重启之后，按键盘 Win+X 快捷键，选择“设备管理器”，如果没有感叹号，说明驱动都正常工作了，若有就右键有黄色感叹号的项目，进行联网更新。

感叹号没消失，一般可以去找设备的官网按型号、系统下驱动。

再不行就装“驱动精灵”，“鲁大师”等，有开机黑屏的风险哦！
