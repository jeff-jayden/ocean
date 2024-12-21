import { createStore } from 'vuex';
import UserStore from '@/store/userStore.js';
import userStore from '@/store/userStore.js';

const store = createStore({
  state() {
    return {
      count: 0,
      user: {
        name: 'zhangsan',
      },
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    modify(state) {
      state.user.name = 'lisi';
    },
  },
  modules: {
    userStore,
  },
});

export default store;
