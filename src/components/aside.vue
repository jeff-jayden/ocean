<template>
  <div
    class="side"
    :style="{
      width: isCollapse ? '64px' : '200px',
      paddingLeft: isCollapse ? '0' : '16px',
    }"
  >
    <el-menu :collapse="isCollapse" @select="handelSelect">
      <template v-for="(item, index) in menu">
        <el-sub-menu v-if="item.children">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <div v-for="(child, index) in item.children">
              <el-menu-item :index="child.route">{{
                child.label
              }}</el-menu-item>
            </div>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :index="item.route">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
    <div
      class="footer"
      @click="isCollapse = !isCollapse"
      :style="{ right: isCollapse ? '22px' : '34px' }"
    >
      <Icon
        :name="isCollapse ? 'menu-fold-one' : 'menu-unfold-one'"
        size="16"
      ></Icon>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/icon.vue';
import { provide, ref } from 'vue';
import { menu } from '@/api/menu';
import { useRouter } from 'vue-router';

const router = useRouter();
const isCollapse = ref(false);
const handelSelect = (routeName) => {
  router.push({
    name: routeName,
  });
};

defineExpose({
  isCollapse,
});

provide('aside', {
  isCollapse,
});
</script>

<style scoped>
.side {
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
  padding: 16px;
  overflow: auto;

  .footer {
    position: absolute;
    right: 45px;
    bottom: 30px;
  }

  & :deep(.el-menu) {
    border-radius: 16px 16px 0 0;
    border-right: none;
  }

  margin-right: 16px;
  border-radius: 16px;
}
</style>
