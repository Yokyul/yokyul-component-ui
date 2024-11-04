<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <YCTooltip content="this is a test" placement="top" @visible-change="handle">
      <YCButton type="primary">top</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="bottom">
      <YCButton type="warning">bottom</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="left">
      <YCButton type="danger">left</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="right">
      <YCButton type="success">right</YCButton>
    </YCTooltip>
  </div>

  <h1 class="row-title">切换触发模式</h1>
  <div class="row">
    <YCTooltip content="this is a test" placement="top" trigger="click">
      <YCButton type="primary">top</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="bottom" trigger="click">
      <YCButton type="warning">bottom</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="left" trigger="click">
      <YCButton type="danger">left</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="right" trigger="click">
      <YCButton type="success">right</YCButton>
    </YCTooltip>
  </div>

  <h1 class="row-title">手动触发模式</h1>
  <div class="row">
    <YCTooltip content="this is a test" placement="right" manual ref="tooltipRef">
      <YCButton type="primary">right</YCButton>
    </YCTooltip>
  </div>
  <div class="row">
    <YCButton @click="openHandler">打开提示框</YCButton>
    <YCButton @click="closeHandler">关闭提示框</YCButton>
  </div>

  <h1 class="row-title">延时触发</h1>
  <div class="row">
    <YCTooltip content="this is a test" placement="top" :open-delay="500">
      <YCButton type="primary">top</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="bottom" :open-delay="500">
      <YCButton type="warning">bottom</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="left" :open-delay="500" :close-delay="500">
      <YCButton type="danger">left</YCButton>
    </YCTooltip>
    <YCTooltip content="this is a test" placement="right" :open-delay="500" :close-delay="500">
      <YCButton type="success">right</YCButton>
    </YCTooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tooltipRef = ref(null)

const handle = (isShow) => {
  if (isShow) console.log('提示框显示')
  else console.log('提示框隐藏')
}

const openHandler = () => {
  tooltipRef.value.show()
}
const closeHandler = () => {
  tooltipRef.value.hide()
}
</script>

<style lang="scss" scoped></style>
