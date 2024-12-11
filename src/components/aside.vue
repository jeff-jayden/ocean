<template>
  <div class="side">
    <span> 侧边栏</span>
    <component :is="AllApplication"></component>
    <Icon
      name="all-application"
      size="16"
      theme="outline"
      fill="#333"
      left="16"
    ></Icon>
    <all-application theme="outline" size="24" fill="#333" />
    <config theme="outline" size="24" fill="#333" />
    <button @click="feature">feature</button>
    <button @click="work">work</button>
    <button @click="toFeatureContent">FeatureContent</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import Icon from '@/components/icon.vue';
import { AllApplication, Config } from '@icon-park/vue-next';

const router = useRouter();

const feature = () => {
  router.push({
    name: 'feature',
  });
};

const work = () => {
  router.push({
    name: 'work',
  });
};

const toFeatureContent = () => {
  router.push({
    name: 'content',
  });
};
</script>

<style scoped>
.side {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
