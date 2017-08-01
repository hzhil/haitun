<template>
	<div id="Hglobal">
		<p>全球精选</p>
		<div class="lie">
			<!--<lies v-for="obj in arr"></lies>-->
			<dl v-for="obj in list">
				<dt><img v-bind:src="obj.src1" ></dt>
				<dd>
					<h4>{{obj.hh}}</h4>
					<b>{{obj.bb}}</b><br/><span>{{obj.spans}}</span>
					<p><img :src="obj.src2">{{obj.pp}}</p>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name:"Hglobal",
		data(){
			return{
				list:true
			}	
		},
		created(){
			this.getDate()
		},
		methods:{
			getDate(){
				let _this = this;
				axios.get("static/json/home.json").then(function(res){
//					console.log(res.data)
					_this.list = res.data;
					
				})
			}
		}
	}
</script>

<style>
	#Hglobal>p{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		padding-left: 10px;
	}
	.lie dl{
		display:flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid black;
		border-top: 1px solid black;
	}
	.lie dl dt{
		width: 45%;
		
	}
	.lie dl dt img{
		width: 100%;
	}
	.lie dl dd{
		
	}
	.lie dl dd h4{
		margin-bottom: 10px;
	}
	.lie dl dd b{
		color: red;
		font-size: 18px;
	}
	.lie dl dd span{
		font-size: 15px;
	}
	.lie dl dd p{
		margin-top: 10px;
		height: 20px;
		line-height: 20px;
	}
	.lie dl dd p img{
		width: 20px;
		margin-right: 5px;
	}
</style>