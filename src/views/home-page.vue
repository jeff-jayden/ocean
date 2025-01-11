<template>
  <div class="container">
    <Header />
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
import Header from '@/components/header.vue';
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  padding: 16px;

  .header {
    height: 68px;
  }

  .content {
    height: calc(100% - 16px);
    display: flex;

    .view-content {
      flex: 1;
      background: #fff;
      border-radius: 16px;
      padding: 16px;
    }
  }
}
</style>
