# Border 边框

我们对边框的使用进行统一规范，包含边框样式和圆角规范。

---

## 边框样式

描边颜色来自中性色体系，分浅色和深色两种，另有虚线描边用于特殊场景。

<script setup>
const borderStyles = [
  {
    name: '浅色描边 ⚠️',
    token: '--el-color-text-300',
    width: '1px',
    dashed: false,
    usage: '仅特殊场景使用（轻量分割线），常规组件统一用深色描边'
  },
  {
    name: '深色描边',
    token: '--el-color-text-400',
    width: '1px',
    dashed: false,
    usage: '输入框默认态、卡片边框、主力使用描边'
  },
  {
    name: '聚焦描边',
    token: '--el-color-primary-600',
    width: '1px',
    dashed: false,
    usage: '输入框聚焦态、选中态外框'
  },
  {
    name: '错误描边',
    token: '--el-color-danger-400',
    width: '1px',
    dashed: false,
    usage: '表单校验错误态'
  },
  {
    name: '虚线描边',
    token: '--el-color-text-300',
    width: '1px',
    dashed: true,
    usage: '拖拽上传区域、占位区域、虚框容器'
  }
]

const radiusScale = [
  {
    name: 'No Radius',
    size: null,
    token: '--el-border-radius-none',
    value: '0px',
    desc: '—'
  },
  {
    name: 'Small',
    size: '4px',
    token: '--el-border-radius-base',
    value: '4px',
    desc: '按钮、输入框、标签、下拉框'
  },
  {
    name: 'Large',
    size: '8px',
    token: '--el-border-radius-large',
    value: '8px',
    desc: '弹窗 Modal、默认卡片'
  },
  {
    name: 'Round',
    size: '12px',
    token: '--el-border-radius-round',
    value: '12px',
    desc: '胶囊按钮、pill 标签'
  }
]
</script>

<div style="border:1px solid #EBECED; border-radius:8px; overflow:hidden; margin-bottom:32px;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:#F5F6F7;">
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:140px;">名称</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:60px;">粗细</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:100px;">颜色</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED; width:40px;">示意</th>
        <th style="padding:12px 16px; text-align:left; font-weight:600; color:#8E95A3; border-bottom:1px solid #EBECED;">适用场景</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(b, i) in borderStyles" :key="b.name" :style="{ borderBottom: i < borderStyles.length - 1 ? '1px solid #F5F6F7' : 'none' }">
        <td style="padding:14px 16px; vertical-align:middle;">
          <div style="font-weight:600; color:var(--el-color-text-1000); margin-bottom:4px;">{{ b.name }}</div>
          <code style="font-size:11px; color:var(--el-color-primary-600); background:var(--el-color-primary-200); padding:2px 6px; border-radius:3px;">{{ b.token }}</code>
        </td>
        <td style="padding:14px 16px; color:var(--el-color-text-800); vertical-align:middle;">{{ b.width }}</td>
        <td style="padding:14px 16px; vertical-align:middle;">
          <span style="font-family:monospace; color:var(--el-color-text-800); font-size:12px;">{{ b.token }}</span>
        </td>
        <td style="padding:14px 16px; vertical-align:middle;">
          <div style="width:32px; height:32px; border-radius:4px;"
            :style="{
              border: b.dashed
                ? `1px dashed var(${b.token})`
                : `1px solid var(${b.token})`
            }"></div>
        </td>
        <td style="padding:14px 16px; color:var(--el-color-text-700); vertical-align:middle; line-height:1.6;">{{ b.usage }}</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 圆角

系统提供 4 种圆角规格，覆盖从小组件到大容器的所有使用场景。


<div style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:32px;">
  <div v-for="r in radiusScale" :key="r.name"
    style="border:1px solid #EBECED; border-radius:8px; padding:20px; background:#fff;">
    <div style="font-size:14px; font-weight:600; color:#161719; margin-bottom:12px;">
      {{ r.name }}<span v-if="r.size" style="font-weight:400; color:#8E95A3;"> • {{ r.size }}</span>
    </div>
    <code style="font-size:11px; color:#4628FF; background:#EDF0FC; padding:3px 8px; border-radius:3px; display:inline-block; margin-bottom:8px;">{{ r.token }}</code>
    <div style="font-size:12px; color:#8E95A3; margin-bottom:16px;">border-radius: {{ r.value }}</div>
    <div style="width:100%; height:52px; background:#F5F6F7; border:1px solid #EBECED;"
      :style="{ borderRadius: r.value }"></div>
    <div style="font-size:12px; color:#8E95A3; margin-top:10px; line-height:1.5;">{{ r.desc }}</div>
  </div>
</div>

### CSS 变量对照表

| CSS 变量 | 值 | 适用元素 |
|---------|---|---------|
| `--el-border-radius-base` | `4px` | 按钮、输入框、标签、Select |
| `--el-border-radius-small` | `2px` | Badge 徽标等极小元素 |
| `--el-border-radius-round` | `12px` | 胶囊按钮、pill 标签 |
| `--el-border-radius-circle` | `50%` | 圆形头像、圆形图标按钮 |

---

## 使用规范

**✅ 推荐做法**

- 按钮、输入框统一使用 `--el-border-radius-base`（4px）
- 弹窗、默认卡片使用大圆角（8px），视觉层级更突出
- 描边优先使用深色描边 `--el-border-color`（`#DADCE0`）
- 所有描边颜色通过 CSS 变量引用，不要在组件内硬编码色值

**❌ 避免做法**

- 不要在同一组件内混用多种圆角值
- **浅色描边 `--el-border-color-light` 仅在极少数特殊场景使用**，常规输入框、卡片、分割线统一用深色描边
- 不要随意增加新的圆角值，保持系统内一致
