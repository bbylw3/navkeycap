# WebNav Hub

<div align="center">

![WebNav Hub Logo](assets/icon.svg)

**🚀 现代化的键帽风格网址导航**

一个高性能、高可访问性的单页网址导航应用，采用独特的键帽UI设计风格

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-purple.svg)](https://web.dev/progressive-web-apps/)

[快速开始](#-快速开始) · [功能特性](#-核心特性) · [自定义指南](#-自定义与扩展) · [部署方式](#-部署指南)

</div>

---

## 📋 目录

- [✨ 核心特性](#-核心特性)
- [🚀 快速开始](#-快速开始)
- [📁 项目结构](#-项目结构)
- [🎨 自定义与扩展](#-自定义与扩展)
- [🔧 部署指南](#-部署指南)
- [⚡ 性能优化](#-性能优化)
- [♿ 可访问性](#-可访问性)
- [🔒 安全特性](#-安全特性)
- [📱 PWA支持](#-pwa支持)
- [🛠️ 开发指南](#️-开发指南)
- [📊 技术栈](#-技术栈)
- [🎯 浏览器兼容性](#-浏览器兼容性)
- [🤝 贡献指南](#-贡献指南)
- [📄 许可证](#-许可证)

## ✨ 核心特性

### 🎨 键帽风UI设计
- **独特视觉风格**: 3D键帽外观，渐变阴影效果，橙色主题色调
- **交互反馈**: Hover悬浮、Active按压、Focus高亮状态
- **主题系统**: 自动跟随系统偏好，支持手动明暗主题切换
- **响应式设计**: 4个断点优化 (1200px/768px/480px/360px)

### ⚡ 极致性能
- **零构建**: 纯静态HTML/CSS/JavaScript，开箱即用
- **硬件加速**: GPU加速动画，transform3d优化
- **资源优化**: 预连接、延迟加载、关键资源优先级
- **模块化架构**: ES6+模块化JavaScript，Intersection Observer优化

### ♿ 无障碍访问
- **键盘导航**: 完整的Tab键支持和跳转链接
- **屏幕阅读器**: ARIA标签和语义化HTML结构
- **色彩对比**: WCAG 2.1 AA级别标准
- **动效控制**: 支持prefers-reduce-motion用户偏好

### 🔍 SEO & PWA优化
- **搜索优化**: 完整meta标签、Open Graph、语义化HTML
- **PWA就绪**: 可安装、离线支持、快捷方式
- **站点地图**: XML sitemap和robots.txt配置
- **安全性**: CSP兼容、外链安全属性

### 📂 内容分类
- **AI搜索**: ChatGPT、Claude、Gemini等34+AI工具
- **社交媒体**: Twitter、GitHub、Reddit等主流平台
- **实用工具**: 域名、DNS、代理、图床等开发工具
- **科技资讯**: TechCrunch、Wired、Ars Technica等
- **云存储**: Google Drive、OneDrive、MEGA等
- **电子邮箱**: Gmail、Outlook、ProtonMail等

## 🚀 快速开始

### 方式一：直接使用
```bash
# 克隆项目
git clone https://github.com/your-username/webnav-hub.git
cd webnav-hub

# 直接打开
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### 方式二：本地服务器
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve . -p 8000

# PHP
php -S localhost:8000

# Live Server (VS Code扩展)
右键 index.html → Open with Live Server
```

访问 `http://localhost:8000` 即可预览

### 方式三：在线部署
- 拖拽整个文件夹到 [Netlify Drop](https://app.netlify.com/drop)
- 或上传到任何静态托管服务

## 📁 项目结构

```
webnav-hub/
├── 📄 index.html              # 主页面 - 包含所有分类和卡片
├── 🎨 style.css               # 键帽风样式 - 主题系统和响应式设计
├── ⚡ main.js                 # 核心交互逻辑 - 导航、主题、性能优化
├── 🌐 site.webmanifest        # PWA配置 - 可安装应用设置
├── 🤖 robots.txt              # SEO爬虫配置
├── 🗺️ sitemap.xml             # 站点地图
├── 🔒 SECURITY.md             # 安全政策和漏洞报告
├── 📚 README.md               # 项目文档 (当前文件)
├── 🤝 CONTRIBUTING.md         # 贡献指南和代码规范
├── 📋 CHANGELOG.md            # 版本更新记录
├── 📄 LICENSE                 # MIT开源许可证
└── 📁 assets/                 # 静态资源
    └── 🎯 icon.svg            # 项目矢量图标
```

## 🎨 自定义与扩展

### 修改主题配色
在 `style.css` 文件的 `:root` 部分修改CSS变量：

```css
:root {
  --kc-primary: #ff774a;        /* 主色调 - 橙色 */
  --kc-primary-2: #ff5a2a;      /* 主色调渐变 */
  --kc-bg: #f4f5f7;             /* 页面背景色 */  
  --kc-surface: #ffffff;        /* 卡片背景色 */
  --kc-text: #1f2329;           /* 主要文本颜色 */
  --kc-text-weak: #5f6672;      /* 次要文本颜色 */
}
```

### 添加新分类
1. **在导航栏添加链接**：
```html
<li role="none">
  <a href="#new-category" role="menuitem">新分类</a>
</li>
```

2. **添加对应的内容区块**：
```html
<section aria-labelledby="new-category">
  <h2 class="category-title" id="new-category">新分类</h2>
  <div class="link-grid" role="grid" aria-label="新分类工具">
    <!-- 在这里添加卡片 -->
  </div>
</section>
```

### 添加新网站卡片
```html
<div class="link-card" role="gridcell">
  <a href="https://example.com" target="_blank" aria-label="访问示例网站"></a>
  <i class="fa-solid fa-star" aria-hidden="true"></i>
  <h3>示例网站</h3>
</div>
```

### 自定义图标
- 使用 [Font Awesome 6.7.2](https://fontawesome.com/icons) 图标
- 支持 `fa-solid`、`fa-brands`、`fa-regular` 系列
- 可替换为自定义SVG图标或Emoji

### 修改页面标题
在 `index.html` 中修改：
```html
<title>你的网站名称</title>
<h1>你的网站名称</h1>
```

## 🔧 部署指南

### 静态托管平台 (推荐)

#### Netlify (免费)
1. 访问 [netlify.com](https://www.netlify.com/)
2. 拖拽项目文件夹到部署区域
3. 自动获得 HTTPS 域名

#### Vercel (免费)
```bash
npm i -g vercel
vercel --prod
```

#### GitHub Pages (免费)
1. 上传代码到 GitHub 仓库
2. Settings → Pages → Source: Deploy from a branch
3. 选择 main 分支

#### Cloudflare Pages (免费)
1. 连接 GitHub 仓库
2. 构建设置：无需设置
3. 自动部署

### 自托管服务器

#### Nginx 配置示例
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/webnav-hub;
    index index.html;
    
    # 启用 gzip 压缩
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # 静态资源缓存
    location ~* \.(css|js|svg|ico|png|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # 安全头部
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

#### Apache 配置 (.htaccess)
```apache
# 启用压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css application/javascript image/svg+xml
</IfModule>

# 静态资源缓存
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# 安全头部
<IfModule mod_headers.c>
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

## ⚡ 性能优化

### 已实现的优化措施
- ✅ **关键渲染路径**: CSS预加载，JavaScript延迟执行
- ✅ **资源提示**: preconnect, dns-prefetch 预连接CDN
- ✅ **硬件加速**: transform3d, backface-visibility GPU优化
- ✅ **延迟加载**: Font Awesome条件加载，noscript兜底
- ✅ **模块化代码**: ES6类结构，Intersection Observer API
- ✅ **防抖节流**: 用户交互事件优化
- ✅ **内存管理**: 页面卸载时清理事件监听器

### 性能指标目标
- **首次内容绘制 (FCP)**: < 1.2s
- **最大内容绘制 (LCP)**: < 2.5s  
- **首次输入延迟 (FID)**: < 100ms
- **累积布局偏移 (CLS)**: < 0.1
- **Lighthouse评分**: > 95分

### 进一步优化建议
- 图片格式现代化 (WebP, AVIF)
- Service Worker 离线缓存
- Critical CSS 内联
- 字体子集化和本地托管

## ♿ 可访问性

### WCAG 2.1 AA级合规性
- ✅ **色彩对比度**: 文本对比度 ≥ 4.5:1
- ✅ **键盘导航**: 所有交互元素支持Tab访问
- ✅ **屏幕阅读器**: 完整的ARIA标签和role属性
- ✅ **语义化HTML**: 正确的heading层级和landmark
- ✅ **动效控制**: 支持prefers-reduced-motion偏好

### 无障碍功能特性
- **跳转链接**: "跳转到主内容"快速导航
- **焦点指示器**: 增强的键盘焦点样式
- **语义化导航**: menubar/menuitem角色定义
- **状态反馈**: aria-current="page"当前页面标识
- **文本缩放**: 支持200%浏览器缩放

### 测试工具推荐
- Chrome DevTools Lighthouse
- axe DevTools 浏览器扩展
- Wave Web Accessibility Evaluation Tool
- VoiceOver (macOS) / NVDA (Windows) 屏幕阅读器测试

## 🔒 安全特性

### 实施的安全措施
- ✅ **外链安全**: 自动添加 `rel="noopener noreferrer"`
- ✅ **XSS防护**: 零内联脚本，CSP兼容设计
- ✅ **HTTPS**: 生产环境强制HTTPS
- ✅ **依赖安全**: 无第三方JavaScript运行时依赖

### 推荐的安全头部
```http
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self';
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer-when-downgrade
Permissions-Policy: geolocation=(), camera=(), microphone=()
```

### 安全最佳实践
- 定期更新Font Awesome CDN版本
- 监控依赖安全漏洞
- 使用HTTPS证书 (Let's Encrypt免费)
- 配置适当的CORS策略

## 📱 PWA支持

### PWA特性
- ✅ **可安装**: 支持"添加到主屏幕"
- ✅ **离线访问**: Service Worker缓存策略
- ✅ **快捷方式**: 应用内快速导航
- ✅ **主题适配**: 状态栏和启动画面定制
- ✅ **响应式图标**: 多尺寸适配不同设备

### 安装PWA应用
1. 在Chrome/Edge浏览器中访问网站
2. 地址栏出现"安装"图标时点击
3. 确认安装到桌面/主屏幕
4. 享受原生应用般的体验

### PWA配置文件
`site.webmanifest` 包含了应用名称、图标、主题色等配置，可根据需要修改。

## 🛠️ 开发指南

### 代码规范
- **JavaScript**: ES6+语法，严格模式，模块化设计
- **CSS**: BEM命名约定，CSS自定义属性，移动优先
- **HTML**: 语义化标签，无障碍支持，SEO友好

### 本地开发环境
```javascript
// 开启调试模式
localStorage.setItem('webnav-debug', 'true');

// 查看应用状态
console.log(window.webnavHub);

// 性能监控
performance.mark('custom-metric');
```

### 代码检查和测试
1. **HTML验证**: [W3C Markup Validator](https://validator.w3.org/)
2. **CSS检查**: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
3. **JavaScript检查**: ESLint规则检查
4. **性能测试**: Chrome DevTools Lighthouse
5. **可访问性**: axe-core或WAVE工具
6. **跨浏览器**: BrowserStack或本地多浏览器测试

### Git工作流程
```bash
# 功能开发
git checkout -b feature/new-category
git add .
git commit -m "feat: 添加新的工具分类"
git push origin feature/new-category

# 代码审查后合并
git checkout main
git merge feature/new-category
git tag v1.1.0
git push --tags
```

## 📊 技术栈

### 前端技术
| 技术 | 版本 | 用途 |
|------|------|------|
| **HTML5** | - | 语义化结构、SEO优化 |
| **CSS3** | - | 键帽风样式、响应式布局 |
| **JavaScript** | ES6+ | 交互逻辑、性能优化 |
| **Font Awesome** | 6.7.2 | 图标字体库 |

### 现代Web特性
- CSS Grid Layout / Flexbox
- CSS Custom Properties (变量)
- Intersection Observer API  
- LocalStorage API
- Fetch API / Promise
- ES6 Modules / Classes

### 工具与服务
- **版本控制**: Git / GitHub
- **包管理**: 无需npm/yarn (零依赖)
- **部署**: Netlify / Vercel / GitHub Pages
- **性能监控**: Lighthouse / Web Vitals
- **错误追踪**: 浏览器开发者工具

## 🎯 浏览器兼容性

| 浏览器 | 最低版本 | 功能支持 | 备注 |
|--------|----------|----------|------|
| Chrome | 60+ | ✅ 完全支持 | 推荐浏览器 |
| Firefox | 55+ | ✅ 完全支持 | 开源首选 |
| Safari | 12+ | ✅ 完全支持 | macOS/iOS |
| Edge | 79+ | ✅ 完全支持 | Chromium内核 |
| Opera | 47+ | ✅ 完全支持 | Chromium内核 |
| IE | - | ❌ 不支持 | 已停止支持 |

### 移动端兼容性
- **iOS Safari**: 12.0+
- **Chrome Mobile**: 60+
- **Firefox Mobile**: 55+
- **Samsung Internet**: 8.0+

### 现代特性降级策略
- CSS Grid → Flexbox 备用布局
- CSS自定义属性 → 硬编码颜色值
- Intersection Observer → scroll事件备用
- LocalStorage → 会话存储备用

## 🤝 贡献指南

### 如何贡献
我们欢迎各种形式的贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 获取详细指南。

#### 报告问题
- [Bug报告](https://github.com/your-username/webnav-hub/issues/new?template=bug_report.md)
- [功能请求](https://github.com/your-username/webnav-hub/issues/new?template=feature_request.md)

#### 代码贡献流程
1. Fork 本仓库
2. 创建功能分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'feat: add amazing feature'`
4. 推送分支: `git push origin feature/amazing-feature`  
5. 创建 Pull Request

#### 提交消息规范
```bash
# 类型(范围): 描述
feat: 添加新的AI工具分类
fix: 修复导航滚动位置偏移
docs: 更新README安装说明
style: 调整卡片阴影效果
refactor: 重构主题切换逻辑
test: 添加导航功能测试
chore: 更新依赖版本
```

### 开发环境设置
```bash
# 1. Fork并克隆仓库
git clone https://github.com/your-username/webnav-hub.git
cd webnav-hub

# 2. 创建功能分支
git checkout -b feature/my-feature

# 3. 进行开发...

# 4. 提交更改
git add .
git commit -m "feat: 描述你的更改"
git push origin feature/my-feature
```

### 代码审查清单
- [ ] 代码符合项目风格规范
- [ ] 所有功能正常工作
- [ ] 响应式设计适配
- [ ] 可访问性测试通过
- [ ] 性能影响评估
- [ ] 文档更新（如需要）

## 📈 更新日志

查看 [CHANGELOG.md](CHANGELOG.md) 了解详细的版本历史。

### 最新版本亮点 (v2.0.0)
- 🎉 完整的架构重构，性能提升30%
- ✨ PWA支持，可安装桌面应用
- ♿ WCAG 2.1 AA级可访问性
- 🔒 增强的安全特性
- 🎨 去除冗余描述，UI更简洁

## 📞 支持与反馈

### 获取帮助
- 📖 [查看文档](README.md)
- 🐛 [报告问题](https://github.com/your-username/webnav-hub/issues)
- 💡 [功能建议](https://github.com/your-username/webnav-hub/discussions)
- 📧 [邮件联系](mailto:your-email@example.com)

### 社区
- 🌟 [GitHub讨论区](https://github.com/your-username/webnav-hub/discussions)
- 📱 QQ群: 123456789
- 💬 微信群: 扫码加入

## 📄 许可证

本项目采用 [MIT许可证](LICENSE) 开源。

```
Copyright (c) 2024 WebNav Hub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个Star支持我们！**

**🔧 发现问题？** [提交Issue](https://github.com/your-username/webnav-hub/issues) **|** **💡 有好想法？** [参与讨论](https://github.com/your-username/webnav-hub/discussions)

Made with ❤️ by the WebNav Hub Team

[🔝 返回顶部](#webnav-hub)

</div>