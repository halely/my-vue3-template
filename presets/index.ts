import { ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';//支持 jsx 写法
import svgLoader from 'vite-svg-loader';//直接引入 svg 文件
import Icons from 'unplugin-icons/vite';//图标库 https://icones.netlify.app/
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver';//自动按需导入图标
import Components from 'unplugin-vue-components/vite'//自动按需导入组件
import AutoImport from 'unplugin-auto-import/vite';//自动导入api
import WindiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';

export default (env: ConfigEnv) => {
  return [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    svgLoader(),
    WindiCSS(),
    Components({
      resolvers: [ElementPlusResolver(),IconsResolver(),VueUseComponentsResolver()],
      dts: './src/types/components.d.ts',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'pinia', 'vue-router','@vueuse/core'],
      dts: './src/types/auto-imports.d.ts'
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    viteMockServe({
      mockPath: './src/mock',
      enable: true,
    }),
  ];
};
