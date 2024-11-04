<template>
  <h1 class="row-title">普通使用</h1>
  <div class="row">
    <YCCollapse v-model="openedValue" @change="changeHandle">
      <YCCollapseItem name="a" title="home">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, temporibus.
      </YCCollapseItem>
      <YCCollapseItem name="b" title="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, facilis?
      </YCCollapseItem>
      <YCCollapseItem name="c" title="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint voluptatem fugit
        accusantium! Molestias, quod?
      </YCCollapseItem>
      <YCCollapseItem name="d" title="contact" disabled>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ab nam necessitatibus!
      </YCCollapseItem>
    </YCCollapse>
  </div>

  <h1 class="row-title">手风琴模式</h1>
  <div class="row">
    <YCCollapse v-model="openedValue2" @change="changeHandle" accordion>
      <YCCollapseItem name="a" title="home">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, temporibus.
      </YCCollapseItem>
      <YCCollapseItem name="b" title="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, facilis?
      </YCCollapseItem>
      <YCCollapseItem name="c" title="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint voluptatem fugit
        accusantium! Molestias, quod?
      </YCCollapseItem>
      <YCCollapseItem name="d" title="contact" disabled>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ab nam necessitatibus!
      </YCCollapseItem>
    </YCCollapse>
  </div>

  <h1 class="row-title">自定义标题</h1>
  <div class="row">
    <YCCollapse v-model="openedValue3" @change="changeHandle" accordion>
      <YCCollapseItem name="a">
        <template #title>
          <div class="titleContainer">
            <YCIcon icon="house" />
            <span class="title">Consistency</span>
          </div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit delectus voluptatibus
          fuga mollitia enim sint sunt eligendi officiis laudantium reprehenderit nam architecto
          placeat dolorum saepe recusandae eos, debitis soluta?
        </div>
      </YCCollapseItem>
      <YCCollapseItem name="b">
        <template #title>
          <div class="titleContainer">
            <YCIcon icon="image" />
            <span class="title">Feedback</span>
          </div>
        </template>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quam facilis saepe
          praesentium error debitis
        </div>
      </YCCollapseItem>
    </YCCollapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openedValue = ref(['a', 'b'])
const openedValue2 = ref(['a'])
const openedValue3 = ref(['a'])

const changeHandle = (arr) => {
  console.log(arr)
}
</script>

<style lang="scss" scoped>
.titleContainer {
  display: flex;
}
.title {
  margin: 0 5px;
}
</style>
