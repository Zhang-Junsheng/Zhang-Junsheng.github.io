# 中文个人网站

这是一个可以直接部署到 GitHub Pages 的中文个人网站模板，使用纯 HTML、CSS 和 JavaScript 构建，不依赖 React、Vue、Node.js、数据库、后端服务、付费服务或 API Key。

## 文件结构

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## 如何修改个人信息

打开 `index.html`，修改以下位置：

- 网站标题：`<title>张俊生 | 个人网站</title>`
- 首屏标题：`你好，我是张俊生`
- 首屏简介：`我喜欢把复杂想法整理成清晰、可靠、易用的作品。`
- 关于我内容：`id="about"` 这一段
- GitHub 地址：`https://github.com/Zhang-Junsheng`
- 邮箱地址：`your-email@example.com`
- 页脚姓名：`张俊生`

如果修改了姓名，也建议同步修改 `meta description` 和导航栏里的品牌文字。

## 如何更换项目内容

在 `index.html` 中找到 `id="projects"` 区域，每一个项目都在一个 `<article class="project-card">` 里。

你可以修改：

- `项目标题`：例如 `<h3>个人作品集网站</h3>`
- `项目描述`：项目卡片中的 `<p>`
- `项目链接`：把 `href="#contact"` 改成真实项目地址，例如 `href="https://github.com/你的用户名/项目名"`

如果需要更多项目，复制一个完整的 `<article class="project-card">...</article>`，然后修改编号、标题、描述和链接即可。

## 如何添加图片

建议在根目录创建一个 `assets` 文件夹：

```text
assets/
└── avatar.jpg
```

然后在 `index.html` 中需要显示图片的位置添加：

```html
<img src="./assets/avatar.jpg" alt="你的头像">
```

注意：

- 图片路径使用 `./assets/文件名`
- 文件名尽量使用英文、小写和短横线，例如 `project-demo.jpg`
- 给图片填写有意义的 `alt` 文本
- 上传前压缩图片，保持页面加载速度快

## 如何通过 GitHub Pages 发布

1. 将这些文件提交到 GitHub 仓库。
2. 打开仓库页面，进入 `Settings`。
3. 在左侧找到 `Pages`。
4. 在 `Build and deployment` 里选择 `Deploy from a branch`。
5. `Branch` 选择 `main`，目录选择 `/root`。
6. 点击 `Save`。
7. 等待 GitHub Pages 构建完成后，页面会显示网站访问地址。

如果仓库名是 `你的用户名.github.io`，发布地址通常是：

```text
https://你的用户名.github.io/
```

## 本地预览

这个网站是纯静态页面，可以直接用浏览器打开 `index.html` 预览。

也可以在仓库根目录运行一个本地静态服务：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 部署前检查

- `index.html` 位于仓库根目录
- `style.css` 和 `script.js` 使用相对路径引用
- 导航链接指向页面内的 `#home`、`#about`、`#projects`、`#contact`
- 页面在手机端不会出现横向滚动条
- 没有 API Key、Token、密码或其他秘密信息
