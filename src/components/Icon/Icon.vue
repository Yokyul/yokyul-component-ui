<template>
  <i class="yc-icon" :class="{ [`yc-icon--${type}`]: type }">
    <FontAwesomeIcon v-bind="filteredProps"></FontAwesomeIcon>
  </i>
</template>

<script setup>
import { computed } from 'vue'
import propObj from './props'
import { omit } from 'lodash-es'

// 引入font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

defineOptions({
  name: 'YCIcon'
})

const props = defineProps(propObj)

// 过滤 FontAwesomeIcon 组件不支持的属性（如：type）
const filteredProps = computed(() => omit(props, ['type']))
</script>

<style lang="scss" scoped></style>
