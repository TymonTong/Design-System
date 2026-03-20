# DateTimePicker 时间选择器

时间选择类组件用于让用户选择日期、时间或日期时间。全部基于 `<el-time-picker>` / `<el-date-picker>` 原生组件，仅通过 CSS 变量覆盖视觉样式（高度、颜色、圆角）。

**尺寸规范**：仅提供一种尺寸，输入框高度与其他表单组件统一为 **36px**（`--el-component-size: 36px`）。

---

## 颜色规范

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-200);">
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
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-bg-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-0</code>（白色）</td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-0);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-text-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-1000</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-1000);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">聚焦</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-focus-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">禁用</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-disabled-bg-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-100</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-100);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-disabled-text-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-500</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-500);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">面板选中日期</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/date-time-picker-demo.html" />

## 代码示例

```html
<!-- 时间选择器 -->
<el-time-picker v-model="time" placeholder="请选择时间" style="width:200px;" />

<!-- 日期选择器 -->
<el-date-picker v-model="date" type="date" placeholder="选择日期" value-format="YYYY-MM-DD" />
<el-date-picker v-model="month" type="month" placeholder="选择月份" value-format="YYYY-MM" />

<!-- 日期时间 -->
<el-date-picker v-model="datetime" type="datetime" placeholder="选择日期时间" value-format="YYYY-MM-DD HH:mm:ss" style="width:240px;" />

<!-- 日期范围 -->
<el-date-picker v-model="range" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD" style="width:320px;" />
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>备注</th></tr>
  </thead>
  <tbody>
    <tr><td>组件高度</td><td><code>36px</code></td><td><code>--el-component-size: 36px</code>，与其他表单组件统一</td></tr>
    <tr><td>圆角</td><td><code>4px</code></td><td><code>--el-border-radius-base: 4px</code></td></tr>
    <tr><td>默认边框色</td><td><code>#DADCE0</code></td><td><code>--el-color-text-400</code></td></tr>
    <tr><td>聚焦边框色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>面板选中色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code>，与主色保持一致</td></tr>
    <tr><td>禁用背景色</td><td><code>#F5F6F7</code></td><td><code>--el-color-text-100</code></td></tr>
    <tr><td>日期格式</td><td><code>YYYY-MM-DD</code></td><td>统一使用 value-format 约束输出格式</td></tr>
    <tr><td>时间格式</td><td><code>HH:mm:ss</code></td><td>24小时制</td></tr>
    <tr><td>可用组件</td><td>date / month / year / datetime / daterange</td><td>不提供 week 类型，按需使用</td></tr>
  </tbody>
</table>
