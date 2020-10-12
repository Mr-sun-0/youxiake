const mutations = {
  getIndexList(state, payload) {
    state.dataList = payload;
    state.weekList = payload.aroundLump.weekList;
  },
  changeCity(state, payload) {
    console.log(payload);
    state.city.name = payload;
  },
};

export default mutations;
