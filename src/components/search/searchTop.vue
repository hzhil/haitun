<template>
	<div class="sTop">
		<span @click="ret"><</span>
		<p><input type="text" placeholder="请输入搜索关键词"/></p>
	</div>
</template>
<script>
	export default{
//		data(){
//			return{}
//		},
		methods:{
			ret(){
//				window.history.go(-1)
				this.$router.back(-1)
			}
		}
	}
</script>

<style>
	.sTop{
		width: 100%;
		background: blue;
		height: 54px;
		display: flex;
		align-items: center;
	}
	.sTop span{
		font-size: 24px;
		color: white;
		margin-left: 15px;
	}
	.sTop p{
		width: 80%;
		min-width: 30px;
		margin-left: 15px;
		height: 36px;
		line-height: 30px;
		background: white;
		border-radius: 10px;
		background-image: url(../../../static/button-category.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
		background-position: 5px 8px;
	}
	.sTop p input{
		width: 60%;
		height: 26px;
		margin-left: 30px;
		border: none;
		outline: none;
	}
</style>