import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/Tab'
import Home from '@/components/home/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tab',
      component: Tab,
      children:[{
      	path:'/',
      	name:'Home',
      	component:Home
      }]
    }
  ]
})
