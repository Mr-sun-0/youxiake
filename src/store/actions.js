<<<<<<< HEAD
import { getData, getMineRecommend } from '../utils/api';
=======
import { Toast } from 'vant';
import { getData, getCode, login } from '../utils/api';
>>>>>>> master

const actions = {
  async getIndexData({ commit }) {
    const res = await getData();
    if (res.data.msg === 'Succ') {
      commit('getIndexList', res.data.data);
    }
  },
<<<<<<< HEAD
  // 我的页面数据
  async getMineRecommend({ commit }) {
    const res = await getMineRecommend();
    commit('getMineRecommend', res.data);
    console.log(res);
  },

=======
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
>>>>>>> master
};

export default actions;
