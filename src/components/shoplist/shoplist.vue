<template>
	<div class="shoplist">
		
		<div class="sou">
			<span @click="ht"><</span>
			<p><input type="text" placeholder="请输入关键词"/></p>
			<img src="static/button-category.png"/>
		</div>
		
		<ul>
			<li v-for="(obj,index) in arr" :key="index" @click="tcli(index)"  :class="{sty:count==index}">{{obj.con}}</li>
		</ul>
		
		<div class="paixu">
			<dl v-for="obj in arr1">
				<dt><img :src="obj.src"/></dt>
				<dd>
					<p>{{obj.title}}</p>
					<span>{{obj.price}}</span>
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
				]
			}
		},
		created(){
			this.getData()
		},
		methods:{
			ht(){
				window.history.go(-1)
			},
			tcli(i){
				let _this = this;
//				console.log(i)
				_this.count=i
			},
			getData(){
				axios.get("static/json/shoplist.json").then((res)=>{
//					console.log(res.data)
					this.arr1 = res.data
				})
			}
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