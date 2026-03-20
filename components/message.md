# Message 消息提示

消息提示用于操作反馈，以全局顶部居中弹出的方式展示轻量级提示信息，3 秒后自动消失。全部基于 `ElMessage` 原生 API，仅通过 CSS 变量覆盖视觉样式。

---

## 颜色规范

<div style="margin:0 0 32px; overflow-x:auto;">
  <table style="width:100%; border-collapse:collapse; font-size:13px;">
    <thead>
      <tr style="background:var(--el-color-primary-200);">
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300); white-space:nowrap;">类型</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">背景色 Token</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">边框色 Token</th>
        <th style="padding:10px 12px; text-align:left; border:1px solid var(--el-color-text-300);">图标/文字色 Token</th>
        <th style="padding:10px 12px; text-align:center; border:1px solid var(--el-color-text-300);">预览</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); white-space:nowrap;">success</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success-300</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-success-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-success-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">warning</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-warning-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-warning-300</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-warning-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-warning-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">error</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-300</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-danger-400</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-danger-400);margin:auto;"></div></td>
      </tr>
      <tr>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);">info</td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-info-100</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-info-300</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300);"><code>--el-color-text-800</code></td>
        <td style="padding:10px 12px; border:1px solid var(--el-color-text-300); text-align:center;"><div style="width:32px;height:20px;border-radius:3px;background:var(--el-color-text-800);margin:auto;"></div></td>
      </tr>
    </tbody>
  </table>
</div>

---

## 演示

<Demo src="/demos/message-demo.html" />

## 代码示例

```javascript
import { ElMessage } from 'element-plus'

// 成功
ElMessage({ message: '操作成功', type: 'success' })
// 警告
ElMessage({ message: '请注意，该操作不可逆', type: 'warning' })
// 错误
ElMessage({ message: '操作失败，请稍后重试', type: 'error' })
// 可关闭（不自动关闭）
ElMessage({ message: '这条消息可手动关闭', type: 'success', showClose: true, duration: 0 })
// 自定义时长
ElMessage({ message: '5 秒消息', type: 'info', showClose: true, duration: 5000 })
```

---

## 设计规范

<table class="spec-table">
  <thead>
    <tr><th>属性</th><th>值</th><th>备注</th></tr>
  </thead>
  <tbody>
    <tr><td>出现位置</td><td>顶部居中</td><td>El Plus 默认行为，不可更改</td></tr>
    <tr><td>默认时长</td><td><code>3000ms</code></td><td>3 秒后自动消失</td></tr>
    <tr><td>圆角</td><td><code>4px</code></td><td><code>--el-border-radius-base</code></td></tr>
    <tr><td>字号</td><td><code>14px</code></td><td><code>--el-font-size-base</code></td></tr>
    <tr><td>成功色</td><td><code>#00BFA2</code></td><td><code>--el-color-success-400</code></td></tr>
    <tr><td>警告色</td><td><code>#FFA100</code></td><td><code>--el-color-warning-400</code></td></tr>
    <tr><td>错误色</td><td><code>#ED5153</code></td><td><code>--el-color-danger-400</code></td></tr>
    <tr><td>普通色</td><td><code>#59606E</code></td><td><code>--el-color-text-800</code></td></tr>
  </tbody>
</table>

## 使用规则

**成功（success）**：操作完成，数据已保存、提交成功等正向反馈  
**警告（warning）**：需用户注意的非错误信息，如不可逆操作提醒  
**错误（error）**：操作失败，网络异常、数据校验不通过等负向反馈  
**普通（info）**：一般性提示，如任务已加入队列、状态说明等  
**时长建议**：短文案 3s，长文案 5s，重要操作建议 showClose: true 要求用户手动关闭
