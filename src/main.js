import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import commonComponents from './components'
import mock from './mock'

import './styles/index.scss'	//全局样式

import '@/interceptors/permission'   //拦截

Vue.use(Element)
Vue.use(commonComponents)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
