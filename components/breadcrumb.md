# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。使用 `<el-breadcrumb>` / `<el-breadcrumb-item>` 原生组件，仅覆盖颜色。

---

## 演示

<Demo src="/demos/breadcrumb-demo.html" />

---

## 颜色规范

<table class="spec-table">
  <thead>
    <tr><th>元素</th><th>说明</th><th>对应 Token</th><th>色值</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>非末级文字</td>
      <td>可点击的层级链接</td>
      <td><code>--el-color-text-700</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-700);"></span>#8E95A3</span></td>
    </tr>
    <tr>
      <td>非末级 Hover 文字</td>
      <td>悬浮时变为主色</td>
      <td><code>--el-color-primary-600</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-600);"></span>#4628FF</span></td>
    </tr>
    <tr>
      <td>末级文字（当前页）</td>
      <td>不可点击，表示当前位置</td>
      <td><code>--el-color-text-1000</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-1000);"></span>#161719</span></td>
    </tr>
    <tr>
      <td>分隔符</td>
      <td>层级间分隔线 /</td>
      <td><code>--el-color-text-500</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-500);"></span>#CCD0D6</span></td>
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
    <tr><td>字号</td><td>14px</td><td><code>--el-font-size-base</code></td></tr>
    <tr><td>非末级文字色</td><td><code>--el-color-text-700</code>（#8E95A3）</td><td>辅助文本色</td></tr>
    <tr><td>非末级 Hover 色</td><td><code>--el-color-primary-600</code>（#4628FF）</td><td></td></tr>
    <tr><td>末级文字色</td><td><code>--el-color-text-1000</code>（#161719）</td><td>当前页，不可点击</td></tr>
    <tr><td>分隔符颜色</td><td><code>--el-color-text-500</code>（#CCD0D6）</td><td></td></tr>
    <tr><td>默认分隔符</td><td><code>/</code></td><td>可替换为图标（ArrowRight）</td></tr>
    <tr><td>层级建议</td><td>不超过 4 级</td><td>超出时中间层级可折叠显示</td></tr>
  </tbody>
</table>
