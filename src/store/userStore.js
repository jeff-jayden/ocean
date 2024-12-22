import { mutations } from '@/utils/util.js';

const state = {
  name: '',
  avatar: '',
};

const userStore = {
  namespaced: true,
  state,
  mutations: {
    ...mutations(state),
  },
  actions: {
    // 异步获取并设置用户名的 action（这里只是示例，实际中可能从接口获取等）
    fetchAndSetUsername({ commit }, payload) {
      // 假设这里从本地存储获取用户名作为示例（实际情况替换为真实逻辑）
      if (payload) {
        commit('name', payload);
      }
    },
    // 异步获取并设置用户头像的 action（同理可替换真实逻辑）
    fetchAndSetAvatar({ commit }, payload) {
      // 假设从本地存储获取头像路径示例
      if (payload) {
        commit('avatar', payload);
      }
    },
  },
};

export default userStore;
