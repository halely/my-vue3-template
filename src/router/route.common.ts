// 不需要鉴权的业务路由
import { type RouteRecordRaw } from 'vue-router';
const asyncRoutes: Array<RouteRecordRaw | any> = [
  {
    path: '/',
    name: 'home',
    component: async () => await import('@/views/layout/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: async () => await import('@/views/login/index.vue'),
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
  {
    path: '/mqttIndex',
    name: 'mqttIndex',
    component: async () => await import('@/views/pages/mqtt/index.vue'),
    meta: {
      title:'mqtt测试'
    }
  },
];
export default asyncRoutes;
