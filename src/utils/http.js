import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';

// 创建axios实例
const instance = axios.create({
  timeout: 5000,
});

const http = {
  async get(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      instance.post(url, qs.stringify(data))
        .then((response) => {
          // console.log(response);
          resolve(response.data);
        })
        .catch((error) => {
          Toast(error.message);
          reject(error);
        });
    });
  },
};

export default http;
