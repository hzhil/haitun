<template>
	<div class="buyBottom">
		
		<div class="choose">
			<input type="checkbox">全选
		</div>
		
		<div class="totle">
			<p>合计<b>￥0.00</b></p>
			<span>(含运费,已优惠：￥0.00)</span>
		</div>
		
		<button>去结算(<b>0</b>)</button>
		
	</div>
</template>

<script>
	export default{}
</script>

<style>
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