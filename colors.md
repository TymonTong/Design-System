# 色彩

使用统一的色彩系统，保持产品视觉一致性。**所有颜色通过 CSS 变量引用，修改变量即可全局生效，不要在组件中硬编码色值。**

变量命名规则：`--el-color-{色系}-{数值}`，数值越小颜色越浅，越大颜色越深。

---

## 主色

品牌色，用于主要按钮、关键操作入口、链接等核心交互元素。

<script setup>
const primaryColors = [
  { cssVar: '--el-color-primary-700', hex: '#170DA6', name: '点击 / Active', usage: '按钮点击态、链接点击态' },
  { cssVar: '--el-color-primary-600', hex: '#4628FF', name: '主色',           usage: '主要按钮背景、品牌标识、关键链接' },
  { cssVar: '--el-color-primary-500', hex: '#757AFF', name: 'Hover 悬停',    usage: '主色悬停态、次级操作按钮背景' },
  { cssVar: '--el-color-primary-400', hex: '#C2C4FF', name: '描边',           usage: '选中态边框、输入框聚焦描边' },
  { cssVar: '--el-color-primary-300', hex: '#E8E9FF', name: '按钮禁用',       usage: '主色按钮禁用状态背景' },
  { cssVar: '--el-color-primary-200', hex: '#EDF0FC', name: '表头 / 操作按钮',usage: '表格表头底色、操作区按钮背景' },
  { cssVar: '--el-color-primary-100', hex: '#F7F8FC', name: '表格行 Hover',  usage: '表格行悬停背景色' },
]

const successColors = [
  { cssVar: '--el-color-success-400', hex: '#00BFA2', name: '主色',        usage: '成功标签、完成状态文字' },
  { cssVar: '--el-color-success-300', hex: '#4CD2BE', name: 'Hover 悬停', usage: '悬停态' },
  { cssVar: '--el-color-success-200', hex: '#C2F0E9', name: '描边',        usage: '成功状态描边' },
  { cssVar: '--el-color-success-100', hex: '#EBFAF8', name: '底色',        usage: '成功状态背景色' },
]

const dangerColors = [
  { cssVar: '--el-color-danger-400', hex: '#ED5153', name: '主色',        usage: '错误状态、删除操作' },
  { cssVar: '--el-color-danger-300', hex: '#F28586', name: 'Hover 悬停', usage: '悬停态' },
  { cssVar: '--el-color-danger-200', hex: '#FBD5D6', name: '描边',        usage: '错误状态描边' },
  { cssVar: '--el-color-danger-100', hex: '#FDEAEA', name: '底色',        usage: '错误状态背景色' },
]

const warningColors = [
  { cssVar: '--el-color-warning-400', hex: '#FFA100', name: '主色',        usage: '警告状态、待处理标签' },
  { cssVar: '--el-color-warning-300', hex: '#FFC561', name: 'Hover 悬停', usage: '悬停态' },
  { cssVar: '--el-color-warning-200', hex: '#FFECCB', name: '描边',        usage: '警告状态描边' },
  { cssVar: '--el-color-warning-100', hex: '#FFF8EB', name: '底色',        usage: '警告状态背景色' },
]

