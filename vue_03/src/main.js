import {createApp} from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import vueConfig from '../vue.config'



createApp.use(ElementUI)

createApp(App).use(router).mount("#app")