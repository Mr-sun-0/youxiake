import http from './http';

// 轮播图数据
export function getData() {
  return http.get('/api/index/part?sitecode=1&city_id=1&refreshCount=60');
}
