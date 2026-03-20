# Menu 菜单

垂直可折叠导航菜单。全部使用 `<el-menu>` / `<el-sub-menu>` / `<el-menu-item>` 原生组件，仅通过 CSS 变量和少量覆盖调整颜色、高度、圆角与缩进。

---

## 颜色规范

<table class="spec-table">
  <thead>
    <tr><th>CSS 变量</th><th>说明</th><th>对应 Token</th><th>色值</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--el-menu-bg-color</code></td>
      <td>菜单背景</td>
      <td>白色</td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:#fff;border:1px solid var(--el-color-text-300);"></span>#FFFFFF</span></td>
    </tr>
    <tr>
      <td><code>--el-menu-text-color</code></td>
      <td>默认文字</td>
      <td><code>--el-color-text-800</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-800);"></span>#59606E</span></td>
    </tr>
    <tr>
      <td><code>--el-menu-active-color</code></td>
      <td>选中文字</td>
      <td><code>--el-color-primary-600</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-600);"></span>#4628FF</span></td>
    </tr>
    <tr>
      <td><code>--el-menu-hover-bg-color</code></td>
      <td>悬浮背景</td>
      <td><code>--el-color-primary-100</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-100);"></span>#F7F8FC</span></td>
    </tr>
    <tr>
      <td><code>--el-menu-hover-text-color</code></td>
      <td>悬浮文字</td>
      <td><code>--el-color-primary-600</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-600);"></span>#4628FF</span></td>
    </tr>
    <tr>
      <td><code>.el-menu-item.is-active</code> 背景</td>
      <td>选中项背景</td>
      <td><code>--el-color-primary-200</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-200);"></span>#EDF0FC</span></td>
    </tr>
    <tr>
      <td>折叠按钮文字</td>
      <td>默认颜色</td>
      <td><code>--el-color-text-700</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-text-700);"></span>#8E95A3</span></td>
    </tr>
    <tr>
      <td>折叠按钮 Hover</td>
      <td>悬浮变主色</td>
      <td><code>--el-color-primary-600</code></td>
      <td><span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:16px;height:16px;border-radius:4px;background:var(--el-color-primary-600);"></span>#4628FF</span></td>
    </tr>
  </tbody>
</table>

---

## 演示

<Demo src="/demos/menu-demo.html" />

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>菜单方向</td><td>垂直</td><td>仅提供垂直模式</td></tr>
    <tr><td>展开总宽</td><td>240px</td><td>含四边 16px 内边距，内容区 208px</td></tr>
    <tr><td>折叠总宽</td><td>80px</td><td>含四边 16px 内边距，内容区 48px（正方形图标）</td></tr>
    <tr><td>菜单内边距</td><td>四边 16px</td><td>通过 CSS 设置在根 <code>.el-menu</code> 上</td></tr>
    <tr><td>菜单项高度</td><td>48px</td><td><code>--el-menu-item-height: 48px</code></td></tr>
    <tr><td>菜单项圆角</td><td>4px</td><td>所有级别统一</td></tr>
    <tr><td>菜单项间距</td><td>0</td><td>各项之间无间距</td></tr>
    <tr><td>一级 padding-left</td><td>12px</td><td>Figma: 图标容器 x=12</td></tr>
    <tr><td>二级 padding-left</td><td>48px</td><td>Figma: 文字 x=48（12+24图标+10间距+约2px）</td></tr>
    <tr><td>三级 padding-left</td><td>64px</td><td>Figma: 文字 x=64</td></tr>
    <tr><td>图标规则</td><td>一级必须有图标</td><td>折叠时图标是唯一可见内容；二级及以下仅文字</td></tr>
    <tr><td>折叠交互</td><td>El Plus 原生 collapse prop</td><td>丝滑宽度过渡，折叠后仅显示图标居中</td></tr>
    <tr><td>折叠按钮位置</td><td>侧边栏底部</td><td>菜单列表下方，顶部分割线隔开</td></tr>
    <tr><td>折叠按钮样式</td><td>文字按钮（text）</td><td>无边框、无背景，图标 + 文字</td></tr>
    <tr><td>展开状态按钮</td><td><code>DArrowLeft</code> + 收起</td><td>图标 + 文字，文字按钮宽度自适应</td></tr>
    <tr><td>折叠状态按钮</td><td><code>DArrowRight</code> + 展开</td><td>图标 + 文字，文字按钮宽度自适应</td></tr>
    <tr><td>折叠按钮高度</td><td>36px</td><td>与组件尺寸规范一致</td></tr>
    <tr><td>折叠按钮颜色</td><td><code>--el-color-text-700</code></td><td>Hover 变 <code>--el-color-primary-600</code></td></tr>
    <tr><td>分割线</td><td>1px / <code>--el-color-text-300</code></td><td>按钮区域顶部</td></tr>
  </tbody>
</table>
