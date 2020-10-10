const mutations = {
  getIndexList(state, payload) {
    state.dataList = payload;
    state.weekList = payload.aroundLump.weekList;
  },
  changeCity(state, payload) {
    state.city.name = payload.name;
  },
  login(state, payload) {
    if (payload.status === '0') {
      state.registerList = payload.result;
    }
  },
};

export default mutations;
