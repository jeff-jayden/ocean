<template>
  <div class="feature">
    <div id="root">
      <button @click="add()">添加一个老刘</button>
      <ul>
        <li v-for="(p, index) of persons" :key="index">
          {{ p.name }}-{{ p.age }}
          <input type="text" />
        </li>
      </ul>
      <br />
      <ul>
        <li v-for="(p, index) of persons" :key="p.id">
          {{ p.name }}-{{ p.age }}
          <input type="text" />
        </li>
      </ul>
    </div>
    <br />
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

const persons = ref([
  { id: 1, name: '张三', age: 19 },
  { id: 2, name: '李四', age: 20 },
  { id: 3, name: '王五', age: 25 },
]);

const handleDragenter = (e) => {
  e.dataTransfer.dropEffect = 'move';
};

const add = () => {
  const p = { id: 4, name: '老刘', age: 40 };
  persons.value.unshift(p);
};

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