const neutralColors = [
  { cssVar: '--el-color-text-1000', hex: '#161719', name: 'text-1000', usage: '主要文字 / 按钮文字（最高对比）' },
  { cssVar: '--el-color-text-900',  hex: '#3D434E', name: 'text-900',  usage: 'Hover 文字' },
  { cssVar: '--el-color-text-800',  hex: '#59606E', name: 'text-800',  usage: '常规正文、描述文字' },
  { cssVar: '--el-color-text-700',  hex: '#8E95A3', name: 'text-700',  usage: '辅助说明、次级信息' },
  { cssVar: '--el-color-text-600',  hex: '#B7BCC7', name: 'text-600',  usage: '占位文字 Placeholder' },
  { cssVar: '--el-color-text-500',  hex: '#CCD0D6', name: 'text-500',  usage: '禁用态文字' },
  { cssVar: '--el-color-text-400',  hex: '#DADCE0', name: 'text-400',  usage: '深色描边（主力使用）' },
  { cssVar: '--el-color-text-300',  hex: '#EBECED', name: 'text-300',  usage: '浅色描边（仅特殊场景）' },
  { cssVar: '--el-color-text-200',  hex: '#F7F8FA', name: 'text-200',  usage: '极浅背景' },
  { cssVar: '--el-color-text-100',  hex: '#F5F6F7', name: 'text-100',  usage: '底色背景 / 禁用填充' },
  { cssVar: '--el-color-text-0',    hex: '#FFFFFF', name: 'text-0',    usage: '纯白 / 组件背景 / 卡片背景' },
]
</script>

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:40px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:56px;"></th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">CSS 变量</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">色值</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:130px;">名称</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(c, i) in primaryColors" :key="c.cssVar"
        :style="{ borderBottom: i < primaryColors.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:0; vertical-align:middle;">
          <div style="width:56px; height:48px;" :style="{ background: `var(${c.cssVar})` }"></div>
        </td>
        <td style="padding:12px 16px; vertical-align:middle;">
          <code style="font-size:12px; color:#4628FF; background:#EDF0FC; padding:2px 8px; border-radius:3px;">{{ c.cssVar }}</code>
        </td>
        <td style="padding:12px 16px; font-family:monospace; font-size:12px; color:#59606E; vertical-align:middle;">{{ c.hex }}</td>
        <td style="padding:12px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ c.name }}</td>
        <td style="padding:12px 16px; color:#8E95A3; vertical-align:middle; line-height:1.6;">{{ c.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 辅助色

功能性色彩，用于传达状态信息，不可用于装饰目的。

### 成功色（绿）

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:24px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:56px;"></th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">CSS 变量</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">色值</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:130px;">名称</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(c, i) in successColors" :key="c.cssVar"
        :style="{ borderBottom: i < successColors.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:0; vertical-align:middle;">
          <div style="width:56px; height:44px;" :style="{ background: `var(${c.cssVar})` }"></div>
        </td>
        <td style="padding:10px 16px; vertical-align:middle;">
          <code style="font-size:12px; color:var(--el-color-success-400); background:var(--el-color-success-100); padding:2px 8px; border-radius:3px;">{{ c.cssVar }}</code>
        </td>
        <td style="padding:10px 16px; font-family:monospace; font-size:12px; color:#59606E; vertical-align:middle;">{{ c.hex }}</td>
        <td style="padding:10px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ c.name }}</td>
        <td style="padding:10px 16px; color:#8E95A3; vertical-align:middle;">{{ c.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>

### 危险色（红）

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:24px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:56px;"></th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">CSS 变量</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">色值</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:130px;">名称</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(c, i) in dangerColors" :key="c.cssVar"
        :style="{ borderBottom: i < dangerColors.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:0; vertical-align:middle;">
          <div style="width:56px; height:44px;" :style="{ background: c.hex }"></div>
        </td>
        <td style="padding:10px 16px; vertical-align:middle;">
          <code style="font-size:12px; color:var(--el-color-danger-400); background:var(--el-color-danger-100); padding:2px 8px; border-radius:3px;">{{ c.cssVar }}</code>
        </td>
        <td style="padding:10px 16px; font-family:monospace; font-size:12px; color:#59606E; vertical-align:middle;">{{ c.hex }}</td>
        <td style="padding:10px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ c.name }}</td>
        <td style="padding:10px 16px; color:#8E95A3; vertical-align:middle;">{{ c.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>

### 警告色（黄）

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:40px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:56px;"></th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">CSS 变量</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">色值</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:130px;">名称</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(c, i) in warningColors" :key="c.cssVar"
        :style="{ borderBottom: i < warningColors.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:0; vertical-align:middle;">
          <div style="width:56px; height:44px;" :style="{ background: c.hex }"></div>
        </td>
        <td style="padding:10px 16px; vertical-align:middle;">
          <code style="font-size:12px; color:var(--el-color-warning-400); background:var(--el-color-warning-100); padding:2px 8px; border-radius:3px;">{{ c.cssVar }}</code>
        </td>
        <td style="padding:10px 16px; font-family:monospace; font-size:12px; color:#59606E; vertical-align:middle;">{{ c.hex }}</td>
        <td style="padding:10px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ c.name }}</td>
        <td style="padding:10px 16px; color:#8E95A3; vertical-align:middle;">{{ c.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 中性色

用于文字、边框、背景等非强调性场景，构建信息层级。

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:32px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:56px;"></th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">CSS 变量</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">色值</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:110px;">名称</th>
        <th style="padding:10px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">用途</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(c, i) in neutralColors" :key="c.cssVar"
        :style="{ borderBottom: i < neutralColors.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:0; vertical-align:middle;">
          <div style="width:56px; height:44px; border-right:1px solid var(--el-color-text-300);"
            :style="{ background: `var(${c.cssVar})` }"></div>
        </td>
        <td style="padding:10px 16px; vertical-align:middle;">
          <code style="font-size:12px; color:#4628FF; background:#EDF0FC; padding:2px 8px; border-radius:3px;">{{ c.cssVar }}</code>
        </td>
        <td style="padding:10px 16px; font-family:monospace; font-size:12px; color:#59606E; vertical-align:middle;">{{ c.hex }}</td>
        <td style="padding:10px 16px; font-weight:600; color:#161719; vertical-align:middle;">{{ c.name }}</td>
        <td style="padding:10px 16px; color:#8E95A3; vertical-align:middle;">{{ c.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>
