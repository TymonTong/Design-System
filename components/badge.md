# Badge 徽章

徽章用于在元素右上角展示数字、文字或状态小圆点，常用于消息通知计数。使用 `<el-badge>` 原生组件，仅覆盖颜色。

---

## 演示

<Demo src="/demos/badge-demo.html" />

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>备注</th></tr>
  </thead>
  <tbody>
    <tr><td>徽章圆角</td><td><code>2px</code> / 圆形</td><td>数字为半圆，dot 为圆形</td></tr>
    <tr><td>默认颜色</td><td><code>#ED5153</code></td><td>--el-color-danger，引起注意</td></tr>
    <tr><td>最大显示数字</td><td><code>99</code></td><td>推荐 :max="99"，超过显示 99+</td></tr>
    <tr><td>文字字号</td><td><code>12px</code></td><td>极小字号，保证紧凑</td></tr>
    <tr><td>is-dot</td><td>小圆点，无数字</td><td>仅表示有/无提示时使用</td></tr>
    <tr><td>value 文字</td><td>字符串</td><td>可使用"新""Hot""Beta"等标注</td></tr>
  </tbody>
</table>
