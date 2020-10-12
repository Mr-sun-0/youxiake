const mutations = {
  getIndexList(state, payload) {
    state.dataList = payload;
    state.weekList = payload.aroundLump.weekList;
  },
  changeCity(state, payload) {
    state.city.name = payload.name;
  },
  changFlow(state, payload) {
    state.flowData = payload;
  },
  typeChange(state, payload) {
    state.type = payload;
  },
};

export default mutations;
