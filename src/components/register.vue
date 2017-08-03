<template>
	<div class="register">
		<ul>
			<li><input type="text" placeholder="输入本人常用手机号"/></li>
			<li><input type="text" placeholder="请输入验证码"/></li>
			<li><input type="text" placeholder="请输入短信验证码"/><button>获取验证码</button></li>
			<li><input type="password" placeholder="设置密码(6-18个字符)"/></li>
		</ul>
		<p>点击注册,表示同意，<海豚村服务条款》</p>
		<button>注册</button><br /><br />
		<span>已有账号<b @click="deng">登录</b></span>
		
	</div>
</template>

<script>
	export default{
		methods:{
			deng(){
				this.$router.push('/login')
			}
		}
	}
</script>

<style>
	.register>span{
		margin-right: 30px;
	}
	.register>span b{
		color: blue;
	}
	.register>p{
		width: 80%;
		margin: 15px 10%;
	}
	.register ul li{
		list-style: none;
		width: 80%;
		margin-left: 10%;
		border-bottom: 1px solid gray;
		height: 50px;
		line-height: 50px;
	}
	.register ul li input{
		height: 46px;
		border: none;
		outline: none;
		margin-left: 20px;
		font-size: 20px;
	}
	.register>button{
		width: 80%;
		margin-left: 10%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border: none;
		outline: none;
		color: white;
		background: gray;
		border-radius: 25px;
		font-size: 20px;
	}
</style>