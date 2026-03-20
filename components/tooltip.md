# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。使用 `<el-tooltip>` 原生组件，仅覆盖颜色。

---

## 演示

<Demo src="/demos/tooltip-demo.html" />

---

## 颜色规范

<table class="spec-table">
  <thead>
    <tr><th>元素</th><th>说明</th><th>对应 Token</th><th>色值</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>深色背景（默认）</td>
      <td>Tooltip 气泡背景</td>
      <td><code>--el-color-text-1000</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-1000);"></span>#161719</span></td>
    </tr>
    <tr>
      <td>深色文字</td>
      <td>深色背景上的文字</td>
      <td>白色</td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:#fff;border:1px solid var(--el-color-text-300);"></span>#FFFFFF</span></td>
    </tr>
    <tr>
      <td>浅色背景</td>
      <td>light 主题气泡背景</td>
      <td>白色</td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:#fff;border:1px solid var(--el-color-text-300);"></span>#FFFFFF</span></td>
    </tr>
    <tr>
      <td>浅色边框</td>
      <td>light 主题气泡边框</td>
      <td><code>--el-color-text-300</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-300);"></span>#EBECEE</span></td>
    </tr>
    <tr>
      <td>浅色文字</td>
      <td>light 主题气泡文字</td>
      <td><code>--el-color-text-1000</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-1000);"></span>#161719</span></td>
    </tr>
  </tbody>
</table>

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>默认主题</td><td>dark（深色）</td><td>B 端推荐使用深色，信息层级清晰</td></tr>
    <tr><td>深色背景</td><td><code>--el-color-text-1000</code>（#161719）</td><td></td></tr>
    <tr><td>深色文字</td><td>白色 #FFFFFF</td><td></td></tr>
    <tr><td>浅色背景</td><td>白色 #FFFFFF</td><td><code>effect="light"</code></td></tr>
    <tr><td>浅色边框</td><td><code>--el-color-text-300</code>（#EBECEE）</td><td></td></tr>
    <tr><td>浅色文字</td><td><code>--el-color-text-1000</code>（#161719）</td><td></td></tr>
    <tr><td>字号</td><td>12px</td><td>El Plus 默认</td></tr>
    <tr><td>圆角</td><td>4px</td><td>El Plus 默认</td></tr>
    <tr><td>触发方式</td><td>hover（默认）</td><td>也支持 click / focus</td></tr>
    <tr><td>禁用元素包裹</td><td>需外套 <code>&lt;span&gt;</code></td><td>disabled 按钮不响应鼠标事件，需包裹才能触发 tooltip</td></tr>
  </tbody>
</table>
