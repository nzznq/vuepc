import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import './styles/index.scss'	//全局样式

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
