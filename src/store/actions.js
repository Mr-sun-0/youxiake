import { Toast } from 'vant';
import {
  getData,
  getMineRecommend,
  getCode,
  login,
  getFlow,
} from '../utils/api';

const actions = {
  async getIndexData({ commit }) {
    const res = await getData();
    if (res.data.msg === 'Succ') {
      commit('getIndexList', res.data.data);
    }
  },
  async getflowData({ commit, state }) {
    const res = await getFlow({ type: state.type, page: state.page });
    if (res.data.msg === 'Succ') {
      commit('changFlow', res.data.data.list);
    }
  },
  // 我的页面数据
  async getMineRecommend({ commit }) {
    const res = await getMineRecommend();
    commit('getMineRecommend', res.data);
  },

  async getCode(context, payload) {
    const res = await getCode({
      phone: payload,
      templateId: '537707',
    });
    console.log(res);
    Toast('已发送验证码');
  },
  async login({ commit }, payload) {
    const res = await login(payload);
    console.log(res);
    Toast(res.msg);
    commit('login', res);
  },
};

export default actions;
