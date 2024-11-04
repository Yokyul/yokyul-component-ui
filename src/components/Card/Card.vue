<template>
  <div class="yc-card" :style="{ width: width + 'px' }">
    <!-- 卡片图片 -->
    <div class="yc-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>

    <!-- 卡片描述 -->
    <div class="yc-card-summary">
      <slot>{{ summary }}</slot>
    </div>

    <!-- 卡片 footer -->
    <div class="yc-card-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import propObj from './props'

defineOptions({
  name: 'YCCard'
})

defineProps(propObj)
</script>

<style lang="scss" scoped></style>
