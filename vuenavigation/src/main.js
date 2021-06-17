import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import "./tailwind/tailwind.css";
import "./scss/style.scss";

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  router,
  render: h => h(App),

}).$mount('#app')