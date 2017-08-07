<template>
	<div class="keySearch">
		<div class="seek">
			<span @click="spancli"><</span>
			<p><input type="text" placeholder="请输入搜索关键词" v-model="name" @keyup="press"><button>搜索</button></p>
		</div>
		<ul class="uls" >
			<li v-for="item in myfilter(arr)" v-show="isH" @click="changes">{{item.title}}</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import qs from 'qs';
	
	export default{
		data(){
			return{
				isH:false,
				arr:[],
				name:''
			}
		},
		created(){
			let _this = this;
			axios.get("static/json/shoplist.json").then(function(res){
				_this.arr = res.data
			})
		},
		methods:{
			spancli(){
				this.$router.push("/")
			},
			press(){
				this.isH=true;
				let keyt = document.querySelector(".seek>p input");
				if(keyt.value==''){
					this.isH=false
				}
			},
			myfilter(arr){
				let _this = this;
				return arr.filter(function(obj){
					if(obj.title.indexOf(_this.name)>-1){
					  return obj.title
					}
				})
				this.isH=true
		   },
		   changes(e){
		        if(e.target){
		           console.log(e.target.innerHTML);
		           this.name=e.target.innerHTML;
		        }
		        this.isH=false;
		      }

		}
	}
</script>

<style>
	.keySearch{
		position: relative;
	}
	.seek{
		display: flex;
		align-items: center;
		margin-top: 30px;
	}
	.seek p{
		height: 40px;
		min-width: 320px;
		border: 1px solid black;
		border-radius: 10px;
		margin-left: 20px;
	}
	.seek span{
		font-size: 30px;
		margin-left: 10px;
	}
	.seek p input{
		height: 100%;
		width: 210px;
		margin-left: 30px;
		float: left;
		border: none;
		outline: none;
	}
	.seek p button{
		height: 100%;
		width: 80px;
		border: none;
		background: blue;
		color: white;
		font-size: 20px;
	}
	.uls{
		width: 80%;
		margin-left: 10%;
		list-style: none;
		position: absolute;
		top: 50px;
	}
	.uls li{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid red;
		background: white;
		
	}
</style>