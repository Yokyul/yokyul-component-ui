<template>
  <div
    class="yc-avatar"
    :class="[shape, { isNotImg: !url }]"
    :style="{
      width: size + 'px',
      height: size + 'px'
    }"
  >
    <!-- img头像 -->
    <img v-if="url" class="yc-avatar-img" :src="url" :style="{ objectFit: fit }" />

    <!-- 图标头像 -->
    <YCIcon v-if="icon" :icon="icon" />

    <!-- 自定义头像内容 -->
    <div v-if="$slots.default">
      <slot />
    </div>
  </div>
</template>

<script setup>
import propObj from './props'

defineOptions({
  name: 'YCAvatar'
})

defineProps(propObj)
</script>

<style lang="scss" scoped></style>
