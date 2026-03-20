# Avatar 用户头像

用于展示用户身份，支持悬浮描边与下拉操作菜单。基于 `<el-avatar>` + `<el-dropdown>` 原生组件，仅做视觉调整。

---

## 颜色规范

<table class="spec-table">
  <thead>
    <tr><th>CSS 变量</th><th>说明</th><th>对应 Token</th><th>色值</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>头像背景</td>
      <td>默认背景色</td>
      <td><code>--el-color-primary-200</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-200);"></span>#EDF0FC</span></td>
    </tr>
    <tr>
      <td>头像图标色</td>
      <td>默认图标/文字颜色</td>
      <td><code>--el-color-primary-600</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-600);"></span>#4628FF</span></td>
    </tr>
    <tr>
      <td>Hover 描边</td>
      <td>悬浮时外描边</td>
      <td><code>--el-color-primary-400</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-400);"></span>#C2C4FF</span></td>
    </tr>
    <tr>
      <td>下拉菜单背景</td>
      <td>弹出面板背景</td>
      <td><code>--el-bg-color-overlay</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:#fff;border:1px solid var(--el-color-text-300);"></span>#FFFFFF</span></td>
    </tr>
    <tr>
      <td>下拉项悬浮背景</td>
      <td></td>
      <td><code>--el-color-primary-100</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-100);"></span>#F7F8FC</span></td>
    </tr>
    <tr>
      <td>下拉项文字 / Hover</td>
      <td>与选择器下拉完全一致</td>
      <td><code>--el-dropdown-menuItem-hover-fill</code></td>
      <td>同普通下拉面板</td>
    </tr>
  </tbody>
</table>

---

## 演示

<Demo src="/demos/avatar-demo.html" />

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>头像尺寸</td><td>40 × 40px</td><td>圆形，<code>el-avatar :size="40"</code></td></tr>
    <tr><td>头像背景</td><td><code>--el-color-primary-200</code></td><td>默认无图片时的背景色</td></tr>
    <tr><td>头像图标</td><td><code>UserFilled</code> / 20px</td><td>无用户图片时展示</td></tr>
    <tr><td>Hover 描边</td><td>2px / <code>--el-color-primary-400</code></td><td><code>box-shadow: 0 0 0 2px</code> 实现，不占位</td></tr>
    <tr><td>触发方式</td><td>click</td><td><code>el-dropdown trigger="click"</code></td></tr>
    <tr><td>下拉位置</td><td>右下对齐</td><td><code>placement="bottom-end"</code></td></tr>
    <tr><td>面板顶部</td><td>用户头像 + 姓名 + 角色</td><td>内边距 12px 16px</td></tr>
    <tr><td>菜单项图标</td><td>必须有图标</td><td>与文字间距跟随 <code>el-dropdown-item</code> 默认</td></tr>
    <tr><td>退出系统</td><td>分割线下方独立条目</td><td>颜色与普通条目完全一致，无特殊危险色</td></tr>
  </tbody>
</table>
