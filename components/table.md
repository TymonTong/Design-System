# Table 表格

表格用于结构化呈现列表数据，基于 `<el-table>` / `<el-table-column>` 原生组件，通过 CSS 变量和 `.table-container` 包裹层应用视觉规范。

---

## 颜色规范

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-200);">
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">区域</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">CSS 变量</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">设计 Token</th>
        <th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">表头背景</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-table-header-bg-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-200</code></td><td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-200);border:1px solid var(--el-color-text-300);margin:auto;"></div></td></tr>
      <tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">表头文字</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-table-header-text-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-900</code></td><td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-900);margin:auto;"></div></td></tr>
      <tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">正文文字</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-table-text-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td><td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td></tr>
      <tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">行 Hover</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-table-row-hover-bg-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-100</code></td><td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-100);margin:auto;"></div></td></tr>
      <tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">边框色</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-table-border-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-300</code></td><td style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-300);margin:auto;"></div></td></tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/table-demo.html" />

---

## 代码示例

```html
<!-- 用 .table-container 包裹，提供外边框和圆角 -->
<div class="table-container">
  <el-table :data="tableData" style="width:100%">
    <el-table-column prop="date"    label="日期"  width="130" />
    <el-table-column prop="name"    label="姓名"  width="100" />
    <el-table-column prop="dept"    label="部门"  width="120" />
    <el-table-column prop="address" label="地址" />
    <el-table-column label="操作" width="216">
      <template #default="{ row }">
        <div class="tbl-actions">
          <el-button type="primary" text>编辑</el-button>
          <el-button text>管理</el-button>
          <el-dropdown trigger="click" placement="bottom-end">
            <el-button text>
              <span>更多</span>
              <el-icon><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>上传</el-dropdown-item>
                <el-dropdown-item>安装</el-dropdown-item>
                <el-dropdown-item style="color:var(--el-color-danger-400);">删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </el-table-column>
  </el-table>
</div>
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>外边框</td><td>1px solid <code>--el-color-text-300</code>，圆角 12px</td><td>由 <code>.table-container</code> 承担</td></tr>
    <tr><td>表头高度</td><td>48px</td><td>含 padding，比数据行略高</td></tr>
    <tr><td>数据行最小高度</td><td>64px</td><td>内容超出时自动撑高</td></tr>
    <tr><td>单元格内边距</td><td>上下 12px，左右 16px</td><td>全局统一</td></tr>
    <tr><td>行 Hover 背景</td><td><code>--el-color-primary-100</code></td><td>El Plus 原生 hover-row 机制</td></tr>
    <tr><td>无斑马纹</td><td>—</td><td>不使用 <code>:stripe</code> 属性</td></tr>
    <tr><td>无竖向分割线</td><td>—</td><td>不使用 <code>:border</code> 属性</td></tr>
    <tr><td>操作列规则</td><td>最多展示 3 个按钮</td><td>第 1 个主色文字按钮，后续次级；超出收入「更多↓」下拉</td></tr>
    <tr><td>操作按钮颜色</td><td>主色 + 文字色</td><td>直接展示的按钮：第 1 个 <code>type="primary" text</code>，其余 <code>text</code>（无 type，文字色）<br/>⚠️ 直接展示的删除按钮也用文字色，<strong>不使用红色</strong><br/>仅当删除收入「更多↓」下拉时，才可用 <code>color: danger</code> 标红</td></tr>
    <tr><td>操作按钮间距</td><td>12px</td><td>El Plus 原生 margin-left: 12px</td></tr>
    <tr><td>固定列规则</td><td>首列 <code>fixed="left"</code>，尾列 <code>fixed="right"</code></td><td>多选 + 关键标识固定左侧；操作列固定右侧</td></tr>
    <tr><td>接入方式</td><td><code>&lt;div class="table-container"&gt;</code> 包裹</td><td>提供外边框；开发者引入 <code>el-plus-theme.css</code> 后可用</td></tr>
  </tbody>
</table>
