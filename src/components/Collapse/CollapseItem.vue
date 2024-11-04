<template>
  <div class="yc-collapse-item" :class="{ 'is-disabled': disabled }">
    <!-- 标题 -->
    <div
      class="yc-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      :id="`item-header-${name}`"
      @click="itemClickHandle"
    >
      <slot name="title">{{ title }}</slot>
      <YCIcon icon="angle-right" class="header-angle" />
    </div>

    <!-- 内容 -->
    <Transition name="yc-collapse-item-slide" v-on="transitionEvents">
      <div class="yc-collapse-item__wrapper" v-show="isActive">
        <div class="yc-collapse-item__content" :id="`item-content-${title}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { collapseItemProps, collapseContextKey } from './props'

defineOptions({
  name: 'YCCollapseItem'
})

const props = defineProps(collapseItemProps)

const collapseContext = inject(collapseContextKey) // 获取 Collapse 组件提供的数据
const isActive = computed(() => collapseContext.activeNames.value.includes(props.name)) // 当前面板是否处于展开状态

// 点击子项
const itemClickHandle = () => {
  if (props.disabled) return
  collapseContext.handleItemClick(props.name)
}

// 在这个对象里面，会指定过渡开始和结束时的不同样式
const transitionEvents = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = el.scrollHeight + 'px'
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<style lang="scss" scoped></style>
