const userStore = {
  state: () => ({
    name: 'zhangsan',
    id: '0000001',
  }),

  mutations: {
    increment(state) {
      state.name = 'lisi';
    },
  },
};

export default userStore;
