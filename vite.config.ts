import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import presets from './presets/index';
import proxy from "./src/api/proxy";
// https://vitejs.dev/config/
export default defineConfig((env) => {
  // env 环境变量
  const viteEnv = loadEnv(env.mode, process.cwd());
  return {
    base: viteEnv.VITE_BASE,
    plugins: [presets(env)],
    //别名设置
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"), // 把 @ 指向到 src 目录去
      },
    },
    // 服务设置
    server: {
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      port: 8181, // 端口号
      open: true, // 自动打开浏览器
      cors: true, // 跨域设置允许
      strictPort: true, // 如果端口已占用直接退出
      proxy,
    },
    build: {
      outDir: "dist", //指定输出包名路径
      //启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
      reportCompressedSize: false, //vite2为brotliSize
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      // 在生产环境移除console.log
      assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
      cssCodeSplit: true, // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
      sourcemap: false, // 构建后是否生成 source map 文件
      minify: "terser", // 混淆器，terser构建后文件体积更小,需要下载terser
      write: true, //设置为 false 来禁用将构建后的文件写入磁盘
      emptyOutDir: true, //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      terserOptions: {
        compress: {
          drop_console: false,
          pure_funcs: ["console.log", "console.info"],
          drop_debugger: true,
        },
      },
      assetsDir: "static/assets",
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
    css: {
      preprocessorOptions: {
        // 全局引入了 scss 的文件
        scss: {
          additionalData: `
          @import "@/assets/css/index.scss";
        `,
          javascriptEnabled: true,
        },
      },
    },
  };
});
