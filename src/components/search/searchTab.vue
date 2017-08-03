<template>
	<div class="searchTab">
		<!--<div class="left">-->
			<ul>
				<li v-for="(obj,index) in arr" :key="index" @click="tcli(index)" :class="{sty:count==index}"><router-link :to='obj.links'>{{obj.con}}</router-link></li>
			</ul>	
		<!--</div>-->
		<div class="right">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				count:0,
				arr:[
					{con:'母婴用品',links:'/search'},
					{con:'营养保健',links:'/yy'},
					{con:'美容药妆',links:'/mr'},
					{con:'个人护理',links:'/gr'},
					{con:'家居厨卫',links:'/jj'},
					{con:'食品精选',links:'/sp'},
					{con:'儿童玩具',links:'/et'}
				]
			}
		},
		methods:{
			tcli(i){
				let _this = this;
				console.log(i)
				_this.count=i
			}
		}
	}
</script>

<style>
.searchTab{
	width: 100%;
	display: flex;
	justify-content: flex-start;
}
a{
	text-decoration: none;
}
.searchTab ul{
	width: 30%;
	min-width: 100px;
	text-align: center;
}
.searchTab ul{
	list-style: none;
}
.searchTab ul li{
	width: 100%;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid gray;
	border-right: 1px solid gray;
	background: #ccc;
}
.searchTab .right{
	width: 70%;
	border: 1px solid red;
}
.searchTab .sty{
	background: white;
}
</style>