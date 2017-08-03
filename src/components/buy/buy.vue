<template>
	<div class="buy">
		
		<div class="kong" v-if="isShow">
			<div class="yuan">
				<img src="static/button-cart.png"/>
			</div>
			<p>购物车空空如也</p>
			<router-link to='/'><button>去逛逛</button></router-link>
			<router-link to='/load'><button>去登录</button></router-link>
		</div>
		
		<div class="you" v-else>
			
			<div class="bott">
				
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arrbuy:[],
				isShow:true
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.kong{
		width: 100%;
		text-align: center;
	}
	.kong .yuan{
		background: darkcyan;
		width: 50%;
		height: 200px;
		border-radius: 50%;
		border: 1px solid red;
		position: relative;
		margin-top: 50px;
		margin-left: 25%;
	}
	.kong .yuan img{
		width: 50%;
		position: absolute;
		left: 25%;
		top: 25%;
	}
	.kong p{
		height: 50px;
		line-height: 50px;
		font-size: 24px;
	}
	.kong button{
		width: 20%;
		height: 40px;
		border-radius: 20px;
		border:1px solid black;
		outline: none;
		background: none;
	}
</style>