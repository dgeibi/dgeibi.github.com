---
title: 编译自带 Drcom 的 OpenWrt 固件
date: 2016-10-12 14:03:19 +0800
category: tutorial
toc: true
---

感谢：

- [Image Generator (Image Builder) - EN [OpenWrt Wiki]](https://wiki.openwrt.org/doc/howto/obtain.firmware.generate)
- [OpenWrt Downloads - 中科大镜像](http://openwrt.proxy.ustclug.org/)

本文使用的硬件版本：ar71xx/generic；OpenWrt 的版本： trunk (Designated Driver)；Drcom的版本：5.2.1(p)

## 获取 Image Builder

```bash
cd ~
mkdir openwrt && cd openwrt
wget http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/OpenWrt-ImageBuilder-ar71xx-generic.Linux-x86_64.tar.bz2
tar -xvjf OpenWrt-ImageBuilder-ar71xx-generic.Linux-x86_64.tar.bz2
cd OpenWrt-ImageBuilder-ar71xx-generic.Linux-x86_64
```

## 修改 repositories.conf

修改 repositories.conf 如下

```
# repositories.conf
src/gz designated_driver_base http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/packages/base
src/gz designated_driver_kernel http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/packages/kernel
src/gz designated_driver_luci http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/packages/luci
src/gz designated_driver_management http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/packages/management
src/gz designated_driver_packages http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/packages/packages
src/gz designated_driver_routing http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/packages/routing
src/gz designated_driver_telephony http://openwrt.proxy.ustclug.org/snapshots/trunk/ar71xx/generic/packages/telephony
src imagebuilder file:packages
```

## 安装 make 的依赖

Debian/Ubuntu

```bash
apt-get install subversion build-essential libncurses5-dev zlib1g-dev gawk git ccache gettext libssl-dev xsltproc wget
```

CentOS/RHEL

```bash
yum install subversion git gawk gettext ncurses-devel zlib-devel openssl-devel libxslt wget
yum group install "Development Tools"
```

## 修改 Makefile

```
	$(OPKG) update || true; \
	fi
	$(MAKE) package_install
	# 添加以下2行，注意缩进，用 tab
	sed -i '/proto_run_command/i username=`echo -e "$$username"`' "$(TARGET_DIR)/lib/netifd/proto/ppp.sh"
	sed -i '/proto_run_command/i password=`echo -e "$$password"`' "$(TARGET_DIR)/lib/netifd/proto/ppp.sh"
ifneq ($(USER_FILES),)
	$(MAKE) copy_files
endif
```

不明白为什么要这样做的同学，请先看 [Drcom 折腾记录]({% post_url 2016-10-08-drcom %})。

## 配置文件的准备

例如：

```
files/
├── etc/
│   ├── config/
│   │   ├── firewall
│   │   ├── luci
│   │   ├── network
│   │   ├── system
│   │   └── wireless
│   ├── dnsmasq.conf
│   ├── drcom.conf
│   ├── hotplug.d/
│   │   └── iface/
│   │       └── 99-drcom
│   ├── opkg/
│   │   └── distfeeds.conf
│   └── sysupgrade.conf
└── usr/
    └── bin/
        └── drcom
```

可以用 `scp` 备份配置：

```bash
mkdir -p files/etc/config
scp root@192.168.1.1:"/etc/config/network /etc/config/luci /etc/config/wireless /etc/config/firewall" files/etc/config/
scp root@192.168.1.1:"/etc/sysupgrade.conf" files/etc/
```

也可以登录 luci，系统->备份/升级->生成备份，获得配置文件的压缩包。

99-drcom、drcom、drcom.conf 可以从 [Drcom 折腾记录]({% post_url 2016-10-08-drcom %}) 获取。

## 编译固件

语法：

```bash
make image PROFILE=XXX PACKAGES="pkg1 pkg2 pkg3 -pkg4 -pkg5 -pkg6" FILES=files/
```

- PROFILE：含有要编译的型号的配置；通过执行 `make info`，查看可用的选项。
- PACKAGES：要编译进固件的包
- FILES：包含要添加到固件的文件的文件夹

现在执行下面的命令的可以编译出自带 Drcom 的固件。

```bash
make image PROFILE="GLINET" PACKAGES="luci luci-i18n-base-zh-cn python-light python-logging python-openssl python-codecs" FILES=files/
```

所得固件在 `bin/ar71xx`。
