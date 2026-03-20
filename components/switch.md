# Switch 开关

开关用于在两种状态之间切换，如启用/禁用、开/关。全部基于 `<el-switch>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

开关与文字标签间距固定为 **8px**，不提供多种尺寸。

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
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">关闭（Off）</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">轨道背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-switch-off-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">圆形滑块</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-white</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-0</code>（白）</td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-0);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">开启（On）</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">轨道背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-switch-on-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">圆形滑块</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-white</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-0</code>（白）</td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-0);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">文字标签</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">标签与开关间距</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">覆盖 margin</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">8px</td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">—</td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">禁用</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">轨道透明度</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">opacity</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">50%（El Plus 内置）</td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">—</td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-disabled</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-500</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-500);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/switch-demo.html" />

## 代码示例

```html
<!-- 基础开关 -->
<el-switch v-model="val" />
<!-- 带文字标签 -->
<el-switch v-model="val" active-text="启用" inactive-text="禁用" />
<!-- inline-prompt 文字内嵌 -->
<el-switch v-model="val" active-text="开" inactive-text="关" inline-prompt />
<!-- 禁用 -->
<el-switch v-model="val" disabled />
<!-- 加载状态 -->
<el-switch v-model="val" :loading="isLoading" @change="handleChange" />
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>CSS 变量</th></tr>
  </thead>
  <tbody>
    <tr><td>轨道宽度</td><td><code>40px</code></td><td>El Plus 内置</td></tr>
    <tr><td>轨道高度</td><td><code>20px</code></td><td>El Plus 内置</td></tr>
    <tr><td>圆形滑块直径</td><td><code>16px</code></td><td>El Plus 内置</td></tr>
    <tr><td>标签与开关间距</td><td><code>8px</code></td><td><code>.el-switch__label margin</code> 覆盖</td></tr>
    <tr><td>关闭轨道色</td><td><code>#DADCE0</code></td><td><code>--el-color-text-400</code></td></tr>
    <tr><td>开启轨道色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>禁用透明度</td><td><code>50%</code></td><td>El Plus 内置 opacity</td></tr>
  </tbody>
</table>
