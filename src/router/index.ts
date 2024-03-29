/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import exceptionRoutes from '@/router/route.exception';
import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';

const routes: Array<RouteRecordRaw | any> = [...asyncRoutes, ...commonRoutes, ...exceptionRoutes];

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHashHistory(import.meta.env.VITE_BASE),
  routes,
});
/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */
router.beforeEach((to, from) => {
  console.log('全局路由前置守卫：to,from\n', to, from);
  // 设置页面标题
  document.title = to.meta.title ?? import.meta.env.VITE_APP_TITLE;
  if (!NProgress?.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  console.log('全局路由后置守卫：to,from\n', to, from);
  NProgress.done();
});

export default router;
