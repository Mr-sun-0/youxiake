import { getData, getMineRecommend } from '../utils/api';

const actions = {
  async getIndexData({ commit }) {
    const res = await getData();
    if (res.data.msg === 'Succ') {
      commit('getIndexList', res.data.data);
    }
  },
  // 我的页面数据
  async getMineRecommend({ commit }) {
    const res = await getMineRecommend();
    commit('getMineRecommend', res.data);
    console.log(res);
  },

};

export default actions;
