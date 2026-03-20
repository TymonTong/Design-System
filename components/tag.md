# Tag 标签

标签用于标注、分类和状态呈现，是 B 端表格中最常用的装饰性组件。全部基于 `<el-tag>` 原生组件 + `effect="light"` 属性，仅通过 CSS 变量覆盖视觉样式。

当前只提供一种尺寸：高度 **24px**，左右内边距 **6px**，圆角 **4px**，字号 **12px**。不提供圆角（round）变体。

---

## 颜色规范

以下是 Tag 各颜色变体所引用的设计 Token，修改对应 CSS 变量即可全局生效。

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-100);">
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">颜色</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">属性</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">CSS 变量</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">颜色值</th>
        <th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th>
      </tr>
    </thead>
    <tbody>
      <!-- 主色 -->
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:middle; white-space:nowrap;">
          <el-tag type="primary" effect="light" style="pointer-events:none;">主色</el-tag>
        </td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#EDF0FC</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-300</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#C2C4FF</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#4628FF</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <!-- 绿色 -->
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:middle; white-space:nowrap;">
          <el-tag type="success" effect="light" style="pointer-events:none;">绿色</el-tag>
        </td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#EBFAF8</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-success-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success-200</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#C2F0E9</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-success-200);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#00BFA2</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-success-400);margin:auto;"></div></td>
      </tr>
      <!-- 黄色 -->
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:middle; white-space:nowrap;">
          <el-tag type="warning" effect="light" style="pointer-events:none;">黄色</el-tag>
        </td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-warning-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#FFF8EB</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-warning-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-warning-200</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#FFECCB</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-warning-200);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-warning-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#FFA100</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-warning-400);margin:auto;"></div></td>
      </tr>
      <!-- 红色 -->
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:middle; white-space:nowrap;">
          <el-tag type="danger" effect="light" style="pointer-events:none;">红色</el-tag>
        </td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#FDEAEA</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-200</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#FBD5D6</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-200);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#ED5153</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-400);margin:auto;"></div></td>
      </tr>
      <!-- 灰色 -->
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:middle; white-space:nowrap;">
          <el-tag type="info" effect="light" style="pointer-events:none;">灰色</el-tag>
        </td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#F5F6F7</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">描边色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#DADCE0</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">#59606E</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/tag-demo.html" />

## 代码示例

```html
<!-- 基础标签 -->
<el-tag type="primary" effect="light">系统tag</el-tag>
<el-tag type="success" effect="light">成功tag</el-tag>
<el-tag type="warning" effect="light">提示tag</el-tag>
<el-tag type="danger"  effect="light">失败错误</el-tag>
<el-tag type="info"    effect="light">低层级tag</el-tag>

<!-- 可关闭标签 -->
<el-tag type="primary" effect="light" closable @close="handleClose">系统tag</el-tag>
```

---

## 状态语义规范

B 端产品中，Tag 最常用于表格状态列，语义颜色规范如下：

<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:24px; max-width:640px;">
  <div style="display:flex; align-items:center; gap:16px; padding:12px 16px; border:1px solid var(--el-color-text-300); border-radius:6px; background:var(--el-color-text-0);">
    <el-tag type="success" effect="light" style="flex-shrink:0;">运行中</el-tag>
    <span style="font-size:13px; color:var(--el-color-text-800); flex:1;">成功绿色 · 正常运行、已完成、已支付</span>
    <code style="font-size:12px; color:var(--el-color-primary-600); background:var(--el-color-primary-100); padding:2px 6px; border-radius:3px; flex-shrink:0;">type="success"</code>
  </div>
  <div style="display:flex; align-items:center; gap:16px; padding:12px 16px; border:1px solid var(--el-color-text-300); border-radius:6px; background:var(--el-color-text-0);">
    <el-tag type="warning" effect="light" style="flex-shrink:0;">待审核</el-tag>
    <span style="font-size:13px; color:var(--el-color-text-800); flex:1;">警告黄色 · 待处理、审核中、等待</span>
    <code style="font-size:12px; color:var(--el-color-primary-600); background:var(--el-color-primary-100); padding:2px 6px; border-radius:3px; flex-shrink:0;">type="warning"</code>
  </div>
  <div style="display:flex; align-items:center; gap:16px; padding:12px 16px; border:1px solid var(--el-color-text-300); border-radius:6px; background:var(--el-color-text-0);">
    <el-tag type="danger" effect="light" style="flex-shrink:0;">已停用</el-tag>
    <span style="font-size:13px; color:var(--el-color-text-800); flex:1;">危险红色 · 错误、失败、停用、拒绝</span>
    <code style="font-size:12px; color:var(--el-color-primary-600); background:var(--el-color-primary-100); padding:2px 6px; border-radius:3px; flex-shrink:0;">type="danger"</code>
  </div>
  <div style="display:flex; align-items:center; gap:16px; padding:12px 16px; border:1px solid var(--el-color-text-300); border-radius:6px; background:var(--el-color-text-0);">
    <el-tag type="info" effect="light" style="flex-shrink:0;">已关闭</el-tag>
    <span style="font-size:13px; color:var(--el-color-text-800); flex:1;">中性灰色 · 已关闭、已过期、未启用</span>
    <code style="font-size:12px; color:var(--el-color-primary-600); background:var(--el-color-primary-100); padding:2px 6px; border-radius:3px; flex-shrink:0;">type="info"</code>
  </div>
  <div style="display:flex; align-items:center; gap:16px; padding:12px 16px; border:1px solid var(--el-color-text-300); border-radius:6px; background:var(--el-color-text-0);">
    <el-tag type="primary" effect="light" style="flex-shrink:0;">进行中</el-tag>
    <span style="font-size:13px; color:var(--el-color-text-800); flex:1;">主色蓝紫 · 新建、进行中、主要标识</span>
    <code style="font-size:12px; color:var(--el-color-primary-600); background:var(--el-color-primary-100); padding:2px 6px; border-radius:3px; flex-shrink:0;">type="primary"</code>
  </div>
</div>

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>CSS 变量</th></tr>
  </thead>
  <tbody>
    <tr><td>高度</td><td><code>24px</code></td><td>仅提供此一种尺寸</td></tr>
    <tr><td>左右内边距</td><td><code>6px</code></td><td>覆盖 .el-tag { padding: 0 6px }</td></tr>
    <tr><td>圆角</td><td><code>4px</code></td><td><code>--el-border-radius-base</code></td></tr>
    <tr><td>字号</td><td><code>12px</code></td><td><code>--el-font-size-s1</code></td></tr>
    <tr><td>effect</td><td><code>light</code></td><td>固定使用，不提供 dark / round 变体</td></tr>
    <tr><td>文字与关闭图标间距</td><td><code>4px</code></td><td>El Plus 内置 gap</td></tr>
    <tr><td>关闭图标尺寸</td><td><code>12×12px</code></td><td>El Plus 内置</td></tr>
  </tbody>
</table>
