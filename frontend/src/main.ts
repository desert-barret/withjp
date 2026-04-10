import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@unhead/vue';
import App from './App.vue';
import router from './router';
import { i18n } from './i18n';
import './assets/main.css';

const app = createApp(App);
const head = createHead();
app.use(head);

app.config.errorHandler = (err, _instance, info) => {
  console.error('[Vue]', info, err);
};

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');
