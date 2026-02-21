---
layout: ../../layouts/PortfolioProjectLayout.astro
titleZh: Death Stranding 风格鼠标指针
titleEn: Death Stranding Style Cursor
descZh: 受《死亡搁浅》视觉风格启发的 Windows 自定义光标主题，15 种光标状态，Ultra-HD 256×256 分辨率，包含 Python 展示图生成器。
descEn: A Windows custom cursor theme inspired by Death Stranding's visual style. 15 cursor states, Ultra-HD 256×256 resolution, with a Python showcase generator.
tags: [Python, Windows, Cursor Theme, Pillow]
preview: /portfolio/death-stranding-cursor/showcase.jpg
---

![Death Stranding 光标展示](/portfolio/death-stranding-cursor/showcase.jpg)

<p style="margin-bottom: 1.5rem;">
  <a href="/portfolio/death-stranding-cursor/Death-Stranding-Cursor.zip" download="Death-Stranding-Cursor.zip" class="project-download-btn">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    <span class="lang-zh">下载光标包 (ZIP)</span>
    <span class="lang-en">Download Cursor Pack (ZIP)</span>
  </a>
</p>

受小岛秀夫《死亡搁浅》游戏 UI 风格启发设计的 Windows 光标主题。深色背景、金色点缀，契合游戏的「桥梁」与「货运」美学。

## 特性

- **15 种光标状态**：包括 Pointer、Help、Busy、Work、Cross、Text、Handwriting、Unavailable、Vert、Horz、Dgn1、Dgn2、Move、Alternate、Link
- **Ultra-HD 256×256**：高清矢量风格光标
- **一键安装**：提供 `install.inf` 与 `uninstall.bat`，方便 Windows 用户快速安装与卸载
- **展示图生成器**：Python 脚本 `generate_showcase.py` 使用 Pillow 自动生成 Death Stranding 风格的精美展示图（深色背景、金色边框、胶片颗粒质感）

## 技术实现

- **clickgen**（ful1e5/clickgen）：用于生成标准 Windows .cur / .ani 光标文件
- **Pillow**：解析光标图像并渲染卡片式展示布局
- **Death Stranding 配色**：深色背景 (BG_DEEP)、金色主色 (GOLD)、轻微高斯模糊与噪点营造氛围

## 文件结构

```
Death Stranding Style Cursor/
├── Pointer.cur, Help.cur, ... (15 个光标文件)
├── install.inf          # Windows 光标安装配置
├── uninstall.bat        # 卸载脚本
└── generate_showcase.py # 展示图生成器
```
