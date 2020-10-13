import { Toast } from 'vant';
import {
  getData, getCode, login, getPhotography,
} from '../utils/api';

const actions = {
  async getIndexData({ commit }) {
    const res = await getData();
    if (res.data.msg === 'Succ') {
      commit('getIndexList', res.data.data);
    }
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
  async getPhotography({ commit }) {
    const res = await getPhotography();
    console.log(res);
    commit('getPhotography', res.data);
  },
};

export default actions;
