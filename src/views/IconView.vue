<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <YCIcon icon="house" />
    <YCIcon icon="code" />
    <YCIcon icon="file-lines" />
    <YCIcon icon="filter" />
    <YCIcon icon="gear" />
    <YCIcon icon="barcode" />
    <YCIcon icon="folder" />
    <YCIcon icon="folder-open" />
  </div>

  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <YCIcon icon="house" size="2xs" />
    <YCIcon icon="code" size="xs" />
    <YCIcon icon="file-lines" size="sm" />
    <YCIcon icon="file" size="lg" />
    <YCIcon icon="filter" size="xl" />
    <YCIcon icon="gear" size="2xl" />
    <YCIcon icon="barcode" size="2x" />
    <YCIcon icon="folder" size="3x" />
    <YCIcon icon="folder-open" size="4x" />
  </div>

  <h1 class="row-title">设置不同的颜色</h1>
  <div class="row">
    <YCIcon icon="house" size="xl" color="red" />
    <YCIcon icon="folder" size="xl" color="skyblue" />
    <YCIcon icon="gear" size="xl" color="#e47412" />
    <YCIcon icon="barcode" size="xl" color="#7ec102" />
    <YCIcon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>

  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <YCIcon icon="house" rotation="90" size="xl" />
    <YCIcon icon="code" rotation="270" size="xl" />
    <YCIcon icon="file-lines" rotation="180" size="xl" />
    <YCIcon icon="file" flip="horizontal" size="xl" />
    <YCIcon icon="filter" flip="vertical" size="xl" />
    <YCIcon icon="folder-open" flip="both" size="xl" />
  </div>

  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <YCIcon icon="house" size="xl" beat />
    <YCIcon icon="code" size="xl" beat-fade />
    <YCIcon icon="file-lines" size="xl" bounce />
    <YCIcon icon="file" size="xl" fade />
    <YCIcon icon="filter" size="xl" flip />
    <YCIcon icon="gear" size="xl" shake />
    <YCIcon icon="barcode" size="xl" spin />
    <YCIcon icon="folder" size="xl" spin spin-reverse />
    <YCIcon icon="folder-open" size="xl" spin-pulse />
  </div>

  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <YCIcon icon="house" size="xl" type="primary" />
    <YCIcon icon="code" size="xl" type="success" />
    <YCIcon icon="file-lines" size="xl" type="info" />
    <YCIcon icon="file" size="xl" type="warning" />
    <YCIcon icon="filter" size="xl" type="danger" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
