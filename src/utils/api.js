import http from './http';

// 轮播图数据
export function getData() {
  return http.get('/api/index/part?sitecode=1&city_id=1&refreshCount=60');
}
export function getMineRecommend() {
  return http.get('/api/lines/userrecommends');
}
// 城市列表接口
// export function getCitiesList() {
//   return http.post('/api.growingio.com/v2/a147ace5a8874284/web/action?');
// }
// 杭州页面 下拉加载
// 首页 推荐
export function getRecommend(data) {
  return http.post('/home/recommend', data);
}
