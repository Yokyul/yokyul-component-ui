<template>
  <h1 class="row-title">普通使用</h1>
  <div class="row">
    <YCCard :img-src="web" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题" />
  </div>

  <h1 class="row-title">自定义宽高</h1>
  <div class="row">
    <YCCard
      :img-src="java"
      :width="368"
      :img-height="90"
      summary="路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。"
    />
  </div>

  <h1 class="row-title">插槽</h1>
  <div class="row">
    <YCCard :img-src="go">
      <div>Google资深工程师深度讲解Go语言 由浅入深掌握Go语言</div>
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </YCCard>
  </div>
</template>

<script setup>
import web from '@/assets/img/web.png'
import go from '@/assets/img/go.png'
import java from '@/assets/img/java.png'
</script>

<style lang="scss" scoped>
.footer {
  font-size: 12px;

  .level {
    color: #9199a1;
    margin-bottom: 8px;
  }
  .price {
    color: #f01414;
  }
}
</style>
