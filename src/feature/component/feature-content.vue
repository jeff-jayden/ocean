<template>
  <div class="content">特点内容</div>
  <button @click="handleCollapse">点击收起侧边栏</button>
</template>

<script setup>
import { inject } from 'vue';

const bl = inject('aside');

const handleCollapse = () => {
  bl.isCollapse = true;
};
</script>

<style scoped>
.content {
  background-color: #fff;
  height: 100%;
}
</style>
