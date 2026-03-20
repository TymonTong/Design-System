<template>
  <div class="stat-card" :style="{ background: fallback }">
    <img :src="bg" class="stat-card__bg" alt="" @error="e => e.target.style.display='none'" />
    <img :src="deco" class="stat-card__deco" alt="" @error="e => e.target.style.display='none'" />
    <div class="stat-card__label">{{ label }}</div>
    <div class="stat-card__value">{{ value }}</div>
    <div class="stat-card__icon">
      <el-icon><component :is="icon" /></el-icon>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label:    { type: String,  default: '数据名称' },
  value:    { type: String,  default: '0' },
  bg:       { type: String,  default: '' },
  deco:     { type: String,  default: '' },
  fallback: { type: String,  default: 'linear-gradient(135deg,#f0f0ff 0%,#dcdeff 100%)' },
  icon:     { type: [Object, String], default: null }
})
</script>

<style scoped>
.stat-card {
  position: relative;
  height: 118px;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.6);
}
.stat-card__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.stat-card__deco {
  position: absolute;
  right: 0;
  top: 0;
  width: 118px;
  height: 118px;
  object-fit: cover;
  z-index: 1;
}
.stat-card__label {
  position: absolute;
  left: 24px;
  top: 24px;
  font-size: 16px;
  line-height: 24px;
  color: var(--el-color-text-900);
  z-index: 2;
}
.stat-card__value {
  position: absolute;
  left: 24px;
  top: 58px;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  color: var(--el-color-text-1000);
  z-index: 2;
}
.stat-card__icon {
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  z-index: 2;
}
.stat-card__icon .el-icon {
  font-size: 48px;
  width: 48px;
  height: 48px;
  color: #fff !important;
}
</style>
