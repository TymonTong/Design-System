# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。全部使用 `<el-tabs>` / `<el-tab-pane>` 原生组件，仅通过 CSS 变量覆盖颜色。

---

## 颜色规范

<table class="spec-table">
  <thead>
    <tr><th>CSS 变量</th><th>说明</th><th>对应 Token</th><th>色值</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--el-tabs-header-color</code></td>
      <td>未选中标签文字</td>
      <td><code>--el-color-text-800</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-800);"></span>#59606E</span></td>
    </tr>
    <tr>
      <td><code>--el-color-primary</code></td>
      <td>选中标签文字 / 激活线条</td>
      <td><code>--el-color-primary-600</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-600);"></span>#4628FF</span></td>
    </tr>
    <tr>
      <td>分隔线 / 底部线</td>
      <td>标签栏底部横线</td>
      <td><code>--el-color-text-300</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-300);"></span>#EBECEE</span></td>
    </tr>
  </tbody>
</table>

---

## 演示

<Demo src="/demos/tabs-demo.html" />

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>标签高度</td><td>40px</td><td>El Plus 默认</td></tr>
    <tr><td>字号</td><td>14px</td><td><code>--el-font-size-base</code></td></tr>
    <tr><td>选中文字颜色</td><td><code>--el-color-primary-600</code>（#4628FF）</td><td></td></tr>
    <tr><td>未选中文字颜色</td><td><code>--el-color-text-800</code>（#59606E）</td><td></td></tr>
    <tr><td>激活指示线颜色</td><td><code>--el-color-primary-600</code>（#4628FF）</td><td></td></tr>
    <tr><td>底部分隔线</td><td><code>--el-color-text-300</code>（#EBECEE）</td><td></td></tr>
    <tr><td>标签类型</td><td>line（默认）/ card</td><td>B 端推荐使用 line 型</td></tr>
  </tbody>
</table>
