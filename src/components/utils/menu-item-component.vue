<template>
  <ElIcon>
    <component :is="menuItem.icon"></component>
  </ElIcon>
  <span class="jsx_content">{{ menuItem.label }}</span>
</template>

<script setup>
defineProps({
  menuItem: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped></style>
