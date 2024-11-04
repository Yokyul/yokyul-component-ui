<template>
  <div class="yc-collapse">
    <slot />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { collapseProps, collapseContextKey } from './props'

defineOptions({
  name: 'YCCollapse'
})

const emit = defineEmits(['change', 'update:modelValue'])

const props = defineProps(collapseProps)

const activeNames = ref(props.modelValue) // 已展开面板 name 的数组

/**
 * 用户点击 CollapseItem 时，触发该方法
 * @param {String} itemName 点击项的 name 值
 */
const handleItemClick = (itemName) => {
  let _activeNamesArr = [...activeNames.value]
  if (props.accordion) {
    // 手风琴模式，只能展开一个。如果已经展开，则关闭
    _activeNamesArr = [activeNames.value[0] === itemName ? '' : itemName]
  } else {
    // 普通折叠面板，可以展开多个
    const index = _activeNamesArr.indexOf(itemName)
    if (index > -1) {
      // 当前点击的项已经存在于数组中。因此需要从数组中删除这个项
      _activeNamesArr.splice(index, 1)
    } else {
      // 不存在，则把这个项添加到数组中
      _activeNamesArr.push(itemName)
    }
  }
  activeNames.value = _activeNamesArr

  emit('update:modelValue', _activeNamesArr)
  emit('change', _activeNamesArr)
}

// 因为 CollapseItem 组件是通过插槽的形式插入的，因此使用依赖注入的形式来为 CollapseItem 组件提供 handleItemClick 方法
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style lang="scss" scoped></style>
