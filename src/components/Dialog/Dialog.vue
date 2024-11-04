<template>
  <!-- 显隐添加过渡效果 -->
  <transition name="yc-dialog-fade">
    <div v-show="visible" class="yc-dialog_wrapper">
      <div class="yc-dialog" :style="{ width, marginTop: top }">
        <!-- 头部 -->
        <div class="yc-dialog_header">
          <slot name="title">
            <span class="yc-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="yc-dialog_headerbtn" @click="clickHandle">
            <YCIcon icon="xmark" />
          </button>
        </div>
        <!-- 中间内容部分 -->
        <div class="yc-dialog_body">
          <slot />
        </div>
        <!-- 底部 -->
        <div class="yc-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import propObj from './props'

defineOptions({
  name: 'YCDialog'
})
defineProps(propObj)

const emit = defineEmits(['close'])

// 关闭按钮
function clickHandle() {
  emit('close')
}
</script>

<style lang="scss" scoped></style>
