

import { type RouteComponent, type RouteLocationNormalized } from "vue-router";
declare global {
  interface ToRouteType extends RouteLocationNormalized {
    meta?: CustomizeRouteMeta;
  }
  /**
   * @description 完整子路由的`meta`配置表
   */
  interface CustomizeRouteMeta {
    /** 菜单名称（兼容国际化、非国际化，如何用国际化的写法就必须在根目录的`locales`文件夹下对应添加） `必填` */
    title?: string;
    /** 菜单图标 `可选` */
    icon?: string | FunctionalComponent | IconifyIcon;
    /** 菜单名称右侧的额外图标 */
    extraIcon?: string | FunctionalComponent | IconifyIcon;
    /** 是否在菜单中显示（默认`true`）`可选` */
    showLink?: boolean;
    /** 是否显示父级菜单 `可选` */
    showParent?: boolean;
    /** 页面级别权限设置 `可选` */
    roles?: Array<string>;
    /** 按钮级别权限设置 `可选` */
    auths?: Array<string>;
    /** 路由组件缓存（开启 `true`、关闭 `false`）`可选` */
    keepAlive?: boolean;
  }
}
declare type Recordable<T = any> = Record<string, T>;
