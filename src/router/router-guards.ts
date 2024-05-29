

import { Router } from 'vue-router';
import NProgress from 'nprogress';
import {getToken,sessionKey} from '@/utils/auth';
import {type DataInfo} from "@/store/module/type";
import {storageLocal} from '@pureadmin/utils'
import {isOneOfArray} from '@/utils';
// import { asyncRouteStore } from '@/store/asyncRoute'
/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */

/** 路由白名单 */
const whiteList = ["/login"];
export function createRouterGuards(router: Router) {
    router.beforeEach(async (to:ToRouteType, _from, next) => {
      if (!NProgress?.isStarted()) {
        NProgress.start();
      }
       // 白名单直接放行
      if(whiteList.indexOf(to.path) !== -1) {
        next();
      }else{
        if(getToken()){
          const userInfo = storageLocal().getItem<DataInfo<number>>(sessionKey);
          console.log('开始配置权限')
          // 无权限跳转403页面
          if (to.meta?.roles && !isOneOfArray(to.meta?.roles, userInfo?.roles || [])) {
            next({ path: "/404" });
          }
          next();
        }else{
          next({ path: "/login" });
        }
      }
    });
    router.afterEach((to, _, failure) => {
      NProgress.done();
    });
    router.onError((error) => {
        console.log(error, '路由错误');
    });
}
