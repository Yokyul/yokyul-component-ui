<template>
  <button
    ref="_ref"
    class="yc-button"
    :class="{
      [`yc-button--${type}`]: type,
      [`yc-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled || loading
    }"
    :disabled="disabled || loading"
  >
    <YCIcon icon="spinner" spin v-if="loading" />
    <YCIcon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import propObj from './props'

defineOptions({
  name: 'YCButton'
})
defineProps(propObj)

const _ref = ref(null) // 获取到 button 元素

defineExpose({
  ref: _ref
})
</script>

<style lang="scss" scoped></style>
