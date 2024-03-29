import { createApp } from 'vue';
import App from './App.vue';
// vue router
import router from '@/router/index';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
