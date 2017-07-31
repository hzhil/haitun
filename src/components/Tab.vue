<template>
	<div id="tab">
		<router-view></router-view>
		<div v-bind:class="ny" class="tab">
			<img src="static/index-button.png" v-on:click='navc'>
		    <div class="nav" v-show='isShow'>
		        <router-link to="/"><img v-for="s in srcs" v-bind:src="s.sr" ></router-link>
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
	      	{sr:'../static/button-category.png'},
	      	{sr:'../static/button-index.png'},
	      	{sr:'../static/button-cart.png'},
	      	{sr:'../static/button-user.png'}
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
	/*#tab{
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  color: #2c3e50;
	  border: 1px solid red;
		}*/
	.tab{
		border: 1px solid black;
		position: fixed;
		width: 250px;
		height: 50px;
		border-radius: 25px;
		bottom: 10px;
		left: 30px;
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