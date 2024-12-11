<template>
  <component
    :is="compName"
    v-bind="$attrs"
    :style="style"
    class="custom-icon"
  ></component>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { AllApplication, Config } from '@icon-park/vue-next';

const props = defineProps({
  name: String,
  left: Number || String,
  right: Number || String,
});

const icons = ref({ AllApplication, Config });

const registryComp = computed(() => {
  return Object.keys(icons.value).map((icon) => icon.toLowerCase());
});

const compName = computed(() => {
  const component = props.name.includes('-')
    ? props.name.replace(/([\w]*)-([\w]*)/g, (match, pre, post) => {
        pre = `${pre.charAt(0).toUpperCase()}${pre.slice(1)}`;
        post = `${post.charAt(0).toUpperCase()}${post.slice(1)}`;
        return pre + post;
      })
    : `${props.name.charAt(0).toUpperCase()}${props.name.slice(1)}`;

  return icons.value[component];
});

const style = computed(() => {
  const left = !isNaN(Number(props.left)) ? `${props.left}px` : props.left;
  const right = !isNaN(Number(props.right)) ? `${props.right}px` : props.right;
  return {
    marginLeft: left,
    marginRight: right,
  };
});

watch(
  () => props.name,
  (newVal, oldVal) => {
    console.log('name变化了');
    console.log(newVal);
  }
);

const checkName = (name) => {
  return registryComp.value.includes(name.replace(/-/g, '').toLowerCase());
};

onMounted(() => {
  if (!checkName(props.name)) {
    console.warn(`This icon ${props.name} don't exist`);
  }
});
</script>

<style scoped></style>
