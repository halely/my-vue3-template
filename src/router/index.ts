/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { App } from 'vue';
import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from 'vue-router';
import {createRouterGuards } from './router-guards'
import exceptionRoutes from '@/router/route.exception';//无鉴权的业务路由
import asyncRoutes from '@/router/route.async';//需要鉴权的业务路由
import commonRoutes from '@/router/route.common';//不需要鉴权的业务路由

const routes: Array<RouteRecordRaw | any> = [...asyncRoutes, ...commonRoutes, ...exceptionRoutes];

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHashHistory(import.meta.env.VITE_BASE),
  routes,
});
export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
