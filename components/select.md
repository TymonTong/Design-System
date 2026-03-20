# Select 选择器

下拉选择器，用于在多个选项中进行单选或多选操作。全部基于 `<el-select>` + `<el-option>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

当前只提供一种尺寸：高度 **36px**，圆角 **4px**，字号 **14px**。

---

## 颜色规范

以下是选择器各状态所引用的设计 Token，修改对应 CSS 变量即可全局生效。

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
      <!-- 默认 -->
      <tr>
        <td rowspan="4" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">默认</td>
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
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">已选文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">占位符 / 箭头色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-placeholder</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-600);margin:auto;"></div></td>
      </tr>
      <!-- Hover / Focus -->
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">Hover / Focus</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <!-- 禁用 -->
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
      <!-- 下拉选项 -->
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">下拉选项</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">悬浮背景</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-light-9</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-200</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-200);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">选中文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">禁用选项文字</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-disabled</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-500</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-500);margin:auto;"></div></td>
      </tr>
      <!-- 多选 Tag -->
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">多选 Tag</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">Tag 背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-light-9</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-200</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-200);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">Tag 描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-light-7</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-300</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">Tag 文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/select-demo.html" />

## 多选 · 折叠模式说明

::: tip 实现原理
使用 `ResizeObserver` 监听容器宽度变化，根据 Tag 估算宽度动态计算 `max-collapse-tags`，实现"宽度允许则多显示，宽度不足则折叠"的效果。
:::

## 代码示例

```html
<!-- 基础 -->
<el-select v-model="val" placeholder="请选择">
  <el-option label="选项一" value="1" />
  <el-option label="选项二（禁用）" value="2" disabled />
</el-select>
<!-- 可搜索 -->
<el-select v-model="val" filterable placeholder="输入关键词筛选">...</el-select>
<!-- 可清空 -->
<el-select v-model="val" clearable placeholder="全部">...</el-select>
<!-- 多选展开 -->
<el-select v-model="val" multiple placeholder="请选择">...</el-select>
<!-- 多选折叠 -->
<el-select v-model="val" multiple collapse-tags collapse-tags-tooltip :max-collapse-tags="3">...</el-select>
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
    <tr><td>禁用背景色</td><td><code>#F5F6F7</code></td><td><code>--el-color-text-100</code></td></tr>
    <tr><td>多选 Tag 背景</td><td><code>#EDF0FC</code></td><td><code>--el-color-primary-200</code></td></tr>
    <tr><td>多选 Tag 描边</td><td><code>#C2C4FF</code></td><td><code>--el-color-primary-300</code></td></tr>
    <tr><td>多选 Tag 文字</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
  </tbody>
</table>

---

## 通用下拉面板规范

> **此规范适用于所有下拉面板场景**，包括 Select 选择器、Cascader 级联、DateTimePicker 时间选择、Dropdown 操作菜单、Avatar 用户下拉等。所有下拉面板均由 `el-plus-theme.css` 统一控制，无需各组件单独声明。

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>Token</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>面板背景</td><td><code>#FFFFFF</code></td><td>白色</td><td>所有场景统一白底</td></tr>
    <tr><td>面板边框</td><td><code>1px solid #EBECED</code></td><td><code>--el-color-text-300</code></td><td>浅色描边，与输入框边框区分</td></tr>
    <tr><td>面板圆角</td><td><code>4px</code></td><td><code>--el-border-radius-base</code></td><td></td></tr>
    <tr><td>面板阴影</td><td><code>0 4px 16px rgba(0,0,0,0.08)</code></td><td><code>--el-box-shadow</code></td><td>轻量浮起感</td></tr>
    <tr><td>条目高度</td><td><code>40px</code></td><td>—</td><td>所有场景统一 40px，含图标场景同样适用</td></tr>
    <tr><td>条目左右内边距</td><td><code>12px</code></td><td>—</td><td></td></tr>
    <tr><td>条目字号</td><td><code>14px</code></td><td><code>--el-font-size-base</code></td><td></td></tr>
    <tr><td>条目图标大小</td><td><code>16px</code></td><td>—</td><td>图标与文字 flex 对齐，<code>flex-shrink: 0</code></td></tr>
    <tr><td>图标与文字间距</td><td><code>8px</code></td><td>spacing-2</td><td>flex 布局 <code>gap: 8px</code></td></tr>
    <tr><td>条目默认文字色</td><td><code>#383C46</code></td><td><code>--el-color-text-900</code></td><td></td></tr>
    <tr><td>条目悬浮背景</td><td><code>#F7F8FC</code></td><td><code>--el-color-primary-100</code></td><td>极浅主色底，不压过文字</td></tr>
    <tr><td>条目悬浮文字色</td><td><code>#383C46</code></td><td><code>--el-color-text-900</code></td><td>保持深色，只靠背景色区分</td></tr>
    <tr><td>条目选中背景</td><td><code>#EDF0FC</code></td><td><code>--el-color-primary-200</code></td><td>比悬浮更深，明确表示已选</td></tr>
    <tr><td>条目选中文字色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td><td>选中才变主色</td></tr>
    <tr><td>条目禁用文字色</td><td><code>#CCD0D6</code></td><td><code>--el-color-text-500</code></td><td></td></tr>
    <tr><td>分割线</td><td><code>1px solid #EBECED</code></td><td><code>--el-color-text-300</code></td><td>用于分组分隔，上下 margin 4px</td></tr>
  </tbody>
</table>

### 各组件下拉面板对应关系

| 组件 | 下拉面板 | 特殊说明 |
|---|---|---|
| Select 选择器 | `el-select-dropdown` | 标准，条目 34px |
| Cascader 级联 | `el-cascader-panel` | 多列面板，每列样式同上 |
| DateTimePicker | `el-picker__popper` | 含日历格，非列表部分有独立规范 |
| Dropdown 操作菜单 | `el-dropdown-menu` | 含图标时图标色跟随文字色 |
| Avatar 用户下拉 | `el-dropdown-menu` | 顶部加用户信息头部区域（12px 16px 内边距） |
