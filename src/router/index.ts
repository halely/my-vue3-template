/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from 'vue-router';
import exceptionRoutes from '@/router/route.exception';
import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';

const routes: Array<RouteRecordRaw | any> = [...asyncRoutes, ...exceptionRoutes, ...commonRoutes];

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHashHistory(import.meta.env.VITE_BASE),
  routes,
});

export default router;
