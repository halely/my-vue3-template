import { createApp } from 'vue';
import App from './App.vue';
// vue router
import router from '@/router/index';
import store from '@/store/index';
import 'virtual:windi.css';
// 开启按需导入后就不需要在这里导入了
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);
app.use(router);
app.use(store);
// app.use(ElementPlus);
app.mount('#app');
