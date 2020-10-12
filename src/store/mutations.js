const mutations = {
  getIndexList(state, payload) {
    state.dataList = payload;
    state.weekList = payload.aroundLump.weekList;
  },
  changeCity(state, payload) {
    console.log(payload);
    state.city.name = payload;
  },
  login(state, payload) {
    if (payload.status === '0') {
      state.registerList = payload.result;
    }
  },
  getMineRecommend(state, payload) {
    state.mineRecommend = payload;
  },
};

export default mutations;
