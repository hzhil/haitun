<template>
	<div class="register">
		<ul>
			<li><input @keyup="keyin" type="text" placeholder="输入本人常用手机号" class="phone"/></li>
			<li><input @keyup="keyin" type="text" placeholder="请输入验证码" class="codes"/><span @click="codeClick">{{code}}</span></li>
			<li><input type="text" placeholder="请输入短信验证码"/><button>获取验证码</button></li>
			<li><input @keyup="keyin" type="password" placeholder="设置密码(6-18个字符)" class="pass"/></li>
		</ul>
		<p>点击注册,表示同意，<海豚村服务条款》</p>
		<button @click="register" v-bind:class="{gray:isGray,green:isGreen}">注册</button><br /><br />
		<span>已有账号<b @click="deng">登录</b></span>
		
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				code:'',
				isGray:true,
				isGreen:false
			}
		},
		created(){
			this.getCode()
		},
		methods:{
			deng(){
				this.$router.push('/login')
			},
			getCode(){
				this.code=Math.floor(Math.random()*(0,89999)+10000);	
			},
			codeClick(){
				this.code=Math.floor(Math.random()*(0,89999)+10000)
			},
			keyin(){
				let username = document.querySelector(".phone");
				let password = document.querySelector(".pass");
				let codes = document.querySelector(".codes");
				if(username.value==''||password.value==''||codes.value==''){
					this.isGray=true,
					this.isGreen=false
				}else{
					this.isGray=false,
					this.isGreen=true
				};
			},
			register(){
				let username = document.querySelector(".phone");
				let password = document.querySelector(".pass");
				let codes = document.querySelector(".codes");
				
				let obj = {};

				let codesBol = false;
				let userBol = false;
				let passBol = false;

				//后台存储
				if(username.value==''||password.value==''){
					console.log("用户名或密码不能为空")
				}else{
					obj.username = username.value;
					obj.password = password.value;
					if(codes.value == this.code){
						
						console.log(this.isTrue)
						axios({
							method:"post",
							url:"http://localhost:6500/dolphin",
							data:obj
						}).then(function(result){
							console.log("success")
						}).catch(function(result){
							console.log("error")
							console.log("此用户名已经使用")
						})
					}
				}
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
	.register ul li span{
		display: inline-block;
		border: 1px solid black;
		width: 20%;
		vertical-align: middle;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: #ccc;
	}
	.register ul li button{
		height: 30px;
		background: blueviolet;
		color: white;
		border: none;
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
		border-radius: 25px;
		font-size: 20px;
	}
	.gray{
		background: gray;
	}
	.green{
		background: green;
	}
</style>