<template>
  <div class="app-filter" ref="containerRef">
    <!-- 左侧：筛选表单 + 展开/收起 -->
    <div class="app-filter__left" :style="{ maxWidth: leftMaxWidth + 'px' }">
      <div class="app-filter__grid" :style="{ gridTemplateColumns: gridCols }">
        <div
          class="app-filter__item"
          v-for="f in visibleFilters"
          :key="f.key"
        >
          <span class="app-filter__label" :style="{ width: labelWidth }">{{ f.label }}</span>
          <el-select
            v-if="f.type === 'select'"
            v-model="filterVals[f.key]"
            :placeholder="f.placeholder"
            class="app-filter__ctrl"
            clearable
          >
            <el-option label="全部" value="" />
            <el-option v-for="opt in (f.options || [])" :key="opt" :label="opt" :value="opt" />
          </el-select>
          <el-input
            v-else
            v-model="filterVals[f.key]"
            :placeholder="f.placeholder"
            class="app-filter__ctrl"
            clearable
          />
        </div>
      </div>
      <el-button v-if="hasMore" text class="app-filter__toggle" @click="expanded = !expanded">
        <span>{{ expanded ? '收起' : '展开' }}</span>
        <el-icon><component :is="expanded ? ArrowUp : ArrowDown" /></el-icon>
      </el-button>
    </div>

    <!-- 右侧：查询/重置按钮组 -->
    <div class="app-filter__controls">
      <el-button type="primary" plain :icon="Search" @click="$emit('search', filterVals)">查询</el-button>
      <el-button :icon="RefreshLeft" @click="handleReset">重置</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ArrowDown, ArrowUp, Search, RefreshLeft } from '@element-plus/icons-vue'

const props = defineProps({
  filters: {
    type: Array,
    default: () => [
      { label: '邮箱编号', placeholder: '请输入' },
      { label: '邮箱账号', placeholder: '请输入' },
      { label: '分组',     placeholder: '全部',  type: 'select' },
      { label: '使用状态', placeholder: '全部',  type: 'select' }
    ]
  }
})

const emit = defineEmits(['search', 'reset'])

/* 布局常量，与 filter-demo.html 保持一致 */
const CONTROLS_W = 164   /* 查询+重置按钮组估算宽度 */
const MIN_GAP    = 24    /* 筛选区与按钮区最小间距 */
const TOGGLE_W   = 62    /* 展开/收起按钮估算宽度 */
const LEFT_GAP   = 16    /* grid 与展开按钮间距 */
const ITEM_MIN   = 248
const ITEM_MAX   = 318
const COL_GAP    = 24

const containerRef   = ref(null)
const containerWidth = ref(1000)
let ro = null
onMounted(() => {
  ro = new ResizeObserver(e => { containerWidth.value = e[0].contentRect.width })
  if (containerRef.value) ro.observe(containerRef.value)
})
onUnmounted(() => ro?.disconnect())

const activeFilters = computed(() =>
  props.filters.map((f, i) => ({ ...f, key: `f${i}` }))
)
const filterVals = ref({})

const measureLabel = (str) => {
  let w = 0
  for (const ch of str) w += ch.charCodeAt(0) > 127 ? 14 : 7
  return w
}
const labelWidth = computed(() => {
  const max = Math.max(...activeFilters.value.map(f => measureLabel(f.label)))
  return `${max}px`
})

/* grid 可用宽度 = 容器 - 按钮组 - 最小间距 - 展开按钮 - grid与展开间距 */
const gridAvail = computed(() =>
  containerWidth.value - CONTROLS_W - MIN_GAP - TOGGLE_W - LEFT_GAP
)

const itemsPerRow = computed(() => {
  const avail = gridAvail.value
  for (let n = 4; n >= 1; n--) {
    if ((avail - (n - 1) * COL_GAP) / n >= ITEM_MIN) return n
  }
  return 1
})

const expanded = ref(false)
const hasMore = computed(() => activeFilters.value.length > itemsPerRow.value)
const visibleFilters = computed(() =>
  expanded.value ? activeFilters.value : activeFilters.value.slice(0, itemsPerRow.value)
)

/* 左侧容器最大宽度：超过此宽度时停止拉伸，多余空间变成中间间距 */
const leftMaxWidth = computed(() => {
  const n = itemsPerRow.value
  return n * ITEM_MAX + (n - 1) * COL_GAP + LEFT_GAP + TOGGLE_W
})

/* 用 1fr 让 CSS Grid 自动均分，避免 JS 小数点精度产生残留空白 */
const gridCols = computed(() =>
  `repeat(${itemsPerRow.value}, 1fr)`
)

const handleReset = () => {
  filterVals.value = {}
  emit('reset')
}
</script>

<style>
/*
 * 布局：[ grid ] -16px- [ 展开按钮 ] --- 最小24px --- [ 查询按钮组 ]
 * justify-content: space-between 让多余空间在筛选区和按钮区之间自然分布
 * gap: 24px 保证两者之间最小间距
 */
.app-filter {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.app-filter__left {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

/* flex:1 让 grid 填满 left 的剩余宽度，配合 1fr 列宽完美均分，无残留空白 */
.app-filter__grid {
  flex: 1;
  display: grid;
  column-gap: 24px;
  row-gap: 16px;
}

.app-filter__item {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 318px;
}

.app-filter__label {
  font-size: 14px;
  color: var(--el-color-text-800);
  line-height: 20px;
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
}

.app-filter__ctrl {
  flex: 1;
  min-width: 0;
}

.app-filter__toggle.el-button {
  min-height: 36px !important;
  padding: 0 8px !important;
  color: var(--el-color-text-700) !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  font-size: 13px;
  flex-shrink: 0;
  white-space: nowrap;
  align-self: flex-start;
}
.app-filter__toggle.el-button:hover {
  color: var(--el-color-primary-600) !important;
}

.app-filter__controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  align-self: flex-start;
}
</style>
