// 不需要鉴权的业务路由
import { type RouteRecordRaw } from 'vue-router';
const asyncRoutes: Array<RouteRecordRaw | any> = [
  {
    path: '/',
    name: 'pageA',
    component: async () => await import('@/views/pageA.vue'),
  },
  {
    path: '/pageB',
    name: 'pageB',
    component: async () => await import('@/views/pageB.vue'),
  },
];
export default asyncRoutes;
