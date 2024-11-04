<template>
  <div class="yc-dropdown">
    <YCTooltip
      :trigger="trigger"
      :placement="placement"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChangeHandler"
      ref="tooltipRef"
    >
      <slot />
      <template #content>
        <ul class="yc-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <!-- 分割线 -->
            <li v-if="item.divided" class="divided-placeholder"></li>
            <li
              class="yc-dropdown__item"
              :class="{
                'is-disabled': item.disabled
              }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <RenderVNode :v-node="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </YCTooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import propObj from './props'
import RenderVNode from '../Common/RenderVnode'

defineOptions({
  name: 'YCDropdown'
})
const emit = defineEmits(['select', 'visible-change'])

const props = defineProps(propObj)

const tooltipRef = ref(null)

const itemClick = (item) => {
  if (item.disabled) return
  emit('select', item)
  // 判断点击后是否关闭下拉菜单
  if (props.hideAfterClick) tooltipRef.value.hide()
}

const visibleChangeHandler = (e) => {
  emit('visible-change', e)
}

defineExpose({
  show: () => {
    tooltipRef.value.show()
  },
  hide: () => {
    tooltipRef.value.hide()
  }
})
</script>

<style lang="scss" scoped>
.bar {
  color: red;
  font-style: italic;
}
</style>
