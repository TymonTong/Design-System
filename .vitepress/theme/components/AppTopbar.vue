<template>
  <div class="app-topbar">
    <!-- 左侧：折叠按钮 + 分割线 + 面包屑 -->
    <div class="app-topbar__left">
      <el-button text class="app-topbar__collapse-btn app-collapse-btn" @click="toggleCollapse">
        <el-icon><component :is="collapsed ? DArrowRight : DArrowLeft" /></el-icon>
        <span>{{ collapsed ? '展开' : '收起' }}</span>
      </el-button>
      <el-divider direction="vertical" class="app-topbar__divider" />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, i) in breadcrumbs" :key="i">
          {{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 右侧：用户头像 + 下拉菜单 -->
    <div class="app-topbar__right">
      <el-dropdown trigger="click" placement="bottom-end" popper-class="user-dropdown-popper">
        <el-avatar :size="40" class="user-avatar">
          <el-icon :size="20"><UserFilled /></el-icon>
        </el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- 下拉头部：仅显示名称和角色，无头像 -->
            <div class="user-dropdown-header">
              <div class="user-dropdown-info">
                <div class="user-dropdown-name">{{ userName }}</div>
                <div class="user-dropdown-role">{{ userRole }}</div>
              </div>
            </div>
            <!-- 分割线：距左右边框各12px，下方距选项8px -->
            <el-divider style="margin:0 12px 8px; width:calc(100% - 24px);" />
            <el-dropdown-item><el-icon><UserFilled /></el-icon>个人信息</el-dropdown-item>
            <el-dropdown-item><el-icon><Setting /></el-icon>系统设置</el-dropdown-item>
            <el-dropdown-item><el-icon><SwitchButton /></el-icon>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { DArrowLeft, DArrowRight, UserFilled, Setting, SwitchButton } from '@element-plus/icons-vue'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  },
  breadcrumbs: {
    type: Array,
    default: () => ['账号管理', '账号列表']
  },
  userName: {
    type: String,
    default: '张三'
  },
  userRole: {
    type: String,
    default: '管理员'
  }
})

const emit = defineEmits(['update:collapsed'])

const toggleCollapse = () => {
  emit('update:collapsed', !props.collapsed)
}
</script>

<style>
/* ── 顶部栏容器 ── */
.app-topbar {
  height: 56px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
}
.app-topbar__left {
  display: flex;
  align-items: center;
}
.app-topbar__right {
  display: flex;
  align-items: center;
}

/* ── 折叠按钮 ── */
.app-topbar__collapse-btn.el-button {
  min-height: 36px !important;
  padding: 0 8px !important;
  gap: 6px;
  font-size: 13px;
  color: var(--el-color-text-700) !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.app-topbar__collapse-btn.el-button:hover {
  color: var(--el-color-primary-600) !important;
  background: transparent !important;
}

/* ── 竖向分割线：高 16px，左右各 12px ── */
.app-topbar__divider.el-divider--vertical {
  height: 16px !important;
  margin: 0 12px !important;
  border-color: var(--el-color-text-400) !important;
}

/* ── 用户头像 ── */
.user-avatar {
  background: var(--el-color-primary-200) !important;
  cursor: pointer;
  flex-shrink: 0;
}
.user-avatar .el-icon {
  color: var(--el-color-primary-600) !important;
}
.user-avatar:hover {
  box-shadow: 0 0 0 2px var(--el-color-primary-400);
}

/* ── 下拉面板宽度：220px ── */
.user-dropdown-popper {
  width: 220px !important;
  min-width: 220px !important;
}

/* ── 下拉头部：上下 8px，左右 12px，仅文字无头像 ── */
.user-dropdown-header {
  padding: 8px 12px;
}
.user-dropdown-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.user-dropdown-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--el-color-text-1000);
  line-height: 20px;
}
.user-dropdown-role {
  font-size: 12px;
  color: var(--el-color-text-700);
  line-height: 16px;
}

/* ── 下拉条目：高 40px，图标 16px，hover 颜色 ── */
.user-dropdown-popper .el-dropdown-menu__item {
  height: 40px !important;
  box-sizing: border-box !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
.user-dropdown-popper .el-dropdown-menu__item .el-icon {
  font-size: 16px !important;
  width: 16px !important;
  height: 16px !important;
  flex-shrink: 0;
}
.user-dropdown-popper .el-dropdown-menu__item:not(.is-disabled):hover {
  color: var(--el-color-text-900) !important;
  background-color: var(--el-color-text-100) !important;
}
</style>
