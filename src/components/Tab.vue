<template>
	<div id="tab">
		<router-view></router-view>
		<div v-bind:class="ny" class="tab">
			<img src="static/index-button.png" v-on:click='navc'>
		    <div class="nav" v-show='isShow'>
		        <router-link :to='s.link' v-for="s in srcs"><img v-bind:src="s.sr" ></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'tab',
	  data () {
	    return {
	      ny:'',
	      isShow:true,
	      srcs:[
	      	{sr:'static/button-index.png',link:'/'},
	      	{sr:'static/button-category.png',link:'/search'},
	      	{sr:'static/button-cart.png',link:'/buy'},
	      	{sr:'static/button-user.png',link:'/load'}
	      ]
	    }
	  },
	  methods:{
	  	navc:function(){
	  		console.log(this.isShow)
				this.ny == ''?this.ny='duan':this.ny= '',
				this.isShow==true?this.isShow=false:this.isShow=true
	  	}
	  }
	}
</script>

<style>
	.tab{
		border: 1px solid black;
		position: fixed;
		width: 250px;
		height: 50px;
		border-radius: 25px;
		bottom: 50px;
		left: 30px;
		background-color: white;
		z-index: 10000;
	}
	.duan{
		transition: all 0.6s;
		width: 50px;
	}
	.tab>img{
		
		width: 40px;
		margin-left: 5px;
		margin-top: 5px;
		float: left;
	}
	.tab .nav{
		margin-left: 50px;
		width: 200px;	
	}
	.tab .nav img{
		width: 30px;
		margin-left: 10px;
		margin-right: 5px;
		margin-top: 5px;
	}
</style>