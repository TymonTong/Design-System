# 上传组件自定义图标说明

将你的自定义上传图标放置在此目录下，文件名必须为以下之一：

- `icon.png`
- `icon.jpg`
- `icon.svg`

组件会按以上顺序优先尝试加载 `icon.png`，如果不存在则自动回退显示 Element Plus 默认的云朵上传图标。

## 图标规格建议

- 尺寸：64×64px 或 128×128px（会自动缩放为 64px 显示）
- 格式：PNG（推荐，支持透明背景）
- 颜色：建议使用设计规范主色 #4628FF 或灰色 #8E95A3

## 路径说明

此目录中的文件在构建后会发布到网站根路径 `/upload-icon/` 下：

- `public/upload-icon/icon.png` → 访问地址 `/upload-icon/icon.png`

## 还原默认图标

删除此目录下的所有图片文件，组件会自动回退为 Element Plus 默认图标。
