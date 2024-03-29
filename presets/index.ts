import { ConfigEnv } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';//支持 jsx 写法
import svgLoader from 'vite-svg-loader';//直接引入 svg 文件

export default (env: ConfigEnv) => {
  return [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    svgLoader()
  ];
};
