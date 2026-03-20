# Dialog 弹窗

弹窗用于需要用户确认、填写信息或展示详情的场景，打断当前流程以获取用户响应。

**尺寸规范**：提供 3 种固定宽度 —— `480px`（确认/简单表单）、`720px`（标准表单/详情）、`960px`（复杂表单/大内容）；最大高度 `680px`，超出时内容区滚动。

---

## 演示

<Demo src="/demos/dialog-demo.html" />

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>备注</th></tr>
  </thead>
  <tbody>
    <tr><td>小尺寸宽度</td><td><code>480px</code></td><td>确认弹窗、1-3 个字段的简单表单</td></tr>
    <tr><td>标准宽度</td><td><code>720px</code></td><td>标准新建/编辑表单、详情展示</td></tr>
    <tr><td>大尺寸宽度</td><td><code>960px</code></td><td>复杂表单、多分组字段、大内容详情</td></tr>
    <tr><td>最大高度</td><td><code>680px</code></td><td>超出时内容区出现滚动条，标题和底部保持固定</td></tr>
    <tr><td>弹窗圆角</td><td><code>8px</code></td><td>大圆角，视觉层级更突出</td></tr>
    <tr><td>弹窗阴影</td><td><code>--el-box-shadow-dark</code></td><td><code>0 4px 24px rgba(0,0,0,0.12)</code></td></tr>
    <tr><td>标题字号</td><td><code>16px / Medium 500</code></td><td>h3 级别</td></tr>
    <tr><td>内容字号</td><td><code>14px / Regular 400</code></td><td>b1 标准正文</td></tr>
    <tr><td>底部按钮顺序</td><td>取消 → 确认</td><td>确认按钮在右侧，危险操作按钮用 danger 色</td></tr>
  </tbody>
</table>

## 使用规则

**触发时机**：需要用户明确确认、或操作流程较复杂无法在当前页完成时使用  
**层级控制**：禁止弹窗内再套弹窗，最多两层（弹窗内可有确认框）  
**危险操作必须二次确认**：删除、清空、停用等不可逆操作必须有确认弹窗  
**标题要明确**：标题说明动作（如"新建成员"），而非模糊的"提示"
