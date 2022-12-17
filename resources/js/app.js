
import './bootstrap';
import { createApp } from 'Vue';
import App from '../js/App.vue';
import router from './router.js';

const app = createApp(App);
app.use(router);
app.mount("#app");