import axios from 'axios';

// 创建axios实例
const instance = axios.create({
  timeout: 5000,
});

const http = {
  get(url, params) {
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
};

export default http;
