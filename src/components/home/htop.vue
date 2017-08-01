<template>
	<div class="hTop">
    	<img src="static/data-image-png;base….png" @click="user"/>
    	<img src="static/logo_index.png" class="img2"/>
    	<img src="static/data-image-png;base… (1).png" @click="sea"/>
    </div>
</template>

<script>
	export default {
		name: 'htop',
		methods:{
			sea(){
				this.$router.push("/seeks")
			},
			user(){
				this.$router.push("/load")
			}
		}
	}
</script>
<style>
	.hTop{
		width: 100%;
		padding: 0px 10px;
		height: 49px;
		background: dodgerblue;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}
	.hTop img{
		height: 30px;
		width: 30px;
	}
	.hTop .img2{
		width: 80px;
	}
</style>