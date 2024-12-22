import { createStore } from 'vuex';
import userStore from '@/store/userStore.js';

const store = createStore({
  modules: {
    userStore,
  },
});

export default store;
