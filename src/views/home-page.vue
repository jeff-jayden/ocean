<template>
  <div class="container">
    <div class="header">头部导航栏</div>
    <div class="content">
      <Aside />
      <div class="view-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from '@/components/aside.vue';
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;

  .header {
    height: 80px;
    background: #0ae6f6;
  }

  .content {
    height: 100%;
    display: flex;

    .view-content {
      flex: 1;
      background: #f6dbdb;
    }
  }
}
</style>
