<template>
	<div class="shoplist">
		<!--搜索框-->
		<div class="sou">
			<span @click="ht"><</span>
			<p><input type="text" placeholder="请输入关键词"/></p>
			<img src="static/button-category.png" >
		</div>
		<!--人气、销量、价格、帅选  小标题-->
		<ul>
			<li v-for="(obj,index) in arr" :key="index" @click="tcli(index)"  :class="{sty:count==index}">{{obj.con}}</li>
		</ul>
		<!--商品的列表-->
		<div class="paixu">
			<dl v-for="(obj,index) in arr1">
				<dt><img :src="obj.big_image" @click="add(index)"></dt>
				<dd>
					<p>{{obj.name}}</p>
					<span>¥{{obj.price}}</span>
				</dd>
			</dl>
		</div>
		
	</div>
</template>
<script>
	import axios from 'axios';
	
	export default{
		data(){
			return{
				count:0,
				arr1:[],
				arr:[
					{con:'人气'},
					{con:'销量'},
					{con:'价格'},
					{con:'筛选'},
				],
				i:0,
				a:0
			}
		},
		created(){
			this.getData()
		},
		methods:{
			ht(){
				window.history.go(-1)
			},
			//点击进入产品详情页面
			add(index){
				this.$router.push("/add")
//				console.log(index)
				let obj = this.arr1[index];
				obj = JSON.stringify(obj);
				localStorage.setItem("productList",obj)
			},
			tcli(i){
				console.log(i)
				this.count=i;
				this.a++;
				//人气排序
				if(i == 0){
					return this.arr1.sort(function(x,y){
						return x.provider_id - y.provider_id
					})
					//销量排序
				}else if(i==1){
					return this.arr1.sort((x,y)=>{
						return x.is_stock - y.is_stock
					})
					//价格排序
				}else if(i==2){
					if(this.a % 2 == 0){
			          return this.arr1.sort(function(x,y){
			            return x.price-y.price;
			          });
			        }else{
			          return this.arr1.sort(function(x,y){
			            return -(x.price-y.price);
			          })
			        }
				}
				
			},
			getData(){
				axios.get("static/json/1.json").then((res)=>{
					this.arr1 = res.data.data.items
				})
			}
		},
		mounted(){
			let _this = this;
			let sw = true;
			window.addEventListener("scroll",function(){
//				document.body.scrollTop 滚动条高度,即文档滚动的高度 
//				window.innerHeight 窗口高度
//				document.body.offsetHeight 文档高度
				if((document.body.scrollTop+window.innerHeight) >= (document.body.offsetHeight)){
//					console.log(document.body.scrollTop);
//					console.log(window.innerHeight)
//					console.log(document.body.offsetHeight)
//					第一次到底部的滚动条高度
					let oneBase = 2000;
//					最开始为0
					let num = 1;
//					第一次到底部
					if(document.body.scrollTop >= (oneBase+(num-1)*2000)){
						if(sw){
							axios.get("static/json/"+(num+1)+".json").then((res)=>{
//								console.log(res.data.data.items)
								for(var i=0;i<res.data.data.items.length;i++){
									_this.arr1.push(res.data.data.items[i]);
								}
								sw = true;
								num++;
							})	
							sw = false;
						}
					}
				}
			})
		}
	}
</script>

<style>
	.paixu dl{
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid gray;
	}
	.paixu dl dt{
		width: 40%;
	}
	.paixu dl dt img{
		width: 100%;
	}
	.paixu dl dd{
		width: 60%;
	}
	.paixu dl dd p{
		width: 90%;
		height: 40px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 10px;
	}
	.paixu dl dd span{
		color: red;
	}
	.shoplist ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		list-style: none;
		border-bottom: 1px solid gray;
	}
	.shoplist ul li{
		height: 40px;
		width: 20%;
		text-align: center;
		line-height: 40px;
	}
	.sty{
		color: red;
	}
	.shoplist .sou{
		height: 50px;
		background: #999;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.shoplist .sou span{
		margin-left: 10px;
		font-size: 30px;
		
	}
	.shoplist .sou img{
		width: 30px;
		margin-right: 10px;
	}
	.shoplist .sou p{
		width: 70%;
		background: blanchedalmond;
		border-radius: 13px;
		/*border: 1px solid red;*/
	}
	.shoplist .sou p input{
		height: 26px;
		background: blanchedalmond;
		margin-left: 30px;
		border: none;
		outline: none;
	}
</style>