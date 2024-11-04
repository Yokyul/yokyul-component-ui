<template>
  <div
    class="yc-pager"
    :class="{
      [`yc-pager--${type}`]: type,
      [`yc-pager--${size}`]: size
    }"
  >
    <!-- 首页 -->
    <a :class="{ disabled: currentPage === 1 }" @click.prevent="goToFirstPage">首页</a>
    <!-- 上一页<< -->
    <a
      :class="{ disabled: currentPage === 1 }"
      :disabled="currentPage === 1"
      @click.prevent="prevClick"
    >
      <YCIcon icon="angles-left" />
    </a>

    <!-- 渲染中间页码 -->
    <template v-if="total > pagerCount && currentPage > 5">
      <a @click.prevent="pageClick(1)">1</a>
      <a>
        <YCIcon icon="ellipsis" size="sm" />
      </a>
    </template>
    <a
      v-for="page in pagerList"
      :key="page"
      :class="{ active: page === currentPage }"
      @click.prevent="pageClick(page)"
    >
      {{ page }}
    </a>
    <template v-if="total > pagerCount && currentPage < total - 4">
      <a>
        <YCIcon icon="ellipsis" size="sm" />
      </a>
      <a @click.prevent="pageClick(total)">{{ total }}</a>
    </template>

    <!-- 下一页>> -->
    <a
      :class="{ disabled: currentPage === total }"
      :disabled="currentPage === total"
      @click.prevent="nextClick"
    >
      <YCIcon icon="angles-right" />
    </a>
    <!-- 尾页 -->
    <a :class="{ disabled: currentPage === total }" @click.prevent="goToLastPage">尾页</a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import propObj from './props'

defineOptions({
  name: 'YCPager'
})
const props = defineProps(propObj)

// 需要渲染的页码
const pagerList = computed(() => {
  const renderPage = []
  if (props.total <= props.pagerCount) {
    // 全部渲染
    for (let i = 1; i <= props.total; i++) {
      renderPage.push(i)
    }
  } else {
    if (props.currentPage <= 5) {
      // 当前页比较靠前：[1] 2 3 4 5 ... 20
      for (let i = 1; i <= 5; i++) {
        renderPage.push(i) // 1 2 3 4 5
      }
    } else if (props.currentPage >= props.total - 4) {
      // 当前页比较靠后：1 ... 16 17 18 19 [20]
      for (let i = props.total - 4; i <= props.total; i++) {
        renderPage.push(i) // 16 17 18 19 20
      }
    } else {
      // 当前页比较靠中间：1 ... 5 6 [7] 8 9 ... 20
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        renderPage.push(i) // 5 6 7 8 9
      }
    }
  }

  return renderPage
})

const emit = defineEmits(['current-change'])

// 页码跳转
const goToFirstPage = () => {
  emit('current-change', 1)
}
const goToLastPage = () => {
  emit('current-change', props.total)
}

const prevClick = () => {
  if (props.currentPage === 1) return
  emit('current-change', props.currentPage - 1)
}

const nextClick = () => {
  if (props.currentPage === props.total) return
  emit('current-change', props.currentPage + 1)
}

const pageClick = (page) => {
  emit('current-change', page)
}
</script>

<style lang="scss" scoped></style>
