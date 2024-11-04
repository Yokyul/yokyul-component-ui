<template>
  <h1 class="row-title">基础用法</h1>
  <div class="row">
    <YCAvatar :url="avatarImg" />
    <YCAvatar :size="70" :url="avatarImg" />
    <YCAvatar :url="avatarImg" shape="square" />
    <YCAvatar :size="70" :url="avatarImg" shape="square" />
  </div>

  <h1 class="row-title">头像类型</h1>
  <div class="row">
    <YCAvatar :url="avatarImg" />
    <YCAvatar icon="house" />
    <YCAvatar>user</YCAvatar>
  </div>

  <h1 class="row-title">图片头像如何适应容器</h1>
  <div class="row">
    <div>
      <YCAvatar :url="avatarImg2" />
      <p style="text-align: center">cover</p>
    </div>
    <div>
      <YCAvatar :url="avatarImg2" fit="contain" />
      <p style="text-align: center">contain</p>
    </div>
    <div>
      <YCAvatar :url="avatarImg2" fit="fill" />
      <p style="text-align: center">fill</p>
    </div>
    <div>
      <YCAvatar :url="avatarImg2" fit="none" />
      <p style="text-align: center">none</p>
    </div>
  </div>
</template>

<script setup>
import avatarImg from '@/assets/img/avatarImg.jpg'
import avatarImg2 from '@/assets/img/avatarImg2.jpg'
</script>

<style lang="scss" scoped></style>
