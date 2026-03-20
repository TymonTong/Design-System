# 表格筛选 <span class="component-badge">组件</span>

筛选区域结构：**【筛选表单组（列间距 24，行间距 16）+ 展开/收起按钮（间距 12）】（间距 16）+【查询按钮组（间距 12）】**

- 只要有筛选项，就显示查询/重置按钮组
- 筛选项超出第一行容量时，自动出现展开/收起按钮
- 每个筛选项宽度：最小 248px，最大 318px，同行等宽

---

## 使用方式

直接引用 `<AppFilter />` 即可，传入筛选项配置数组：

```html
<!-- 默认状态（4 个筛选项） -->
<AppFilter />

<!-- 传入自定义筛选项 -->
<AppFilter
  :filters="[
    { label: '账号名称', placeholder: '请输入' },
    { label: '所属分组', placeholder: '全部', type: 'select' },
    { label: '使用状态', placeholder: '全部', type: 'select' },
    { label: '创建时间', placeholder: '请选择' }
  ]"
  @search="onSearch"
  @reset="onReset"
/>
```

---

## 演示

<Demo src="/demos/filter-demo.html" />

---

## Props 参数

<table class="spec-table">
  <thead>
    <tr><th>参数名</th><th>类型</th><th>默认值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td><code>filters</code></td><td>Array</td><td>内置 4 个示例筛选项</td><td>筛选项配置数组，每项含 <code>label</code>、<code>placeholder</code>、可选 <code>type: 'select'</code></td></tr>
  </tbody>
</table>

---

## Events 事件

<table class="spec-table">
  <thead>
    <tr><th>事件名</th><th>参数</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td><code>search</code></td><td>filterVals（各项当前值）</td><td>点击「查询」按钮触发</td></tr>
    <tr><td><code>reset</code></td><td>无</td><td>点击「重置」按钮触发，内部自动清空所有输入值</td></tr>
  </tbody>
</table>

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>整体结构</td><td>【表单组 + 展开收起】（16px）+【查询按钮组】</td><td>右侧控件区始终固定顶部对齐</td></tr>
    <tr><td>表单项宽度</td><td>min 248px / max 318px，同行等宽</td><td>CSS grid 精确列宽，不拉伸</td></tr>
    <tr><td>表单项布局</td><td>label 左 + 控件右</td><td>label 宽度 = 组内最长文字字符数 × 14px</td></tr>
    <tr><td>label 与控件间距</td><td>8px</td><td></td></tr>
    <tr><td>列间距</td><td>24px</td><td><code>column-gap: 24px</code></td></tr>
    <tr><td>行间距</td><td>16px</td><td><code>row-gap: 16px</code></td></tr>
    <tr><td>展开/收起与表单间距</td><td>12px</td><td>fi-left 的 <code>gap: 12px</code></td></tr>
    <tr><td>查询按钮组</td><td>只要有筛选项就显示</td><td>无论筛选项多少，查询/重置始终可见</td></tr>
    <tr><td>展开收起时机</td><td>筛选项 &gt; 第一行容量时自动出现</td><td>由容器宽度动态计算</td></tr>
  </tbody>
</table>
