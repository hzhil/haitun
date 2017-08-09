<template>
	<div class="log" @click="hide">
		<div class="logtop">
			<img src="static/logo_index.png"/>
		</div>
		
		<p class="phone"><input type="text" placeholder="手机号/邮箱" @keyup="keyin" v-model="pname"/></p>
		<p class="pass"><input type="password" placeholder="登录密码" @keyup="keyin"/></p>
		<button v-bind:class="{gray:isGray,green:isGreen}" @click="login">登录</button>
		<div class="kuai"><span @click="zhu">手机快速注册</span><span>忘记密码</span></div>
		<div class="mask" v-show="isShow">
			{{message}}
		</div>
	</div>
</template>

<script>
//	账号登录
	import axios from 'axios';
	import $ from '../../static/jquery-3.1.1.js'
	export default{
		data(){
			return{
				pname:null,
				isShow:false,
				message:"",
				isGray:true,
				isGreen:false
			}
		},
		created(){
//			axios({
//					method:"get",
//					url:"http://localhost:6500/dolphin"
//				}).then(function(res){
//					console.log(res.data)
//					
//						_this.$router.push('/')
//				}).catch((res)=>{
//					_this.isShow=true;
//					_this.message = "用户名/密码错误";
//				})
		},
		methods:{
			keyin(){
				let phone = document.querySelector(".phone input");
				
				let pass = document.querySelector(".pass input");
				if(phone.value==''||pass.value==''){
					this.isGray=true,
					this.isGreen=false
				}else{
					this.isGray=false,
					this.isGreen=true
				}
			},
			login(){
				let phone = document.querySelector(".phone input");
				let pass = document.querySelector(".pass input");
				let username = phone.value;
				let password = pass.value;
				let _this = this;
				if(username==""||password==""){
					alert("用户名或密码不能为空")
				}else{
					axios({
					  method: 'post',
					  url: 'http://localhost:6500/dolphin/login',
					  data: {
					    username,
					    password
					  }
					}).then((res)=>{
						//登录成功获取到id
						let uid = res.data.uid;
//						console.log(res)
						//将用户名和id保存到对象
						let userObj = {
							"user":username,
							"uid":uid
						}
//						 将用户名存储到本地
		            	localStorage.usernames = JSON.stringify(userObj);
//						跳转到已经登录界面load.vue,登录跳转不能传值(尤其是变化的值)
						_this.$router.push("/load")
						//登录成功后将用户名及购物车信息存储到本地，用于购物车内调用
						axios({
						  method:'get',
						  url: 'http://localhost:6500/dolphin/'+uid,
						}).then((res)=>{
							console.log(res)
//							localStorage["username"] = res.data.username;
//							if(_this.pname == res.data.username){
//								_this.$router.push("/load")
//							}
							
						})
					})
				}
				
			},
			hide(){
				this.isShow=false;
				this.message=""
			},
			zhu(){
				this.$router.push("/register")
			}
		}
	}
</script>

<style>
	.mask{
		width: 300px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-radius: 50px;
		background: rgba(0,0,0,0.5);
		color: white;
		position: fixed;
		top: 150px;
		left: 50%;
		margin-left: -150px;
	}
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