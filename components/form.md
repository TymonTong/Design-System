# Form 表单

表单用于数据录入，是 B 端产品最核心的交互场景。全部基于 `<el-form>` / `<el-form-item>` 原生组件，仅通过 CSS 变量覆盖视觉样式。

**规范**：表单项间距 **16px**，label 与输入框间距 **12px**，按钮组与表单间距 **24px**，label 宽度按同一级最长字段适配，按钮组与输入框左对齐。

---

## 颜色规范

<div style="margin:0 0 32px; overflow-x:auto;"><table style="width:100%; border-collapse:collapse; font-size:13px;"><thead><tr style="background:var(--el-color-primary-200);"><th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">属性</th><th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">El Plus 变量</th><th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">规范 Token</th><th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th></tr></thead><tbody><tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">label 文字色</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-form-label-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-900</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-900);margin:auto;"></div></td></tr><tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">必填标识色</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-form-required-asterisk-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-400</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-400);margin:auto;"></div></td></tr><tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">校验错误文字色</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-form-item-error-color</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-400</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-400);margin:auto;"></div></td></tr><tr><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">补充说明文字色</td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">自定义 <code>.form-hint</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-700</code></td><td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-700);margin:auto;"></div></td></tr></tbody></table></div>

---

## 演示

<Demo src="/demos/form-demo.html" />

## 表单校验说明

El Plus 原生校验机制：`:rules` 绑定规则，`prop` 指定字段，校验提示文字由 Element Plus 自动输出到 `el-form-item__error`，**紧贴输入框下方，不占用额外高度**。

> **补充说明文案** vs **校验提示文案** 的区别：
> - **校验提示**（`el-form-item__error`）：出现时不占高度，内容紧贴输入框，间距为 0；
> - **补充说明**（`.form-hint`）：始终占位，与输入框间距为 4px，用于字段辅助说明。

## 代码示例

```html
<el-form ref="formRef" :model="form" :rules="rules"
  label-width="80px" label-position="right" style="max-width:480px;">
  <el-form-item label="名称" prop="name">
    <el-input v-model="form.name" placeholder="请输入名称" />
  </el-form-item>
  <el-form-item style="margin-top:24px; margin-bottom:0;">
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button @click="reset">取消</el-button>
  </el-form-item>
</el-form>
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>备注</th></tr>
  </thead>
  <tbody>
    <tr><td>表单项间距</td><td><code>16px</code></td><td><code>el-form-item</code> 的 <code>margin-bottom</code>，已在 override.css 统一设定</td></tr>
    <tr><td>label 与输入框间距</td><td><code>12px</code></td><td><code>el-form-item__label</code> 的 <code>padding-right</code></td></tr>
    <tr><td>按钮组与表单间距</td><td><code>24px</code></td><td>最后一个 <code>el-form-item</code> 加 <code>margin-top: 24px</code></td></tr>
    <tr><td>label 宽度</td><td>按最长字段适配</td><td>同组表单内最长 label 的像素宽度，统一 <code>label-width</code></td></tr>
    <tr><td>label 高度</td><td>随输入框尺寸联动</td><td>default 36px / large 40px / small 28px，与 <code>--el-component-size</code> 系列变量绑定</td></tr>
    <tr><td>label 对齐方式</td><td>右对齐</td><td><code>label-position="right"</code>，B 端推荐</td></tr>
    <tr><td>按钮组对齐</td><td>与输入框左对齐</td><td>按钮 <code>el-form-item</code> 无 label，自动左对齐于输入框起点</td></tr>
    <tr><td>校验提示</td><td>不占高度，间距 0</td><td>El Plus 原生 <code>el-form-item__error</code>，<code>padding-top: 0</code></td></tr>
    <tr><td>补充说明文案</td><td>占高度，间距 4px</td><td>使用 <code>.form-hint</code> 类（12px，--el-color-text-700）</td></tr>
    <tr><td>必填标识</td><td><code>*</code> 红色</td><td>置于 label 左侧，<code>--el-color-danger-400</code></td></tr>
    <tr><td>单列表单最大宽度</td><td><code>560px</code></td><td>推荐值</td></tr>
  </tbody>
</table>

