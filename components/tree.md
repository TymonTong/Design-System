# Tree 树形控件

树形控件用于展示具有层级关系的数据结构。全部基于 `<el-tree>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

---

## 颜色规范

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-200);">
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">状态</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">El Plus 变量</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">规范 Token</th>
        <th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">节点文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-tree-text-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-1000</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-1000);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">Hover 背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-tree-node-hover-bg-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-100);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">选中背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">覆盖 <code>.is-current</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-200</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-200);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">选中文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">覆盖 <code>.is-current</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">禁用文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-disabled-text-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-500</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-500);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/tree-demo.html" />

## 代码示例

```html
<!-- 基础树形 -->
<el-tree :data="treeData" :props="defaultProps" default-expand-all @node-click="handleNodeClick" />
<!-- 可勾选 -->
<el-tree :data="treeData" :props="defaultProps" show-checkbox node-key="id" :default-checked-keys="checkedKeys" />
<!-- 可过滤 -->
<el-input v-model="filterValue" placeholder="输入关键字过滤" clearable />
<el-tree ref="treeRef" :data="treeData" :props="defaultProps" :filter-node-method="filterNode" default-expand-all />
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>备注</th></tr>
  </thead>
  <tbody>
    <tr><td>节点行高</td><td><code>36px</code></td><td><code>--el-tree-node-content-height: 36px</code></td></tr>
    <tr><td>节点字号</td><td><code>14px</code></td><td><code>--el-font-size-base</code></td></tr>
    <tr><td>节点文字色</td><td><code>#161719</code></td><td><code>--el-color-text-1000</code></td></tr>
    <tr><td>Hover 背景</td><td><code>#F7F8FC</code></td><td><code>--el-color-primary-100</code></td></tr>
    <tr><td>选中背景</td><td><code>#EDF0FC</code></td><td><code>--el-color-primary-200</code></td></tr>
    <tr><td>选中文字色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>禁用文字色</td><td><code>#CCD0D6</code></td><td><code>--el-color-text-500</code></td></tr>
    <tr><td>层级缩进</td><td><code>18px</code></td><td>每层级缩进，El Plus 默认值</td></tr>
  </tbody>
</table>

