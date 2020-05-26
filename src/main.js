// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import "@/vant"
import VueQrcode from '@chenfengyuan/vue-qrcode';
import VConsole from 'vconsole'

import  global  from '@/global'
import '@/axios_config'
import 'lib-flexible/flexible'
import "@/assets/css/base.css"


// if (process.env.ENV_CONFIG === 'dev' || process.env.ENV_CONFIG === 'test') {
//   new VConsole()
// }
Vue.component(VueQrcode.name, VueQrcode);
Vue.use(global)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
