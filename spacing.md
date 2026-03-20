# 间距

基于 **4px 基础单位**的间距系统。所有间距值均为 4 的整数倍，确保界面在任意屏幕密度下都能像素级对齐。

系统内使用的标准间距共 **6 档**：`0 / 4 / 8 / 12 / 16 / 24`。

---

## 间距规模表

<script setup>
const spacingScale = [
  {
    value: 0,
    name: '无间距',
    scene: '组件内部完全贴合',
    examples: '收起侧边栏的图标居中；下拉菜单图标直接内嵌图标区',
    token: '—'
  },
  {
    value: 4,
    name: '极小间距',
    scene: '极紧凑的行内元素',
    examples: '颜色标签横向内边距（Tag padding-left/right）',
    token: 'spacing-1'
  },
  {
    value: 8,
    name: '小间距',
    scene: '同一组件内部元素',
    examples: '按钮内图标与文字之间；多选框方框与标签文字之间；Checkbox label padding-left',
    token: 'spacing-2'
  },
  {
    value: 12,
    name: '基准间距',
    scene: '并排按钮 / 表格单元格',
    examples: '按钮组中按钮与按钮之间；菜单项左侧 padding；表格行 padding（垂直）',
    token: 'spacing-3'
  },
  {
    value: 16,
    name: '标准间距',
    scene: '同一区块内部',
    examples: '表格单元格 padding（水平）；卡片内容区各行之间；表单同区块内的元素行距',
    token: 'spacing-4'
  },
  {
    value: 24,
    name: '大间距',
    scene: '不同功能区块之间',
    examples: '表单项上下间距；页面内容区左右内边距；区块与区块之间的分隔距离',
    token: 'spacing-6'
  },
]
</script>

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:32px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:60px;">值</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">名称</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:120px;">层级定义</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:64px;">示意</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">典型使用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(s, i) in spacingScale" :key="s.value"
        :style="{ borderBottom: i < spacingScale.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:14px 16px; font-family:monospace; font-weight:700; color:#4628FF; vertical-align:middle;">{{ s.value }}px</td>
        <td style="padding:14px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ s.name }}</td>
        <td style="padding:14px 16px; color:#59606E; vertical-align:middle;">{{ s.scene }}</td>
        <td style="padding:14px 16px; vertical-align:middle;">
          <div v-if="s.value > 0"
            :style="{
              width: s.value + 'px',
              height: '20px',
              background: '#4628FF',
              borderRadius: '2px',
              opacity: 0.7
            }">
          </div>
          <span v-else style="color:#CCD0D6; font-size:12px;">—</span>
        </td>
        <td style="padding:14px 16px; color:#8E95A3; vertical-align:middle; line-height:1.7; font-size:12px;">{{ s.examples }}</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 使用场景快查

| 场景 | 间距值 | 说明 |
|------|--------|------|
| 按钮内：图标与文字 | `8px` | `margin-left: 8px` |
| 按钮之间（按钮组） | `12px` | `margin-left: 12px` |
| 组内元素之间 | `16px` | 同一功能区内的子项行间距 |
| 表格单元格 padding | `12px 16px` | 上下 12px，左右 16px |
| 表单项之间 | `24px` | 上下相邻的 form-item 间距 |
| 页面内容区内边距 | `24px`（水平）`16px`（垂直） | 内容区左右留白 |
| 区块与区块之间 | `24px` | 不同卡片/功能块的分隔 |

---

## 使用原则

::: info 规范要求
**只使用系统内的 6 个标准值**：`0 / 4 / 8 / 12 / 16 / 24`。

遇到不在范围内的间距需求时，优先选取最近的标准值；不要使用 6 / 10 / 14 / 18 / 20 等中间值。
:::

**层级越近，间距越小：**
- 组件内部：`4px` / `8px`（同一组件内）
- 组件之间：`12px` / `16px`（同一区块内）
- 区块之间：`24px`（不同功能区块）

**特例说明：**

部分组件内 El Plus 原生设定了固定的高度（如 Tag `24px` 高度、分页按钮 `36px`），这些是**组件尺寸**，不属于间距规范管辖范围，无需强制对齐至上述 6 档。

---

## 组件高度规范（独立于间距）

| 尺寸档 | 高度 | CSS 变量 | 适用场景 |
|--------|------|---------|---------|
| large | `40px` | `--el-component-size-large` | 页面主搜索框 |
| default | `36px` | `--el-component-size` | 常规表单控件（默认） |
| small | `28px` | `--el-component-size-small` | 表格内操作控件 |
| 表头行高 | `48px` | 在 el-plus-theme.css 中定义 | `<el-table>` 表头 |
| 数据行高 | `64px` | 在 el-plus-theme.css 中定义 | `<el-table>` 数据行 |
