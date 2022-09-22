---
title: 【优化】开启Cloudflare一些优化选项
description: 记录我开启的一些Cloudflare中的优化选项
slug: accelerate-open-speed
date: 2022-09-22 16:43:11+0000
image: cover.jpg
categories:
    - Blog-development
tags:
    - Website
    - Cloudflare
    - Acceleration
---

首先，前往控制面板-速度-优化，就能看到全部可以开启的优化选项

我最终开启的:

- Auto Minify
  - Javascript
  - CSS
  - HTML
- Brotli
- Early Hints

我没有开启 `Rocket Loader`这个选项, 我发现它会让我使用的主题在加载侧边栏的时候出现一些问题，你可以试试看它在你的主题上能不能使用

大概就这些，我们下次再见~ :)
