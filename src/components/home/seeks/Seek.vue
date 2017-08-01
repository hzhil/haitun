<template>
	<div class="seek">
		<span @click="spancli"><</span>
		<p><input type="text" placeholder="请输入搜索关键词" v-model="name" @keyup="change(name)"/><button @click="change(name)">搜索</button></p>
		<ul>
			<li class="box" v-for="d in arr">{{d}}</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default{
		data(){
			return{
				arr:[],
				name:''
			}
		},
		methods:{
			spancli(){
				this.$router.push("/")
			},
			change(name){
				let _this = this;
//				axios.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+name+'&cb=JSON_CALLBACK',{dataType: 'JSONP'}).then(function(res){
//					console.log(res)
//				})
//				axios({
//					method:"get",
//					url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+name+"&cb=JSON_CALLBACK"	
//				}).then((res)=>{
//					console.log(res)
//				})
			}
		}
	}
</script>

<style>
	.seek{
		display: flex;
		align-items: center;
		margin-top: 30px;
	}
	.seek p{
		height: 40px;
		width: 320px;
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
</style>