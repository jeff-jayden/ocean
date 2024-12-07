<template>
  <div class="side">
    <span>侧边栏</span>
    <button @click="feature">feature</button>
    <button @click="work">work</button>
    <button @click="toFeatureContent">FeatureContent</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const feature = () => {
  router.push({
    name: 'feature',
  })
}

const work = () => {
  router.push({
    name: 'work',
  })
}

const toFeatureContent = () => {
  router.push({
    name: 'content',
  })
}
</script>

<style scoped>
.side {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
