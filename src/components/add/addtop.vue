<template>
	<div class="addtop">
		<div class="top">
			<span @click="back"><</span>
			<ul>
				<li>商品</li>
				<li>详情</li>
				<li>评价</li>
			</ul>
			<p><img src="static/button-index.png" @click="toHome"></p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toHome(){
				this.$router.push("/")
			},
			back(){
				window.history.go(-1)
			}
		}
	}
</script>

<style>
	.top p img{
		width: 30px;
	}
	.top ul{
		list-style: none;
		display: flex;
		justify-content: space-between;
		width: 40%;
	}
	.top{
		width: 100%;
		height: 49px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: blanchedalmond;
		font-size: 20px;
		position: fixed;
		top: 0;
	}
</style>