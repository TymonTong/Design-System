# 交付包下载

产品经理使用 Cursor 生成原型时，需要将交付包解压后用 Cursor 打开文件夹。  
交付包在每次规范更新发布后自动重新生成，始终是最新版本。

<div class="download-section">
  <div class="download-card">
    <div class="download-card__icon">📦</div>
    <div class="download-card__info">
      <div class="download-card__title">设计规范交付包</div>
      <div class="download-card__desc">包含主题样式、4 个封装组件、基础规范、26 个组件规范文档、AI 规则文件</div>
      <div class="download-card__files">
        · el-plus-theme.css &nbsp;· AppSidebar / Topbar / Filter / StatCard.vue<br/>
        · colors / typography / spacing / border 规范<br/>
        · 26 个组件规范文档 &nbsp;· 3 个封装组件说明 &nbsp;· .cursorrules
      </div>
    </div>
    <a class="download-btn" href="/Design-System/设计规范交付包.zip" download>
      ⬇ 下载交付包
    </a>
  </div>
</div>

---

## 使用步骤

<div class="steps">
  <div class="step">
    <div class="step__num">1</div>
    <div class="step__content">
      <div class="step__title">解压文件</div>
      <div class="step__desc">将下载的 <code>设计规范交付包.zip</code> 解压到本地任意位置</div>
    </div>
  </div>
  <div class="step">
    <div class="step__num">2</div>
    <div class="step__content">
      <div class="step__title">用 Cursor 打开文件夹</div>
      <div class="step__desc">打开 Cursor → File → Open Folder → 选择解压后的文件夹（不要只打开单个文件）</div>
    </div>
  </div>
  <div class="step">
    <div class="step__num">3</div>
    <div class="step__content">
      <div class="step__title">初始化项目（只做一次）</div>
      <div class="step__desc">在 Cursor 对话框输入：<code>帮我初始化项目</code>，AI 自动完成环境搭建</div>
    </div>
  </div>
  <div class="step">
    <div class="step__num">4</div>
    <div class="step__content">
      <div class="step__title">直接描述页面</div>
      <div class="step__desc">告诉 AI 你要做什么页面，无需说任何特殊关键词，AI 自动遵循设计规范</div>
    </div>
  </div>
</div>

<style>
.download-section { margin: 24px 0 32px; }
.download-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.download-card__icon { font-size: 40px; flex-shrink: 0; }
.download-card__info { flex: 1; min-width: 0; }
.download-card__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}
.download-card__desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}
.download-card__files {
  font-size: 12px;
  color: var(--vp-c-text-3);
  line-height: 1.8;
}
.download-btn {
  flex-shrink: 0;
  padding: 10px 24px;
  background: var(--vp-c-brand-1);
  color: #fff !important;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s;
}
.download-btn:hover { background: var(--vp-c-brand-2); }

.steps { display: flex; flex-direction: column; gap: 16px; margin: 24px 0; }
.step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px 20px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.step__num {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.step__title { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); margin-bottom: 4px; }
.step__desc { font-size: 13px; color: var(--vp-c-text-2); line-height: 1.6; }
</style>
