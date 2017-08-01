// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  ElementUI,
  template: '<App/>',
  components: { App }
})
