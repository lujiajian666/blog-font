import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import { Pagination,Input } from 'element-ui'
Vue.use(Pagination);
Vue.use(Input);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
