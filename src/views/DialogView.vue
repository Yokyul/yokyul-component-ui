<template>
  <h1 class="row-title">对话框示例</h1>
  <div class="row">
    <YCButton type="primary" @click="visible = true">基本使用</YCButton>
    <YCButton type="primary" @click="visible2 = true">自定义使用</YCButton>
    <YCButton type="primary" @click="visible3 = true">插槽</YCButton>
  </div>

  <YCDialog v-model:visible="visible" @close="visible = false">这是一个基本的对话框</YCDialog>
  <YCDialog
    v-model:visible="visible2"
    @close="visible2 = false"
    title="这是一个自定义标题"
    width="30vw"
    top="40vh"
  >
    这是一个基本的对话框
  </YCDialog>
  <YCDialog v-model:visible="visible3" @close="visible3 = false">
    这是一个基本的对话框
    <template #footer>
      <YCButton @click="visible3 = false">取消</YCButton>
      <YCButton type="primary" @click="visible3 = false">确定</YCButton>
    </template>
  </YCDialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
</script>

<style lang="scss" scoped></style>
