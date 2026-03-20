<template>
  <div class="app-sidebar" :style="{ width: collapsed ? '80px' : '240px' }">
    <!-- Logo 区域：始终保留固定高度，图片缺失时内部为空 -->
    <div class="app-sidebar__logo">
      <img
        v-if="!collapsed && !logoFullError"
        :src="logoFull"
        class="app-sidebar__logo-full"
        alt="Logo"
        @error="logoFullError = true"
      />
      <img
        v-if="collapsed && !logoIconError"
        :src="logoIcon"
        class="app-sidebar__logo-icon"
        alt="Logo"
        @error="logoIconError = true"
      />
    </div>

    <!-- 导航菜单 -->
    <el-menu
      :default-active="activeIndex"
      :collapse="collapsed"
      :style="collapsed ? 'width:80px' : 'width:240px'"
      class="app-sidebar__menu"
      @select="val => activeIndex = val"
    >
      <template v-for="item in menuItems" :key="item.index">
        <!-- 一级：有子项 → sub-menu -->
        <el-sub-menu v-if="item.children" :index="item.index">
          <template #title>
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.label }}</span>
          </template>
          <!-- 二级：可能有子项（三级） -->
          <template v-for="child in item.children" :key="child.index">
            <el-sub-menu v-if="child.children" :index="child.index">
              <template #title>{{ child.label }}</template>
              <el-menu-item
                v-for="gc in child.children"
                :key="gc.index"
                :index="gc.index"
              >{{ gc.label }}</el-menu-item>
            </el-sub-menu>
            <el-menu-item v-else :index="child.index">{{ child.label }}</el-menu-item>
          </template>
        </el-sub-menu>
        <!-- 一级：无子项 → 直接 menu-item -->
        <el-menu-item v-else :index="item.index">
          <el-icon><component :is="item.icon" /></el-icon>
          <template #title>{{ item.label }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Cpu, Files, PictureFilled, Setting } from '@element-plus/icons-vue'

const logoFullError = ref(false)
const logoIconError = ref(false)

defineProps({
  collapsed: {
    type: Boolean,
    default: false
  },
  logoFull: {
    type: String,
    default: '/images/logo/logo-full.png'
  },
  logoIcon: {
    type: String,
    default: '/images/logo/logo-icon.png'
  },
  menuItems: {
    type: Array,
    default: () => [
      {
        index: 's1', label: '账号管理', icon: User,
        children: [
          { index: 's1-1', label: '账号列表' },
          {
            index: 's1-2', label: '作品管理',
            children: [
              { index: 's1-2-1', label: '视频作品' },
              { index: 's1-2-2', label: '图文作品' },
              { index: 's1-2-3', label: '账号审核' }
            ]
          },
          { index: 's1-3', label: '操作日志' }
        ]
      },
      { index: 's2', label: '自动化中心', icon: Cpu },
      {
        index: 's3', label: '任务管理', icon: Files,
        children: [
          { index: 's3-1', label: '任务列表' },
          { index: 's3-2', label: '任务配置' }
        ]
      },
      {
        index: 's4', label: '素材管理', icon: PictureFilled,
        children: [
          { index: 's4-1', label: '图片素材' },
          { index: 's4-2', label: '视频素材' }
        ]
      },
      { index: 's5', label: '系统管理', icon: Setting },
      { index: 's6', label: '个人中心', icon: User }
    ]
  }
})

const activeIndex = ref('s1-2-1')
</script>

<style>
/* 侧边栏容器：宽度由外部 collapsed prop 控制，高度由父容器决定 */
.app-sidebar {
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
  overflow: hidden;
  height: 100%;
  flex-shrink: 0;
}
/* Logo 区域：高度 56px，内容居中 */
.app-sidebar__logo {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 16px;
}
.app-sidebar__logo-full {
  height: 32px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
}
.app-sidebar__logo-icon {
  height: 32px;
  width: 32px;
  object-fit: contain;
}
/* 菜单撑满剩余空间，无右侧边框，无顶部分割线 */
.app-sidebar__menu.el-menu {
  flex: 1;
  overflow-y: auto;
  border-right: none !important;
  border-top: none !important;
}
/* 选中状态背景 */
.app-sidebar__menu .el-menu-item.is-active {
  background-color: var(--el-color-primary-200) !important;
}
</style>
