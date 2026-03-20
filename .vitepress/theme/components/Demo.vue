<template>
  <div class="demo-iframe-wrap">
    <!-- 沙盒标识栏 -->
    <div class="demo-sandbox-bar">
      <span class="demo-sandbox-dot"></span>
      <span class="demo-sandbox-dot"></span>
      <span class="demo-sandbox-dot"></span>
      <span class="demo-sandbox-label">沙盒隔离</span>
    </div>
    <iframe
      ref="iframeRef"
      :src="fullSrc"
      :style="{ height: iframeHeight }"
      scrolling="no"
      @load="onLoad"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src:    { type: String, required: true },
  height: { type: String, default: '400px' }
})

const iframeRef    = ref(null)
const iframeHeight = ref(props.height)

// 本地 BASE_URL='/'，GitHub Pages BASE_URL='/Design-System/'
// 自动拼接，避免 iframe 在线上 404
const fullSrc = computed(() => {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const path = props.src.startsWith('/') ? props.src : `/${props.src}`
  return `${base}${path}`
})

// 接收 demo 文件通过 postMessage 上报的实际高度，自动撑开 iframe
const onMessage = (e) => {
  if (iframeRef.value && e.source === iframeRef.value.contentWindow) {
    if (typeof e.data?.height === 'number') {
      iframeHeight.value = e.data.height + 'px'
    }
  }
}

// iframe load 后再上报一次，兜底 load 事件比 postMessage 早的情况
const onLoad = () => {
  try {
    const h = iframeRef.value?.contentDocument?.body?.scrollHeight
    if (h) iframeHeight.value = h + 'px'
  } catch (_) {}
}

onMounted(()  => window.addEventListener('message', onMessage))
onUnmounted(() => window.removeEventListener('message', onMessage))
</script>

<style>
.demo-iframe-wrap {
  border: 1px solid var(--el-color-primary-400);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
  background: #fff;
}

/* 沙盒标识栏：仿浏览器 tab 顶栏风格，主色系 */
.demo-sandbox-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--el-color-primary-200);
  border-bottom: 1px solid var(--el-color-primary-400);
}
.demo-sandbox-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--el-color-primary-400);
  flex-shrink: 0;
}
.demo-sandbox-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--el-color-primary-600);
  letter-spacing: 0.5px;
  margin-left: 4px;
}

.demo-iframe-wrap iframe {
  width: 100%;
  border: none;
  display: block;
  transition: height 0.2s;
}
</style>
