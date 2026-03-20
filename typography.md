# 字体

使用系统默认字体栈，在 macOS、Windows、Linux 等不同系统上均有良好渲染效果，无需加载外部字体文件。

---

## 字体族

```
-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei UI',
'Microsoft YaHei', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

| 系统 | 实际使用字体 |
|------|------------|
| macOS / iOS | PingFang SC（苹方） |
| Windows 11 | Microsoft YaHei UI（微软雅黑 UI） |
| Windows 10 | Microsoft YaHei（微软雅黑） |
| Chrome / Android | Roboto |

---

## 字号规范

<script setup>
const typeScale = [
  {
    name: 's1',
    cssVar: '--el-font-size-s1',
    lineHeightVar: '--el-line-height-s1',
    size: '12px',
    lineHeight: '16px',
    usage: '辅助说明、图表标注、角标',
    sample: '这是 12px 辅助说明文字，用于图表标注和次级信息'
  },
  {
    name: 'b2',
    cssVar: '--el-font-size-b2',
    lineHeightVar: '--el-line-height-b2',
    size: '13px',
    lineHeight: '20px',
    usage: '小号正文、表格内容、次级操作',
    sample: '这是 13px 小号正文，适合表格内的数据呈现'
  },
  {
    name: 'b1（正文基准）',
    cssVar: '--el-font-size-b1',
    lineHeightVar: '--el-line-height-b1',
    size: '14px',
    lineHeight: '22px',
    usage: '标准正文，最高频使用字号，表单标签、输入内容',
    sample: '这是 14px 标准正文，是产品中使用最频繁的字号'
  },
  {
    name: 'h3',
    cssVar: '--el-font-size-h3',
    lineHeightVar: '--el-line-height-h3',
    size: '16px',
    lineHeight: '24px',
    usage: '卡片标题、模块小标题、弹窗标题',
    sample: '这是 16px 小标题，用于卡片和模块标题'
  },
  {
    name: 'h2',
    cssVar: '--el-font-size-h2',
    lineHeightVar: '--el-line-height-h2',
    size: '18px',
    lineHeight: '26px',
    usage: '区块标题、侧边栏分组标题',
    sample: '这是 18px 中等标题'
  },
  {
    name: 'h1',
    cssVar: '--el-font-size-h1',
    lineHeightVar: '--el-line-height-h1',
    size: '20px',
    lineHeight: '28px',
    usage: '页面主标题',
    sample: '这是 20px 页面主标题'
  }
]

const displayScale = [
  { name: 'display-s',  cssVar: '--el-font-size-display-s',  lineHeightVar: '--el-line-height-display-s',  size: '24px', lineHeight: '32px', weight: 'Medium / Bold', usage: '看板数据大标题、统计数字' },
  { name: 'display-m',  cssVar: '--el-font-size-display-m',  lineHeightVar: '--el-line-height-display-m',  size: '32px', lineHeight: '40px', weight: 'Bold 700',       usage: '核心指标数字' },
  { name: 'display-l',  cssVar: '--el-font-size-display-l',  lineHeightVar: '--el-line-height-display-l',  size: '40px', lineHeight: '48px', weight: 'Medium / Bold',  usage: '超大数字展示' },
  { name: 'display-xl', cssVar: '--el-font-size-display-xl', lineHeightVar: '--el-line-height-display-xl', size: '48px', lineHeight: '56px', weight: 'Medium / Bold',  usage: '极大数字，特殊场景' }
]

const textColors = [
  { name: '主要文字', hex: '#161719', cssVar: '--el-color-text-1000', usage: '标题、按钮文字' },
  { name: 'Hover 文字', hex: '#3D434E', cssVar: '--el-color-text-900', usage: '深色悬停文字' },
  { name: '常规文字', hex: '#59606E', cssVar: '--el-color-text-800', usage: '正文、描述' },
  { name: '辅助文字', hex: '#8E95A3', cssVar: '--el-color-text-700', usage: '说明、次级信息' },
  { name: '占位文字', hex: '#B7BCC7', cssVar: '--el-color-text-600', usage: '输入框 placeholder' },
  { name: '禁用文字', hex: '#CCD0D6', cssVar: '--el-color-text-500', usage: '禁用态' },
]
</script>

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:40px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:110px;">名称</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:160px;">CSS 变量</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:120px;">字号 / 行高</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">预览效果</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:200px;">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(t, i) in typeScale" :key="t.name"
        :style="{ borderBottom: i < typeScale.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:14px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ t.name }}</td>
        <td style="padding:14px 16px; vertical-align:middle;">
          <code style="font-size:12px; color:#4628FF; background:#EDF0FC; padding:2px 8px; border-radius:3px;">{{ t.cssVar }}</code>
        </td>
        <td style="padding:14px 16px; font-family:monospace; font-size:12px; color:#59606E; vertical-align:middle;">{{ t.size }} / {{ t.lineHeight }}</td>
        <td style="padding:14px 16px; vertical-align:middle; color:#161719;"
          :style="{ fontSize: t.size, lineHeight: t.lineHeight }">{{ t.sample }}</td>
        <td style="padding:14px 16px; color:#8E95A3; vertical-align:middle; font-size:12px;">{{ t.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 特殊展示字号

用于看板、数据大屏、统计卡片中的数字展示，不用于正文。

<div style="display:flex; flex-direction:column; gap:12px; margin-bottom:40px;">
  <div v-for="d in displayScale" :key="d.name"
    style="display:flex; align-items:center; gap:24px; padding:20px 24px; border:1px solid var(--el-color-text-300); border-radius:8px; background:var(--el-color-text-0);">
    <div :style="{ fontSize: d.size, fontWeight: '700', color: 'var(--el-color-text-1000)', lineHeight: d.lineHeight, minWidth:'80px' }">1,234</div>
    <div>
      <div style="font-size:13px; font-weight:600; color:var(--el-color-text-1000);">{{ d.name }}</div>
      <code style="font-size:12px; color:var(--el-color-primary-600); background:var(--el-color-primary-200); padding:2px 8px; border-radius:3px; margin-top:4px; display:inline-block;">{{ d.cssVar }}</code>
      <div style="font-size:12px; color:var(--el-color-text-700); margin-top:4px;">{{ d.size }} / {{ d.lineHeight }} · {{ d.weight }}</div>
      <div style="font-size:12px; color:var(--el-color-text-700); margin-top:2px;">{{ d.usage }}</div>
    </div>
  </div>
</div>

---

## 字重规范

| 字重名称 | 数值 | 适用场景 |
|---------|------|---------|
| Regular | 400 | 正文、说明文字、输入内容 |
| Medium  | 500 | 标题、强调文字、导航菜单 |
| Bold    | 700 | 数据大标题、重点数字 |

---

## 字色规范

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:32px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:56px;"></th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:120px;">层级</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">色值</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">CSS 变量</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(c, i) in textColors" :key="c.cssVar"
        :style="{ borderBottom: i < textColors.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:0; vertical-align:middle;">
          <div style="width:56px; height:44px; border-right:1px solid var(--el-color-text-300);" :style="{ background: `var(${c.cssVar})` }"></div>
        </td>
        <td style="padding:10px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ c.name }}</td>
        <td style="padding:10px 16px; font-family:monospace; font-size:12px; color:#59606E; vertical-align:middle;">{{ c.hex }}</td>
        <td style="padding:10px 16px; vertical-align:middle;">
          <code style="font-size:12px; color:#4628FF; background:#EDF0FC; padding:2px 8px; border-radius:3px;">{{ c.cssVar }}</code>
        </td>
        <td style="padding:10px 16px; color:#8E95A3; vertical-align:middle;">{{ c.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>
