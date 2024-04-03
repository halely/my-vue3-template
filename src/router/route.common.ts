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
  {
    path: '/callCamera',
    name: 'callCamera',
    component: async () => await import('@/views/callCamera.vue'),
    meta: {
      title:'调用摄像机'
    }
  },
];
export default asyncRoutes;
