import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/css/common.css';
import axios from 'axios'
import VueAxios from 'vue-axios'



// createApp(App).use(ElementPlus).use(router).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')