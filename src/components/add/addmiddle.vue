<template>
	<div>
		<div class="content">
			
			<div class="conTop">
				<img :src="src1"/>
			</div>
			
			<h5>{{title}}</h5>
			<p>{{descript}}</p>
			<span>¥{{price}}</span>
			
			<div class="numberAdd">
				<p>数量:&nbsp;&nbsp;&nbsp;<span @click='loseButton'>-</span><span>{{counter}}</span><span @click='plusButton'>+</span></p>
			</div>
			<br /><br /><br /><br /><br />
			<br /><br /><br /><br /><br />
		</div>
		<div class="bottom">
			<ul>
				<li>客服</li>
				<li class="num" @click="buyCar">购物车<span>{{numBuy}}</span></li>
				<li class="adds" @click="addBuy">加入购物车</li>
				<li class="mast">立即购买</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		data(){
			return{
				counter:1,
				src1:'',
				title:'',
				descript:'',
				price:'',
				obj:{},
				goodsObj:{},
				
				arrBuy:[],
				numBuy:0,
				localObj:{}
			}
		},
		created(){
			let objString = localStorage.getItem("productList");
			
			this.obj = JSON.parse(objString);	
			this.src1 = this.obj.big_image;
			this.title = this.obj.name;
			this.descript = this.obj.describe;
			this.price=this.obj.price;
			
			this.getObj()
		},
		
		
		methods:{
			getObj(){
				//定义要存储商品的数据
				this.goodsObj = {
					id:this.obj.entity_id,
					name:this.obj.name,
					img:this.obj.big_image,
					price:this.obj.price,
					counter:this.counter
				};
//				this.$root.bus.$emit('goodsDetail',this.goodsObj);
			},
			//购买商品增加按钮
			plusButton(){
				//商品++，库存--
				this.counter++;
				this.goodsObj.counter = this.counter;
//				this.$root.bus.$emit('goodsDetail',this.goodsObj);
			},
			//购买商品减少按钮
			loseButton(){
				if(this.counter<=1){
					this.counter = 1;
					this.goodsObj.counter = this.counter;
					return
				}
				this.counter--;
				this.goodsObj.counter = this.counter;
//				this.$root.bus.$emit('goodsDetail',this.goodsObj);
			},
			
			addBuy(){
				this.localObj = this.goodsObj;
				//点击加入购物车，保存到本地
				//获取本地存储
			      var locationDataStr = localStorage.getItem("shopBuy");
			      var localtionData;
			      //如果为空则创建一个对象;否则将它转为json对象
			      if(!locationDataStr){
			        localtionData = {};
			      }else{
			        localtionData = JSON.parse(locationDataStr);
			      }
				//获取存储的数据,对要存储的数据与本地进行比较
			      var tempData = localtionData[this.localObj.id];
			      //如果没有数据，则把它加进本地存储中
			      if(!tempData){
			        localtionData[this.localObj.id] = this.localObj;
			      }else{
			        //之前有数据，将数量+1
			        tempData.counter += this.counter;
			      }
			      //存储到本地
			    localStorage.setItem("shopBuy",JSON.stringify(localtionData));
				//判断账号是否已经登录，如果登录那么将购买的商品添加到后台 
				let uid = JSON.parse(localStorage["usernames"]).uid;
				if(uid){
					//用户名存在，将购物车信息存入dpd管理系统,对存储信息进行更新
					let buyDataString = JSON.stringify(localtionData);
					axios({
						method:"put",
						url:'http://localhost:6500/dolphin/'+uid,
						data:{
							buyData:buyDataString
						}
					}).then((res)=>{
						console.log(res.config.data)
					})
				}else{
					console.log("请登录")
				}

			},
			buyCar(){
				this.$router.push('/buy')
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.conTop{
		width: 100%;
		text-align: center;
	}
	.conTop img{
		width: 60%;
		margin: 20px 0px;
	}
	.content h5{
		width: 90%;
		margin-left: 5%;
		font-size: 20px;
	}
	.content p{
		width: 90%;
		margin-left: 5%;
		color: gray;
	}
	.content>span{
		width: 90%;
		margin-left: 5%;
		color: red;
		font-size: 30px;
	}
	.numberAdd{
		width: 100%;
		height: 60px;
		line-height: 60px;
	}
	.numberAdd>p{
		width: 90%;
		margin-left: 5%;
		font-size: 20px;
		
	}
	.numberAdd>p span{
		display: inline-block;
		border: 1px solid #ccc;
		width: 40px;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	.bottom ul li{
		width: 25%;
		height: 55px;
		line-height: 55px;
		text-align: center;
		border: 1px solid #ccc;
		background: white;
	}
	.bottom ul .adds{
		background: pink;
		color: red;
	}
	.bottom ul .mast{
		background: red;
		color: white;
	}
	.bottom ul{
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		list-style: none;
	}
	.bottom ul .num{
		position: relative;
	}
	.bottom ul .num span{
		position: absolute;
		display: block;
		width: 18px;
		height: 18px;
		line-height: 18px;
		background: blue;
		color: white;
		border-radius: 50%;
		top: 5px;
		right: 15px;
	}
</style>