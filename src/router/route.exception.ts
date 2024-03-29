// 跟鉴权无关的特殊路由
import { type RouteRecordRaw } from 'vue-router';
const asyncRoutes: Array<RouteRecordRaw | any> = [
  { path: '/404', name: '404', component: async () => await import('@/views/exception/404.vue') },
  {
    path: '/:pathMatch(.*)',
    meta: {},
    redirect: '/404',
  },
];
export default asyncRoutes;
