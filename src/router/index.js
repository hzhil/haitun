import Vue from 'vue'
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
		    }
      ]
  	},
	  {
	  	path:'/seeks',
	  	name:'Seeks',
	  	component:Seeks
	  },
   
  ]
})
