# 中文个人网站

这是一个可以直接部署到 GitHub Pages 的中文个人网站，使用纯 HTML、CSS 和 JavaScript 构建，不依赖 React、Vue、Node.js、数据库、后端服务、付费服务或 API Key。

## 文件结构

```text
.
├── index.html
├── style.css
├── script.js
├── assets/
│   └── profile.jpg
├── README.md
└── .gitignore
```

## 如何修改个人信息

打开 `index.html`，修改以下位置：

- 网站标题：`<title>Junsheng Zhang（张俊升）| 个人网站</title>`
- 首屏标题：`你好，我是 Junsheng Zhang（张俊升）`
- 首屏简介：`我目前是 NYU Courant 的 Courant Instructor...`
- 首页个人介绍：`data-i18n="homeAboutText"` 对应的中英文文案
- GitHub 地址：`https://github.com/Zhang-Junsheng`
- 邮箱地址：`jz7561@nyu.edu`
- 办公室：`Warren Weaver Hall 925`
- 页脚姓名：`Junsheng Zhang`

如果修改了姓名，也建议同步修改 `meta description` 和导航栏里的品牌文字。

## 如何维护 Research、Teaching 和 Seminars

在 `index.html` 中找到对应区域：

- Research：`id="research"`
- Teaching：`id="teaching"`
- Seminars and notes：`id="seminars"`

Research 中每篇文章都在一个 `<li class="publication-item">` 里。你可以修改：

- 文章标题：`<a>` 中的文字
- 文章链接：`<a href="...">`
- 作者：第一个 `<p>`
- 期刊或状态：第二个 `<p>`

Teaching 和 Seminars 中的内容在 `<article class="info-item">` 里，直接修改标题、描述和链接即可。

## 如何修改中英文内容

页面右上角有语言切换按钮，使用 `script.js` 中的 `translations` 字典管理中英文文案。

- 中文文案在 `translations.zh`
- 英文文案在 `translations.en`
- `index.html` 里的 `data-i18n`、`data-i18n-aria-label`、`data-i18n-alt` 和 `data-i18n-content` 对应字典里的键名

如果新增一段需要翻译的文字，给 HTML 元素添加一个新的 `data-i18n="键名"`，然后在 `script.js` 的 `zh` 和 `en` 中都补上对应文案。

## 如何添加图片

当前头像图片位于：

```text
assets/
└── profile.jpg
```

如果要更换头像，可以把新图片放到 `assets` 文件夹，然后在 `index.html` 中修改图片路径：

```html
<img src="./assets/profile.jpg" alt="Junsheng Zhang 的照片">
```

注意：

- 图片路径使用 `./assets/文件名`
- 文件名尽量使用英文、小写和短横线，例如 `research-photo.jpg`
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
- 导航链接指向页面内的 `#home`、`#research`、`#teaching`、`#seminars`、`#contact`
- 页面在手机端不会出现横向滚动条
- 没有 API Key、Token、密码或其他秘密信息
