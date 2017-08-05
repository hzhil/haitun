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
		<!--购物车中添加了商品，那么下面的显示，上面的隐藏-->
		<div class="have" v-else>
			<div class="rowAdd" v-for="(obj,index) in arrBuy">
				<div class="row">
					<input type="checkbox">
					<img :src="obj.big_image"/>
					<div>
						<h5>{{obj.name}}</h5>
						<span>¥{{obj.price}}</span>
						<p>
							<span @click="little">-</span>
							<span>{{counter}}</span>
							<span @click="more">+</span>
							<i class="el-icon-delete"></i>
						</p>
						
					</div>
				</div>
				<p class="msg">
					<span>重量：<b>0</b>g</span>
					<span>运费：<b>0.00</b></span>
					<span>关税：<b>0.00</b>(由商家承担)</span>
				</p>
			</div>
			<buybottom></buybottom>
		</div>
		
	</div>
</template>

<script>
	import buybottom from '@/components/buy/buyBottom';
	
	export default{
		data(){
			return{
				arrBuy:[],
				counter:1,
				isShow:false
			}
		},
		created(){
//			this.$root.bus.$on("buyShop",value=>{
//				this.print(value)
//			})
			this.getData()
		},
		methods:{
//			print(value){
//				console.log(value)
//			},
			getData(){
				this.arrBuy = JSON.parse(localStorage.getItem("buyShop"));
				console.log(this.arrBuy)
			},
			little(index){
				if(this.counter>1){
					this.counter--
				}else{
					this.counter=1
				}
			},
			more(index){
				this.counter++
			}
		},
		components:{buybottom}
	}
</script>

<style>
	.rowAdd{
		background: ghostwhite;
	}
	.row{
		border: 1px solid black;
		box-sizing: border-box;
		width: 100%;
		height: 120px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.row>img{
		width: 20%;
		max-width: 120px;
		border: 1px solid black;
	}
	.row>div{
		width: 60%;
	}
	.row>div>span{
		color: red;
		font-size: 16px;
	}
	.row>div p span{
		display: inline-block;
		border: 1px solid #ccc;
		width: 30px;
		height: 20px;
		line-height: 20px;
		text-align: center;
	}
	.msg{
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: flex;
		justify-content: space-around;
	}
	.msg span{
		display: inline-block;
	}
	
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