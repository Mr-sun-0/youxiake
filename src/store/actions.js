import { getData, getFlow } from '../utils/api';

const actions = {
  async getIndexData({ commit }) {
    const res = await getData();
    if (res.data.msg === 'Succ') {
      commit('getIndexList', res.data.data);
    }
  },
  async getflowData({ commit, state }) {
    const res = await getFlow({ type: state.type });
    if (res.data.msg === 'Succ') {
      commit('changFlow', res.data.data.list);
    }
  },
};

export default actions;
