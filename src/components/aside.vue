<template>
  <div class="side">
    <el-menu :collapse="isCollapse">
      <el-sub-menu index="1">
        <template #title>
          <div class="row">
            <Icon name="all-application" size="16" right="5"></Icon>
            <span class="text">Navigator One</span>
          </div>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <div class="footer" @click="isCollapse = !isCollapse">
      <Icon
        :name="isCollapse ? 'menu-fold-one' : 'menu-unfold-one'"
        size="16"
      ></Icon>
    </div>
    <button @click="feature">feature</button>
    <button @click="work">work</button>
    <button @click="toFeatureContent">FeatureContent</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Icon from '@/components/icon.vue';
import { provide, ref } from 'vue';

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

const isCollapse = ref(false);

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
  background: #e2e2e2;
  position: relative;

  .row {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      font-size: 14px;
    }
  }

  .footer {
    position: absolute;
    right: 45px;
    bottom: 30px;
  }
}
</style>
