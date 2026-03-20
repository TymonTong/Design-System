# PageHeader 页头

页面顶部区域，分为**可返回**和**无返回**两种变体。全部使用 `<el-page-header>` 原生组件，仅覆盖颜色与尺寸。

---

## 颜色规范

<table class="spec-table">
  <thead>
    <tr><th>元素</th><th>说明</th><th>对应 Token</th><th>色值</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>标题文字</td>
      <td>页面主标题</td>
      <td><code>--el-color-text-1000</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-1000);"></span>#161719</span></td>
    </tr>
    <tr>
      <td>返回图标 / 文字</td>
      <td>返回按钮（仅可返回变体）</td>
      <td><code>--el-color-text-800</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-800);"></span>#59606E</span></td>
    </tr>
    <tr>
      <td>返回 Hover</td>
      <td>悬浮变主色</td>
      <td><code>--el-color-primary-600</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-600);"></span>#4628FF</span></td>
    </tr>
  </tbody>
</table>

---

## 演示

<Demo src="/demos/page-header-demo.html" />

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>变体</td><td>可返回 / 无返回</td><td>可返回有返回按钮；无返回只有标题</td></tr>
    <tr><td>容器高度</td><td>36px</td><td>与输入框、按钮等组件高度对齐</td></tr>
    <tr><td>标题字号</td><td>20px / font-weight 700</td><td></td></tr>
    <tr><td>标题文字色</td><td><code>--el-color-text-1000</code>（#161719）</td><td></td></tr>
    <tr><td>返回按钮文字</td><td>返回</td><td>统一中文，不使用英文 "Back"</td></tr>
    <tr><td>返回按钮色</td><td><code>--el-color-text-800</code>（#59606E）</td><td></td></tr>
    <tr><td>返回 Hover 色</td><td><code>--el-color-primary-600</code>（#4628FF）</td><td></td></tr>
    <tr><td>无底部边框</td><td>—</td><td>页头本身不带分隔线</td></tr>
    <tr><td>操作区按钮顺序</td><td>主色按钮在左</td><td>如：新增 / 导入 / 导出</td></tr>
    <tr><td>操作区按钮间距</td><td>12px</td><td>与全局按钮组间距规范一致</td></tr>
    <tr><td>使用场景（可返回）</td><td>详情页、编辑页</td><td></td></tr>
    <tr><td>使用场景（无返回）</td><td>列表页、概览页、一级导航页</td><td></td></tr>
  </tbody>
</table>
