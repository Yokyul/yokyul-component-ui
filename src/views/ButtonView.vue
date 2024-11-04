<template>
  <h1 class="row-title">普通展示</h1>
  <div class="row">
    <YCButton>默认按钮</YCButton>
    <YCButton type="primary">主要按钮</YCButton>
    <YCButton type="info">信息按钮</YCButton>
    <YCButton type="success">成功按钮</YCButton>
    <YCButton type="warning">警告按钮</YCButton>
    <YCButton type="danger">危险按钮</YCButton>
  </div>

  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <YCButton plain>默认按钮</YCButton>
    <YCButton type="primary" plain>主要按钮</YCButton>
    <YCButton type="info" plain>信息按钮</YCButton>
    <YCButton type="success" plain>成功按钮</YCButton>
    <YCButton type="warning" plain>警告按钮</YCButton>
    <YCButton type="danger" plain>危险按钮</YCButton>
  </div>

  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <YCButton round>默认按钮</YCButton>
    <YCButton type="primary" round>主要按钮</YCButton>
    <YCButton type="info" round>信息按钮</YCButton>
    <YCButton type="success" plain round>成功按钮</YCButton>
    <YCButton type="warning" plain round>警告按钮</YCButton>
    <YCButton type="danger" plain round>危险按钮</YCButton>
  </div>

  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <YCButton disabled>默认按钮</YCButton>
    <YCButton type="primary" disabled>主要按钮</YCButton>
    <YCButton type="info" disabled>信息按钮</YCButton>
    <YCButton type="success" disabled>成功按钮</YCButton>
    <YCButton type="warning" disabled>警告按钮</YCButton>
    <YCButton type="danger" disabled>危险按钮</YCButton>
  </div>

  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <YCButton loading>默认按钮</YCButton>
    <YCButton type="primary" loading>主要按钮</YCButton>
    <YCButton type="info" loading>信息按钮</YCButton>
    <YCButton type="success" loading round>成功按钮</YCButton>
    <YCButton type="warning" loading round>警告按钮</YCButton>
    <YCButton type="danger" loading round>危险按钮</YCButton>
  </div>

  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <YCButton icon="house">默认按钮</YCButton>
    <YCButton type="primary" icon="gear">主要按钮</YCButton>
    <YCButton type="info" icon="folder" plain>信息按钮</YCButton>
    <YCButton type="success" icon="bug" plain>成功按钮</YCButton>
    <YCButton type="warning" icon="code" round>警告按钮</YCButton>
    <YCButton type="danger" icon="cube" round>危险按钮</YCButton>
  </div>

  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <YCButton icon="house" size="small">默认按钮</YCButton>
    <YCButton type="primary" icon="gear" size="small">主要按钮</YCButton>
    <YCButton type="info" icon="folder" plain>信息按钮</YCButton>
    <YCButton type="success" icon="bug" plain>成功按钮</YCButton>
    <YCButton type="warning" icon="code" plain size="large">警告按钮</YCButton>
    <YCButton type="danger" icon="cube" plain size="large">危险按钮</YCButton>
  </div>

  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <YCButton type="danger" circle>验</YCButton>
    <YCButton type="primary" icon="gear" circle></YCButton>
    <YCButton type="info" icon="folder" circle plain></YCButton>
    <YCButton type="success" icon="bug" circle plain></YCButton>
    <YCButton type="warning" icon="code" circle disabled></YCButton>
    <YCButton type="danger" icon="cube" circle disabled></YCButton>
  </div>

  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <YCButton type="primary" @click="clickHandler" ref="btnRef">主要按钮</YCButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const btnRef = ref(null)

// 点击按钮
function clickHandler() {
  console.log('点击按钮', btnRef.value.ref)
}
</script>

<style lang="scss" scoped></style>
