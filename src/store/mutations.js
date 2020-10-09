const mutations = {
  getIndexList(state, payload) {
    state.dataList = payload;
    state.weekList = payload.aroundLump.weekList;
  },
  changeCity(state, payload) {
    state.city.name = payload.name;
  },
};

export default mutations;
