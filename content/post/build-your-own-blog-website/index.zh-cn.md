---
title: 【教程】搭建个人博客——Hugo+GitHub+Netlify+Cloudflare
description: 这篇文章将帮助您建立您的个人博客——就像这个网站！
slug: build-your-own-blog-website
date: 2022-09-14 00:00:00+0000
image: cover.jpg
categories:
    - Technology
tags:
    - Hugo
    - 博客
    - Netlify
    - Cloudflare
---

TODO: 为本文章添加一些图片以使教程更为清晰
快去催作者，他实在太懒了

## 前置知识

- [Markdown入门](https://markdown.com.cn/ "框架让你免于直接书写HTML,但Markdown还是得会")
- 能够进行基本的终端交互，Win: CMD/PowerShell. Linux: Shell， Mac: Terminal
- Git基本知识

## 准备工作

- 必需
  - 能够安装[GO](https://golang.google.cn/)和Hugo的计算设备（如果你把它移植到了烤面包机上……也不是不行）
  - 能够访问互联网和较为现代的浏览器（如果你能够访问到这篇博客，那应该没什么问题QwQ）（但我不建议你在带屏幕的烤面包机上完成后续的操作）（大雾）
  - 由于GitHub和在中国大陆内访问不稳定，最好使用一些加速工具（因为需要用到GitHub账号和仓库，故镜像网站不推荐使用）
    - 推荐（真没收钱╰（‵□′）╯）
      - [Watt Toolkit](https://steampp.net/ "Emm虽然是steam加速软件但这并不妨碍它能加速GitHub QvQ")
        - 优点：开源、跨平台
        - 支持架构：arm64，x64
        - 下载渠道：
          - <i class="fa-brands fa-windows"></i>&nbsp;[Microsoft Store](https://apps.microsoft.com/store/detail/watt-toolkit/9MTCFHS560NG?hl=zh-cn&gl=cn "大多数人的操作系统")
          - ![Arch](https://aur.archlinux.org/static/images/favicon.ico)[AUR](https://aur.archlinux.org/packages/watt-toolkit-bin "Well...btw, I don't use Arch? (Just a joke lol)")
          - <i class="fa-brands fa-windows"></i>&nbsp;<i class="fa-brands fa-apple"></i>&nbsp;<i class="fa-brands fa-linux"></i>&nbsp;[GitHub Releases](https://github.com/BeyondDimension/SteamTools/releases/latest "你必须先访问GitHub以获得访问GitHub的方法……嗯？")
      - 修改本地hosts（相对来说不推荐，似乎成功几率不高）
        1. 访问 [IP Address->GitHub]([www.ipaddress.com](https://ipaddress.com/website/github.com))
        2. 在 “What are GitHub DNS Records” 中，你能找到一个Type为A的记录，这个就是GitHub的服务器地址，将其加入hosts，可以绕过DNS污染，但是不能访问被墙的网站。

- 可选
  - 一个域名
    - 优点：自定义访问域名
    - 成本：非顶级域名约 50￥/年
  - 额外的CDN加速
    - 优点：更快的访问速度
    - 成本：QAQ我还没用过，如果有机会之后更新

## 具体步骤

### [Hugo](https://gohugo.io/ "世界上最快的静态网站编译框架！嗯，广告法管不到，应该没问题（x）")

原本想说“如果你 不需要在本地编译预览 或者 不想了解Hugo，那么这个步骤可以跳过”，但仔细想来，如果不了解Hugo，可能也不会选择主题，也不知道要怎么和框架相配合，故还是希望你能了解一下啦，很快的

#### 简介

Hugo是一个基于GO的静态网站生成框架，类似的有基于Node.js的Hexo，相比于Hexo，Hugo的优点在于极快的编译速度和较为方便的配置，不足之处在于较少的主题和插件支持。尽管如此，这并不意味着Hugo没有优秀的主题，但如果你认为Hexo的一些主题非常吸引你，并且预估自己不会有太多的博客文章的情况下，Hexo也是不错的选择。

如果想了解更多，这篇文章很不错[Hugo 与 Hexo 的异同](https://io-oi.me/tech/hugo-vs-hexo/)

#### 文档

- [官方文档](https://gohugo.io/documentation/)
- [非官方中文文档](https://www.gohugo.org/doc/)

#### 安装与基本命令

[Hugo 快速开始指引]("https://www.gohugo.org/doc/overview/quickstart/")

注意有一些主题需要Hugo extended version，安装时尽量选择extended version

#### 选择主题

[官方网站主题汇总](https://themes.gohugo.io/)

主题推荐（以下不做排名，请按照自己喜欢的风格和功能选择）

- [Stack](https://themes.gohugo.io/themes/hugo-theme-stack/) (本博客正在使用该主题)
- [PaperMod](https://themes.gohugo.io/themes/hugo-papermod/)
- [LoveIt](https://themes.gohugo.io/themes/loveit/)
- [NexT](https://themes.gohugo.io/themes/hugo-theme-next/)
- [MemE](https://themes.gohugo.io/themes/hugo-theme-meme/)

### [GitHub](https://github.com/ "世界上最大的代码托管平台")

如果你使用GitLab等类似的平台，只要Netlify支持，本质是通用的

#### 注册账号

（如果你已有账号，可以直接登录）

1. 找到右上角“Sign Up”
2. 按照提示输入邮箱等信息
3. 完成注册！

#### 使用主题

每一种主题的实际使用方式和配置教程还是根据作者给的文档来比较稳妥，在这里难免挂一漏万，不过基本来说，根据作者是否提供了template，可以分为两种上传到GitHub的方式

##### 在GitHub建立仓库

1. 作者提供template
比如Stack，作者提供了[template](https://github.com/CaiJimmy/hugo-theme-stack-starter)，直接访问，之后右上角绿色按钮“Use this template"便可以在Github中建立仓库，之后用git clone到本地便完成了这一步骤
2. 作者未提供template
在Github新建仓库，然后在本地打开终端，选择一个合适的文件夹，执行命令`hugo new site 你的网站文件夹名`，然后`cd 你的网站文件夹名`，执行`git init`，`git submodule add 链接 themes/主题名字`，其中链接是你选的主题的GitHub仓库链接，例如`https://github.com/theNewDynamic/gohugo-theme-ananke.git`
之后，将本地仓库和GitHub远程仓库建立链接，push上GitHub

##### 配置主题

根据作者提供的文档手册配置
(TODO: 以Stack为例提供配置指南)

### [Netlify](https://www.netlify.com/ "静态网站部署服务平台")

我的网络可以直接打开，如果打不开可能需要科学上网，请参考其他科学上网教程

#### 登录账号

1. 找到右上角“Sign in”
2. 这里可以直接使用GitHub账号登陆

#### 建立站点

1. 找到屏幕中间 `Add new site` 下拉菜单，选择 `Import an existing project`, 之后选择一个Git平台，如果你之前一直按照本教程使用GitHub，那么在这里就选择GitHub，之后选择授予Netlify访问你仓库的权限，之后就可以选择之前建立或者上传的仓库了。
2. 其余全部默认，只需要更改构建命令，找到 `Basic build settings` 中的 `Build command` 选项，输入 `hugo --gc --buildFuture`, 你可以参考Hugo的文档，根据自己的需要更改
3. 等待构建完成
4. 可以设置二级域名，即`netlify.app`之前的域名

至此，个人博客的功能性部分已经搭建完成，接下来要解决的是访问速度以及SSL证书的问题，如果不在乎这两点或者不想再折腾，到此为止其实也可以了

### （可选）域名

存在可获得的免费域名，比如[freenom](https://my.freenom.com/domains.php),或者[EU.rog](https://nic.eu.org/),如果只是短期玩一玩，是可以考虑的，不过，免费域名存在很多限制，所以如果打算长期建站，还是从域名提供商购买比较好

从域名提供商购买，考虑到国内支付的便利性，优先推荐[腾讯云](https://buy.cloud.tencent.com/domain?domain=&tlds=&from=dnspodEntrance)或者[阿里云](https://wanwang.aliyun.com/domain/)如果能够进行国际支付，也可以选择在Cloudflare购买域名

接下来的示例以阿里云为基础

(TODO：图片)

### （可选）[Cloudflare](https://www.cloudflare.com/ "CDN")

需要拥有域名才能使用CDN加速

#### 注册账号

1. 因为有中文版本，所以会很方便

#### 添加站点

(TODO：图片)

## 成品展示

这个网站 QwQ

## 参考

1. [个人博客搭建教程](https://blog.cuijiacai.com/blog-building/) 作者：[爱扑bug的熊](https://blog.cuijiacai.com/)
