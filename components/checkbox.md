# Checkbox 多选框

多选框用于在一组选项中选择多个。全部基于 `<el-checkbox>` / `<el-checkbox-group>` / `<el-checkbox-button>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

多选框按钮与文字间距固定为 **8px**，组内选项间距固定为 **24px**，不提供多种尺寸。

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
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">默认（未选中）</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">方框描边</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">选中 / 半选</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">方框填充色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">勾选图标色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-white</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-0</code>（白）</td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-0);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">禁用</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">方框描边 / 背景</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-border-color-lighter</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-300</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-300);margin:auto;"></div></td>
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

<Demo src="/demos/checkbox-demo.html" />

## 代码示例

```html
<!-- 多选框组 -->
<el-checkbox-group v-model="vals">
  <el-checkbox label="A">选项 A</el-checkbox>
  <el-checkbox label="B">选项 B</el-checkbox>
  <el-checkbox label="D" disabled>选项 D（禁用）</el-checkbox>
</el-checkbox-group>
<!-- 全选 + 半选 -->
<el-checkbox v-model="checkAll" :indeterminate="isIndeterminate">全选</el-checkbox>
<!-- 按钮样式 -->
<el-checkbox-group v-model="vals">
  <el-checkbox-button label="A">选项 A</el-checkbox-button>
  <el-checkbox-button label="B">选项 B</el-checkbox-button>
</el-checkbox-group>
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>CSS 变量</th></tr>
  </thead>
  <tbody>
    <tr><td>方框尺寸</td><td><code>14×14px</code></td><td>El Plus 内置</td></tr>
    <tr><td>按钮与文字间距</td><td><code>8px</code></td><td><code>.el-checkbox__label { padding-left: 8px }</code></td></tr>
    <tr><td>组内选项间距</td><td><code>24px</code></td><td><code>.el-checkbox { margin-right: 24px }</code></td></tr>
    <tr><td>未选中描边色</td><td><code>#DADCE0</code></td><td><code>--el-color-text-400</code></td></tr>
    <tr><td>选中填充色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>选中文字色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>半选填充色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>禁用文字色</td><td><code>#CCD0D6</code></td><td><code>--el-color-text-500</code></td></tr>
  </tbody>
</table>
