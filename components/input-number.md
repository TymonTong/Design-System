# InputNumber 计数器

计数器用于数值的步进输入，带有增减按钮。全部基于 `<el-input-number>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

当前只提供一种尺寸：高度 **36px**，圆角 **4px**，字号 **14px**。

---

## 颜色规范

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-100);">
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">状态</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">属性</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">CSS 变量</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">规范 Token</th>
        <th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">默认</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">整体边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">数值文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">± 图标色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">Hover / Focus</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">按钮悬浮</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">± 按钮背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-fill-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-100</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">禁用</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-fill-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-100</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">文字 / 图标色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-disabled</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-500</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-500);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/input-number-demo.html" />

## 代码示例

```html
<!-- 基础 -->
<el-input-number v-model="val" :min="0" :max="100" />
<!-- 步长 -->
<el-input-number v-model="val" :step="5" :min="0" :max="100" />
<!-- 精度 -->
<el-input-number v-model="val" :precision="2" :step="0.1" :min="0" :max="10" />
<!-- 禁用 -->
<el-input-number v-model="val" disabled />
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>CSS 变量</th></tr>
  </thead>
  <tbody>
    <tr><td>高度</td><td><code>36px</code></td><td>仅提供此一种尺寸</td></tr>
    <tr><td>圆角</td><td><code>4px</code></td><td><code>--el-border-radius-base</code></td></tr>
    <tr><td>字号</td><td><code>14px</code></td><td><code>--el-font-size-base</code></td></tr>
    <tr><td>默认边框色</td><td><code>#DADCE0</code></td><td><code>--el-color-text-400</code></td></tr>
    <tr><td>Focus 边框色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>按钮悬浮背景</td><td><code>#F5F6F7</code></td><td><code>--el-color-text-100</code></td></tr>
    <tr><td>禁用背景色</td><td><code>#F5F6F7</code></td><td><code>--el-color-text-100</code></td></tr>
    <tr><td>禁用文字色</td><td><code>#CCD0D6</code></td><td><code>--el-color-text-500</code></td></tr>
  </tbody>
</table>
