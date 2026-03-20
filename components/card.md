# Card 卡片

卡片分为两类：**数据统计卡片**（展示关键指标数字）和**可操作展示卡片**（含交互操作，待补充）。

---

## 一、数据统计卡片 <span class="component-badge">组件</span>

### 图片资源说明

每张卡片由两层图片叠加，将文件按以下路径放入后**自动引用，无需改代码**：

<table class="spec-table">
  <thead>
    <tr><th>图层</th><th>文件路径</th><th>尺寸</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>背景图（紫）</td>
      <td><code>public/images/cards/bg-purple.png</code></td>
      <td>400×118px</td>
      <td rowspan="4">铺满卡片，缺失时显示渐变色降级</td>
    </tr>
    <tr>
      <td>背景图（黄）</td>
      <td><code>public/images/cards/bg-yellow.png</code></td>
      <td>400×118px</td>
    </tr>
    <tr>
      <td>背景图（红）</td>
      <td><code>public/images/cards/bg-red.png</code></td>
      <td>400×118px</td>
    </tr>
    <tr>
      <td>背景图（绿）</td>
      <td><code>public/images/cards/bg-green.png</code></td>
      <td>400×118px</td>
    </tr>
    <tr>
      <td>装饰图（紫）</td>
      <td><code>public/images/cards/deco-purple.png</code></td>
      <td>118×118px</td>
      <td rowspan="4">右侧装饰图，距左 282px，缺失时不显示</td>
    </tr>
    <tr>
      <td>装饰图（黄）</td>
      <td><code>public/images/cards/deco-yellow.png</code></td>
      <td>118×118px</td>
    </tr>
    <tr>
      <td>装饰图（红）</td>
      <td><code>public/images/cards/deco-red.png</code></td>
      <td>118×118px</td>
    </tr>
    <tr>
      <td>装饰图（绿）</td>
      <td><code>public/images/cards/deco-green.png</code></td>
      <td>118×118px</td>
    </tr>
  </tbody>
</table>

---

### 演示

<Demo src="/demos/card-demo.html" />

---

### 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>卡片尺寸</td><td>400×118px</td><td>宽度在卡片组中自适应等分</td></tr>
    <tr><td>卡片圆角</td><td>12px</td><td></td></tr>
    <tr><td>卡片组间距</td><td>16px</td><td>grid gap</td></tr>
    <tr><td>标签位置</td><td>x:24 y:24</td><td>16px / text-900（#3D434E）</td></tr>
    <tr><td>数值位置</td><td>x:24 y:58</td><td>28px / font-weight 500 / text-1000（#161719）</td></tr>
    <tr><td>装饰图位置</td><td>x:282，宽高 118px</td><td>右侧，与卡片同高</td></tr>
    <tr><td>图标位置</td><td>x:344 y:62，48×48px</td><td>白色图标，叠在装饰图上</td></tr>
    <tr><td>卡片描边</td><td>1px / rgba(255,255,255,0.6)</td><td>白色半透明描边，与背景融合</td></tr>
    <tr><td>图标颜色</td><td>#fff 固定白色</td><td>叠在装饰图上，始终白色</td></tr>
    <tr><td>背景降级</td><td>图片缺失时显示纯渐变色</td><td>不影响布局</td></tr>
    <tr><td>颜色主题</td><td>紫 / 黄 / 红 / 绿 四套</td><td>背景图和装饰图各备四套</td></tr>
  </tbody>
</table>

---

## 二、可操作展示卡片

### 图片资源说明

每张卡片左侧的 40×40 缩略图，将文件放入以下路径后**自动引用，无需改代码**。无图片时显示主色浅色块作为降级。

<table class="spec-table">
  <thead>
    <tr><th>文件路径</th><th>尺寸</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><code>public/images/cards/action-1.png</code></td>
      <td>40×40px</td>
      <td>第 1 张卡片缩略图</td>
    </tr>
    <tr>
      <td><code>public/images/cards/action-2.png</code></td>
      <td>40×40px</td>
      <td>第 2 张卡片缩略图</td>
    </tr>
    <tr>
      <td><code>public/images/cards/action-3.png</code></td>
      <td>40×40px</td>
      <td>第 3 张卡片缩略图，以此类推</td>
    </tr>
  </tbody>
</table>

---

### 演示

两种卡片类型的演示均已整合在上方沙盒中（数据统计卡片 + 可操作展示卡片）。

---

### 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>说明</th></tr>
  </thead>
  <tbody>
    <tr><td>卡片圆角</td><td>8px</td><td></td></tr>
    <tr><td>卡片内边距</td><td>16px</td><td></td></tr>
    <tr><td>卡片组间距</td><td>16px</td><td>grid gap</td></tr>
    <tr><td>默认边框</td><td>1px / <code>--el-color-text-400</code></td><td>#DADCE0</td></tr>
    <tr><td>Hover 边框</td><td>1px / <code>--el-color-primary-500</code></td><td></td></tr>
    <tr><td>Hover 阴影</td><td><code>0 8px 24px rgba(0,0,0,0.10)</code></td><td></td></tr>
    <tr><td>Hover 上移</td><td><code>translateY(-2px)</code></td><td>卡片轻微上浮</td></tr>
    <tr><td>点击行为</td><td>跳转至对应页面</td><td>每张卡片配置 <code>link</code> 路径</td></tr>
    <tr><td>缩略图尺寸</td><td>40×40px，圆角 8px</td><td>无图时显示主色浅色块</td></tr>
    <tr><td>图片与内容间距</td><td>16px</td><td></td></tr>
    <tr><td>标题</td><td>16px / 500 / <code>--el-color-text-1000</code></td><td>单行截断</td></tr>
    <tr><td>描述</td><td>14px / <code>--el-color-text-800</code></td><td>最多 2 行，超出截断</td></tr>
    <tr><td>操作菜单</td><td><code>&lt;el-dropdown&gt;</code></td><td>编辑 / 复制 / 删除（红色危险项）</td></tr>
  </tbody>
</table>
