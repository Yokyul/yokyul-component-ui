<template>
  <div class="yc-tooltip" v-on="outerEvents">
    <!-- 触发元素 -->
    <div class="yc-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot />
    </div>

    <!-- 提示框元素 -->
    <div class="yc-tooltip__popper" ref="popperRef" v-if="isOpen">
      <slot name="content">{{ content }}</slot>
      <!-- 箭头 -->
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, computed } from 'vue'
import { createPopper } from '@popperjs/core'
import propObj from './props'
import { debounce } from 'lodash-es'

defineOptions({
  name: 'YCTooltip'
})

const props = defineProps(propObj)
const emit = defineEmits(['visible-change'])

const triggerRef = ref(null) // 触发元素
const popperRef = ref(null) // 提示框元素
const isOpen = ref(false) // 提示框是否显示

let events = reactive({}) // 触发元素 需要绑定的事件
let outerEvents = reactive({}) // 容器元素 需要绑定的事件

// 用于构建 createPopper 方法的第三个参数
const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 6] // 提示框箭头偏移量
      }
    }
  ]
}))

let popperInstance = null // popper 实例

// 监听 isOpen，为 true 创建 popper 实例。为 false 销毁 popper 实例
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerRef.value && popperRef.value) {
        // 创建 popper 实例
        popperInstance = createPopper(triggerRef.value, popperRef.value, popperOptions.value)
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' }
)

/**
 * 给触发元素绑定相应事件
 */
const attachEvents = () => {
  if (props.trigger === 'hover') {
    // 鼠标移入触发
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    // 点击触发
    events['click'] = () => (isOpen.value ? close() : open()) // 根据 isOpen 的值来判断调用打开方法还是隐藏方法
  }
}

const open = () => {
  closeDebounce.cancel()
  openDebounce()
}
const close = () => {
  openDebounce.cancel() // 因为有延迟触发的存在，所以需要考虑在触发之前就取消的情况
  closeDebounce()
}

const openDebounce = debounce(() => {
  isOpen.value = true
  emit('visible-change', true)
}, props.openDelay)

const closeDebounce = debounce(() => {
  isOpen.value = false
  emit('visible-change', false)
}, props.closeDelay)

// 非手动触发时，需要绑定事件
if (!props.manual) {
  attachEvents()
}

// 手动触发时，给用户提供打开/关闭提示框的方法
defineExpose({
  show: open,
  hide: close
})
</script>

<style lang="scss" scoped></style>
