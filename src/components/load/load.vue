<template>
	<!--注册登录页面-->
	<div class="buy">
		<div class="buytop">
			<span @click="loa"><</span>
			<p v-show="shows"><b @click="deng">登录</b>/<b @click="zhu">注册</b></p>
			<p v-show="shows1" class="loadSuccess">{{name}}</p>
		</div>
		<p class="quan"><span>全部订单</span> <span>></span></p>
		<ul class="dai">
			<li>待付款</li>
			<li>待发货</li>
			<li>待收货</li>
			<li>待评价</li>
		</ul>
		<div class="yhui">
			<button>优惠券<span>0</span>张</button>
			<button>海豚币<span>0</span>个</button>
		</div>
		
		<ul class="dizhi">
			<li><i class="el-icon-star-on"></i><span>地址管理</span></li>
			<li><i class="el-icon-edit"></i><span>意见反馈</span></li>
			<li><i class="el-icon-setting"></i><span>帮助中心</span></li>
			<li><i class="el-icon-message"></i><span>联系我们</span></li>
		</ul>
		
		<p class="tuichu" v-show="shows1" @click="loginOut">退出登录</p>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				shows:true,
				shows1:false,
				name:null
			}
		},
		created(){
			this.getId()
		},
		methods:{
			getId(){
				//判断是否已经登录，如果本地存储有localStorage["username"]，那么已经登录了。
				this.name = JSON.parse(localStorage["usernames"]).user;
				if(this.name == null){
					this.shows = true;
					this.shows1 = false
				}else{
					this.shows = false;
					this.shows1 = true
				}

			},
			//退出登录系统
			loginOut(){
				localStorage.removeItem("usernames")
				this.shows = true;
				this.shows1 = false;
			},
			loa(){
				window.history.go(-1)
			},
			deng(){
				this.$router.push("/login")
			},
			zhu(){
				this.$router.push("/register")
			}
		}
	}
</script>

<style>
	.dizhi li{
		margin-left: 20px;
		list-style: none;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid red;
	}
	.dizhi li span{
		margin-left: 20px;
		display: inline-block;
		height: 40px;
		line-height: 40px;
	}
	.yhui{
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 10px 0px;
		background: #ccc;
	}
	.yhui button{
		height: 60px;
		color: white;
		background: red;
		width: 40%;
		border: none;
		border-radius: 5px;
		font-size: 16px;
	}
	.yhui button span{
		font-size: 20px;
	}
	.dai{
		display: flex;
		justify-content: space-around;
		list-style: none;
		text-align: center;
		width: 100%;
	}
	.dai li{
		width: 25%;
		height: 40px;
		line-height: 40px;
		border: 1px solid #ccc;
	}
	.buy .quan{
		width: 90%;
		margin-left: 5%;
		height: 49px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.buy .quan span:nth-child(2){
		font-size: 30px;
	}
	.buytop{
		width: 100%;
		height: 200px;
		background-image: url(../../../static/20170717234207274.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.buytop span{
		color: red;
		font-size: 34px;
		margin-left: 10px;
	}
	.buytop p{
		width: 50%;
		height: 50px;
		color: blue;
		border-radius: 18px;
		text-align: center;
		line-height: 50px;
		border: 1px solid red;
		margin-left: 25%;
		background: white;
		margin-top: 60px;
		font-size: 20px;
	}
	.tuichu{
		color: red;
		font-size: 24px;
	}
</style>