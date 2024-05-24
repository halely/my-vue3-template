import { createApp } from 'vue';
import App from './App.vue';
// vue router
import router,{setupRouter} from '@/router/index';
import store from '@/store/index';
import {setupDirectives} from '@/directives/index';
import 'virtual:windi.css';
// 开启按需导入后就不需要在这里导入了
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
async function bootstrap() {
 const app = createApp(App);
 app.use(store);
 await setupDirectives(app);
 //挂载路由
 await setupRouter(app);
 //返回一个 Promise，它会在路由器完成初始导航之后被解析，也就是说这时所有和初始路由有关联的异步入口钩子和异步组件都已经被解析。如果初始导航已经发生，则该 Promise 会被立刻解析。
 await router.isReady();
 // 路由准备就绪后挂载APP实例
 app.mount('#app', true);
}
void bootstrap()
