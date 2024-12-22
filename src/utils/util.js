export const mutations = (states) => {
  const result = {};
  for (const key of Object.keys(states)) {
    result[key] = function (state, payload) {
      state[key] = payload;
    };
  }
  return result;
};

export default mutations;
