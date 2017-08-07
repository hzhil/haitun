//导入vue，引入vue模块
import Vue from 'vue'
//导入vue-router，引入路由模块
import Router from 'vue-router'

import Tab from '@/components/Tab'
import Home from '@/components/home/home'
import Buy from '@/components/buy/buy'
import Load from '@/components/load/load'
import Seeks from '@/components/home/seeks/Seeks'
import Search from '@/components/search/search'
import My from '@/components/search/children/my'
import Yy from '@/components/search/children/yy'
import Mr from '@/components/search/children/mr'
import Gr from '@/components/search/children/gr'
import Jj from '@/components/search/children/jj'
import Sp from '@/components/search/children/sp'
import Et from '@/components/search/children/et'
import Shoplist from '@/components/shoplist/shoplist'
import Log from '@/components/log'
import Register from '@/components/register'
import Add from '@/components/add/add'

//调用路由
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
      name: 'tab',
      component: Tab,
      children:[
      	{
      		path: '/',
		      name: 'Home',
		      component: Home,
      	},
      	{
		   		path:"/search",
		   		name:"Search",
		   		component: Search,
		   		children:[
		   			{
		   				path: '/search',
				      name: 'My',
				      component: My,
		   			},
		   			{
		   				path: '/yy',
				      name: 'Yy',
				      component: Yy,
		   			},
		   			{
		   				path: '/mr',
				      name: 'Mr',
				      component: Mr,
		   			},
		   			{
		   				path: '/gr',
				      name: 'Gr',
				      component: Gr,
		   			},
		   			{
		   				path: '/jj',
				      name: 'Jj',
				      component: Jj,
		   			},
		   			{
		   				path: '/sp',
				      name: 'Sp',
				      component: Sp,
		   			},
		   			{
		   				path: '/et',
				      name: 'Et',
				      component: Et,
		   			}
		   		]
		    },
      	{
		   		path:"/buy",
		   		name:"Buy",
		   		component: Buy,
		    },
      	{
		   		path:"/load",
		   		name:"Load",
		   		component: Load,
		    },
		    {
		    	path:"/shoplist",
		    	name:"Shoplist",
		    	component: Shoplist
		    }
      ]
  	},
	  {
	  	path:'/seeks',
	  	name:'Seeks',
	  	component:Seeks
	  },
	  {
	  	path:'/login',
	  	name:'login',
	  	component:Log
	  },
	  {
	  	path:'/register',
	  	name:'register',
	  	component:Register
	  },
	  {
	  	path:'/add',
	  	name:'add',
	  	component:Add
	  }
   
  ]
})
