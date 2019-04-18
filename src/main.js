// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
import ElementUI from 'element-ui' // ui design
import 'element-ui/lib/theme-chalk/index.css' // ui design
import Axios from 'axios' // http proxy


Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$ajax = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
