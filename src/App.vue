<template>
  <h1 class="title">yokyul-component-ui 组件展示</h1>
  <nav class="nav">
    <router-link to="/">Icon</router-link>
    <router-link to="/avatar">Avatar</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/card">Card</router-link>
    <router-link to="/dialog">Dialog</router-link>
    <router-link to="/pager">Pager</router-link>
    <router-link to="/collapse">Collapse</router-link>
    <router-link to="/tooltip">Tooltip</router-link>
    <router-link to="/dropdown">Dropdown</router-link>
  </nav>
  <div class="displayArea">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h1.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: 200;
  margin-top: 30px;
}

.nav {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: var(--yc-border);

  a {
    padding-bottom: 2px;
    &.active {
      border-bottom: 2px solid hsla(160, 100%, 37%, 1);
    }
  }
}

.displayArea {
  width: 100%;
  height: calc(100% - 80px - 50px);
  padding-top: 20px;
  overflow: auto;
}
</style>
