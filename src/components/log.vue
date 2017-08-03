<template>
	<div class="log">
		<div class="logtop">
			<img src="static/logo_index.png"/>
		</div>
		
		<p class="phone"><input type="text" placeholder="手机号/邮箱"/></p>
		<p class="pass"><input type="text" placeholder="登录密码"/></p>
		<button v-bind:class="{gray:isGray,green:isGreen}">登录</button>
		<div class="kuai"><span @click="zhu">手机快速注册</span><span>忘记密码</span></div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isGray:true,
				isGreen:false
			}
		},
		methods:{
			zhu(){
				this.$router.push("/register")
			}
		}
	}
</script>

<style>
	.logtop{
		background: greenyellow;
		height: 150px;
		text-align: center;
	}
	.logtop img{
		margin-top: 50px;
		width: 150px;
	}
	.log p{
		height: 60px;
		line-height: 80px;
		width: 80%;
		margin-left: 10%;
		border-bottom: 1px solid black;
	}
	.log p input{
		height: 20px;
		width: 100%;
		outline: none;
		border: none;
		margin-left: 20px;
		font-size: 16px;
	}
	.log>button{
		height: 50px;
		width: 70%;
		margin-left: 15%;
		margin-top: 10px;
		border-radius: 25px;
		border: none;
		outline: none;
		font-size: 20px;
		color: white;
	}
	.kuai{
		margin-top: 20px;
		width: 70%;
		margin-left: 15%;
		display: flex;
		justify-content: space-between;
	}
	.gray{
		background: #ccc;
	}
	.green{
		background: green;
	}
</style>