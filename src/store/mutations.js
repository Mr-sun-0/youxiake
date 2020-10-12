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
    // if (payload.status === '0') {
    state.registerList = payload.result;
    // }
  },
  changFlow(state, payload) {
    if (state.status === 0) {
      state.flowData = payload;
    } else {
      state.flowData.push(...payload);
      // state.flowDate = state.flowData.concat(payload);
    }
  },
  typeChange(state, payload) {
    state.type = payload;
    state.status = 0;
  },
  pageChange(state, payload) {
    state.page = payload;
    state.status = 1;
  },
  getMineRecommend(state, payload) {
    state.mineRecommend = payload;
  },

};

export default mutations;
