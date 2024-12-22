<template>
  <div class="content">
    特点内容
    <div>{{ model }}</div>
    <button @click="changeModel">改变 model 的值</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useVModel } from '@vueuse/core';

const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(['update:modelValue']);

const model = useVModel(props, 'modelValue', emits);

const changeModel = () => {
  model.value = 'lisi';
};

const bl = inject('aside');

const handleCollapse = () => {
  bl.isCollapse = true;
};
</script>

<style scoped>
.content {
  background-color: #fff;
}
</style>
