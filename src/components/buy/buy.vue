<template>
	<div class="buy">
		
		<div class="kong" v-if="!totle">
			<div class="yuan">
				<img src="static/button-cart.png"/>
			</div>
			<p>购物车空空如也</p>
			<router-link to='/'><button>去逛逛</button></router-link>
			<router-link to='/load'><button>去登录</button></router-link>
		</div>
		<!--购物车中添加了商品，那么下面的显示，上面的隐藏-->
		<div class="have" v-else>
			<div class="rowAdd" v-for="(obj,key) in buyObj">
				<div class="row">
					<input type="checkbox" :checked="isChecked">
					<img :src="obj.img"/>
					<div>
						<h5>{{obj.name}}</h5>
						<span>¥{{obj.price}}</span>
						<p>
							<span @click="little(key)">-</span>
							<span>{{obj.counter}}</span>
							<span @click="more(key)">+</span>
							<span @click="dele(key)"><i class="el-icon-delete"></i></span>
						</p>
						
					</div>
				</div>
				<p class="msg">
					<span>重量：<b>0</b>g</span>
					<span>运费：<b>0.00</b></span>
					<span>关税：<b>0.00</b>(由商家承担)</span>
				</p>
			</div>
		</div>
		<!--底部的-->
		<div class="buyBottom">
			<div class="choose">
				<input type="checkbox" v-model="isChecked">全选
			</div>
			
			<div class="totle">
				<p>合计<b>￥{{totle}}</b></p>
				<span>(含运费,已优惠：￥0.00)</span>
			</div>
			
			<button>去结算(<b>0</b>)</button>
			
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				buyObj:{},
				t:1,
				totle:0,
				isChecked:true,
				cartObj:{}
			}
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
				this.buyObj = JSON.parse(localStorage.getItem("shopBuy"));
		        //计算商品的总价格
		        this.cartObj = this.buyObj;
		        for(var i in this.cartObj){
		            this.totle += this.cartObj[i]["counter"]*this.cartObj[i]["price"];
		        }
			},
			dele(key){
				//获取本地存储
		        var localData = localStorage.getItem("shopBuy");
		      	var shopDataObj = JSON.parse(localData);
		      	delete shopDataObj[key];
		      	
		      	localStorage.setItem("shopBuy",JSON.stringify(shopDataObj));
		        this.buyObj = JSON.parse(localStorage.getItem("shopBuy"));
		      	//计算商品的总价格
		      	this.totle = 0;
		      	this.cartObj = this.buyObj;
		        for(var i in this.cartObj){
		            this.totle+= this.cartObj[i]["counter"]*this.cartObj[i]["price"];
		        }
		        
			},
			little(key){			
				//获取本地存储
		        var localData = localStorage.getItem("shopBuy");
		      	var shopDataObj = JSON.parse(localData);
		        var number = shopDataObj[key]["counter"]--;
//				console.log(number)
				if(number<=0){
					delete shopDataObj[key]
				};
				
		        localStorage.setItem("shopBuy",JSON.stringify(shopDataObj));
		        this.buyObj = JSON.parse(localStorage.getItem("shopBuy"));
				//计算商品的总价格
				this.totle = 0;
		        for(var i in this.buyObj){
		            this.totle += this.buyObj[i]["counter"]*this.buyObj[i]["price"];
		        }
		        
			},
			more(key){
				//获取本地存储
		        var localData = localStorage.getItem("shopBuy");
		      	var shopDataObj = JSON.parse(localData);
//		     	console.log(shopDataObj[key]["counter"]);
		        shopDataObj[key]["counter"]++;
		        
		        localStorage.setItem("shopBuy",JSON.stringify(shopDataObj));
		        this.buyObj = JSON.parse(localStorage.getItem("shopBuy"));
				//计算商品的总价格
				this.totle = 0;
		        this.cartObj = this.buyObj;
		        for(var i in this.cartObj){
		            this.totle+= this.cartObj[i]["counter"]*this.cartObj[i]["price"];
		        }		
		        
				
			}
		}
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
	.buyBottom{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: greenyellow;
	}
	.buyBottom .choose{
		margin-left: 15px;
	}
	.buyBottom .totle{
		text-align: center;
	}
	.buyBottom>button{
		height: 50px;
		border: none;
		min-width: 120px;
		background: red;
		color: white;
		font-size: 20px;
	}
</style>