<template>
  <div class="header">
    <div class="header-left">
      <div class="img"></div>
      <div class="title">ocean</div>
    </div>
    <div class="header-center">
      <el-menu mode="horizontal" @select="handelSelect">
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
    </div>
    <div class="header-right">
      <el-popover effect="light">
        <template #reference>
          <div class="popover-content">
            <div class="username">
              <img :src="avatar" width="30px" height="30px" class="avatar" />
              <div>{{ username }}</div>
            </div>
            <div class="arrow">
              <el-icon><CaretBottom /></el-icon>
            </div>
          </div>
        </template>
        <el-popconfirm title="确定退出登录吗?">
          <template #reference>
            <div class="content">退出登录</div>
          </template>
        </el-popconfirm>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import { CaretBottom } from '@element-plus/icons-vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import menu from '@/api/menu/index.js';

const store = useStore();
const router = useRouter();

// 通过计算属性获取用户名
const username = computed(() => store.state.userStore.name);
// 通过计算属性获取用户头像
const avatar = computed(() => store.state.userStore.avatar);

const handelSelect = (routeName) => {
  router.push({
    name: routeName,
  });
};

onMounted(() => {
  store.dispatch('userStore/fetchAndSetUsername', 'zhangsan');
  store.dispatch(
    'userStore/fetchAndSetAvatar',
    'https://raw.githubusercontent.com/jeff-jayden/logo_of_mine/master/assets/blog/avater.jpg'
  );
});
</script>

<style scoped>
.header {
  height: 68px;

  display: flex;
  align-items: center;

  .header-left {
    width: 216px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-bottom: 30px;

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
    justify-content: start;
    padding-bottom: 10px;

    & :deep(.el-menu) {
      border-radius: 16px;
      padding: 16px;
      width: 100%;
      border-bottom: none;

      & .el-menu-item.is-active,
      .el-sub-menu__title {
        border-bottom: none;
      }
    }
  }

  .header-right {
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 24px;
    margin-left: 50px;
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
    }

    .popover-content {
      display: flex;
      color: #969aa0;

      .username {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .arrow {
        margin-left: 25px;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
      }
    }

    .avatar {
      border-radius: 50%;
    }
  }
}

.el-popover {
  .content {
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
