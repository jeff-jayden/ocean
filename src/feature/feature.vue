<template>
  <div class="feature">
    <div>特征一</div>
    <div>特征一</div>
    <div>特征一</div>
    <div>特征一</div>
    <div>特征一</div>
    <feature-content
      :model-value="modelValue"
      @update:model-value="handleChange"
    ></feature-content>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import FeatureContent from '@/feature/component/feature-content.vue';

const store = useStore();

const modelValue = ref('zhangsan');

const handleChange = (val) => {
  console.log(val);
  modelValue.value = val;
};
</script>

<style scoped>
.feature {
  height: 100%;
  overflow: auto;
}
</style>
