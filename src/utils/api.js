import http from './http';

export function getData() {
  return http.get('/api/index/part?sitecode=1&city_id=1&refreshCount=60');
}
export function getMineRecommend() {
  return http.get('/api/lines/userrecommends');
}
