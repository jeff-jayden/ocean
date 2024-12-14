<template>
  <div class="header">
    <div class="header-left">
      <div class="img"></div>
      <div class="title">ocean</div>
    </div>
    <div class="header-center">导航栏</div>
    <div class="header-right">用户名</div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  height: 68px;

  display: flex;
  align-items: center;

  .header-left {
    width: 248px;

    .title {
      font-weight: 500;
      font-size: 68px;
      text-align: center;
      line-height: 1.5;
    }
  }

  .header-center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-right {
    width: 248px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
