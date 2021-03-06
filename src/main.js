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
import VueJsonp from 'vue-jsonp'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueJsonp)
Vue.config.productionTip = false

/* eslint-disable no-new */

// 根组件（this.$root)
new Vue({
  el: '#app',
  router,
  axios,
  VueJsonp,
  ElementUI,
  template: '<App/>',
  data:{
  	// 空的实例放到根组件下，所有的子组件都能调用
  	bus:new Vue()
  },
  components: { App }
})
