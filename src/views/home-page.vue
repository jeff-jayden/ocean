<template>
  <div class="container">
    <Header></Header>
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
import Header from '@/components/header.vue'
</script>

<style scoped lang="scss">
.container {
  height: 100%;

  .header {
    height: 68px;
  }

  .content {
    height: 100%;
    display: flex;

    .view-content {
      flex: 1;
      background: #fff;
    }
  }
}
</style>
