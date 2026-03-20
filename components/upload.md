# Upload 上传

上传组件用于将本地文件上传至服务器，支持点击上传和拖拽上传两种交互方式。全部基于 `<el-upload>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

---

## 颜色规范

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-100);">
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">元素</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">属性</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">CSS 变量</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">规范 Token</th>
        <th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">拖拽区域</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">虚线描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">拖入时描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">上传图标</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">图标色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-placeholder</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">提示文字</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">普通文字</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">点击上传链接色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">文件列表</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">文件名色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">上传成功颜色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success-400</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-success-400);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/upload-demo.html" />

## 图标替换规则

::: tip 如何替换拖拽区域的图标
**第一步：** 将你的图标文件放入项目的 `public/upload-icon/` 目录下

**第二步：** 将文件命名为 `icon.png`（支持 .png / .jpg / .svg）

**第三步：** 刷新页面，图标自动生效，无需修改任何代码

**注意：** 若 `public/upload-icon/` 目录下没有图片文件，组件会自动回退显示 Element Plus 默认的云朵上传图标（`UploadFilled`）。
:::

<table class="spec-table">
  <thead>
    <tr><th>文件路径</th><th>访问地址</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td><code>public/upload-icon/icon.png</code></td><td><code>/upload-icon/icon.png</code></td><td>优先使用，推荐格式</td></tr>
    <tr><td><code>public/upload-icon/icon.jpg</code></td><td><code>/upload-icon/icon.jpg</code></td><td>备选格式</td></tr>
    <tr><td><code>public/upload-icon/icon.svg</code></td><td><code>/upload-icon/icon.svg</code></td><td>矢量格式，最佳清晰度</td></tr>
    <tr><td>无文件</td><td>—</td><td>自动回退为 UploadFilled 默认图标</td></tr>
  </tbody>
</table>

**图标规格建议：** 64×64px 或更大（显示时缩放为 64px），PNG 格式（支持透明背景），颜色建议使用 `--el-color-text-600`（#B7BCC7）与默认图标一致。

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>CSS 变量</th></tr>
  </thead>
  <tbody>
    <tr><td>拖拽区圆角</td><td><code>4px</code></td><td><code>--el-border-radius-base</code></td></tr>
    <tr><td>虚线描边色</td><td><code>#DADCE0</code></td><td><code>--el-color-text-400</code></td></tr>
    <tr><td>拖入高亮描边色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>默认图标色</td><td><code>#B7BCC7</code></td><td><code>--el-color-text-600</code></td></tr>
    <tr><td>自定义图标尺寸</td><td><code>64×64px</code></td><td>object-fit: contain 自适应</td></tr>
    <tr><td>点击上传文字色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>成功状态色</td><td><code>#00BFA2</code></td><td><code>--el-color-success-400</code></td></tr>
  </tbody>
</table>
