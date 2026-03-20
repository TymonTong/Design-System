# Input 输入框

输入框用于接收用户输入的文本信息。全部基于 `<el-input>` 原生组件，仅通过 CSS 变量覆盖视觉样式。当前只提供一种尺寸：高度 **36px**，圆角 **4px**，字号 **14px**。

---

## 颜色规范

以下是输入框各状态所引用的设计 Token，修改对应 CSS 变量即可全局生效。

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-100);">
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">状态</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">属性</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">El Plus 变量</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">规范 Token</th>
        <th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">默认</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-bg-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-0</code>（白）</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-0);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">占位符 / 图标色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-placeholder</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">悬浮 Hover</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-hover-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; white-space:nowrap;">聚焦 Focus</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-input-focus-border-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-primary-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-primary-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="3" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">禁用</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-fill-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-placeholder</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-600</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-600);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-border-color-lighter</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-300</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">错误校验</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">边框色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">提示文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:10px 12px; border:1px solid var(--el-color-text-300); font-weight:600; vertical-align:top; white-space:nowrap;">前/后缀附加</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">背景色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-fill-color</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-100);border:1px solid var(--el-color-text-300);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">文字色</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-text-color-regular</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/input-demo.html" />

## 代码示例

```html
<!-- 基础 -->
<el-input v-model="val" placeholder="请输入内容" />
<!-- 带前缀图标 -->
<el-input v-model="val" placeholder="搜索关键词">
  <template #prefix><el-icon><Search /></el-icon></template>
</el-input>
<!-- 密码框 -->
<el-input v-model="val" type="password" show-password placeholder="请输入密码" />
<!-- 可清空 -->
<el-input v-model="val" clearable placeholder="可点击清空" />
<!-- 前/后缀附加 -->
<el-input v-model="val" placeholder="请输入网址">
  <template #prepend>https://</template>
</el-input>
<!-- 文本域 -->
<el-input v-model="val" type="textarea" :rows="4" placeholder="请输入多行文本" />
<!-- 字数限制 -->
<el-input v-model="val" maxlength="20" show-word-limit placeholder="最多输入 20 个字" />
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>CSS 变量</th></tr>
  </thead>
  <tbody>
    <tr><td>高度（输入框）</td><td><code>36px</code></td><td>仅提供此一种尺寸</td></tr>
    <tr><td>最小高度（文本域）</td><td><code>36px</code></td><td>autosize minRows: 1</td></tr>
    <tr><td>圆角</td><td><code>4px</code></td><td><code>--el-border-radius-base</code></td></tr>
    <tr><td>字号</td><td><code>14px</code></td><td><code>--el-font-size-base</code></td></tr>
    <tr><td>常规边框色</td><td><code>#DADCE0</code></td><td><code>--el-color-text-400</code></td></tr>
    <tr><td>Hover / 聚焦边框色</td><td><code>#4628FF</code></td><td><code>--el-color-primary-600</code></td></tr>
    <tr><td>错误边框色</td><td><code>#ED5153</code></td><td><code>--el-color-danger-400</code></td></tr>
    <tr><td>成功边框色</td><td><code>#00BFA2</code></td><td><code>--el-color-success-400</code></td></tr>
    <tr><td>占位符 / 图标色</td><td><code>#B7BCC7</code></td><td><code>--el-color-text-600</code></td></tr>
    <tr><td>输入文字色</td><td><code>#59606E</code></td><td><code>--el-color-text-800</code></td></tr>
    <tr><td>禁用背景色</td><td><code>#F5F6F7</code></td><td><code>--el-color-text-100</code></td></tr>
    <tr><td>前/后缀背景色</td><td><code>#F5F6F7</code></td><td><code>--el-color-text-100</code></td></tr>
  </tbody>
</table>

