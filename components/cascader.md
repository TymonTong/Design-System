# Cascader 级联选择器

级联选择器用于具有层级关系的数据选择，如省市区、产品分类等。全部基于 `<el-cascader>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

当前只提供一种尺寸：高度 **36px**，圆角 **4px**，字号 **14px**。

---

## 颜色规范

级联选择器的颜色体系与 Select 选择器保持一致，共用同一套 CSS 变量。

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
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-fill-color-blank</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-0</code>（白）</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-0);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">占位符 / 箭头色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-placeholder</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">Hover / Focus</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">下拉面板选项</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">悬浮 / 展开背景</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-cascader-node-background</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">选中文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">禁用</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-fill-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-placeholder</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-600);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/cascader-demo.html" />

## 代码示例

```html
<!-- 基础 -->
<el-cascader v-model="val" :options="options" placeholder="请选择省市区" />
<!-- 可搜索 -->
<el-cascader v-model="val" :options="options" filterable placeholder="输入关键词搜索" />
<!-- 多选 -->
<el-cascader v-model="val" :options="options" :props="{ multiple: true }" collapse-tags collapse-tags-tooltip clearable />
<!-- 仅显示最后一级 -->
<el-cascader v-model="val" :options="options" :show-all-levels="false" />
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
    <tr><td>常规边框色</td><td><code>#DADCE0</code></td><td><code>--el-color-text-400</code></td></tr>
    <tr><td>Hover / Focus 边框色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>选项悬浮 / 展开背景</td><td><code>#EDF0FC</code></td><td><code>--el-color-primary-100</code></td></tr>
    <tr><td>选中文字色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>禁用背景色</td><td><code>#F5F6F7</code></td><td><code>--el-color-text-100</code></td></tr>
    <tr><td>下拉面板阴影</td><td><code>0 4px 16px rgba(0,0,0,0.08)</code></td><td><code>--el-box-shadow</code></td></tr>
    <tr><td>面板列分隔线</td><td><code>#EBEBEB</code></td><td><code>--el-border-color-light</code></td></tr>
  </tbody>
</table>
