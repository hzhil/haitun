<template>
	<div id="wonder">
		<div class="row1">
			<p>精彩活动</p>
			<p>更多</p>
		</div>
		
		<div class="tu">
			<img src="static/20170724175935787.jpg"/>
			<div class="p1">
				<p>Dr Botanicals</p>
				<p>7.25-7.31</p>
			</div>
		</div>
		<div class="tu">
			<img src="static/20170725143453585.jpg"/>
			<div class="p1">
				<p>夏日清爽 一用听信</p>
				<p>7.25-7.31</p>
			</div>
		</div>
		<div class="tu">
			<img src="static/20170725150803490.jpg"/>
			<div class="p1">
				<p>夏日示爱 让男神“唇唇”欲动</p>
				<p>7.25-7.31</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {}
</script>

<style>
	.tu{
		position: relative;
		margin-bottom: 15px;
	}
	.tu .p1{
		box-sizing: border-box;
		padding: 0px 10px;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: black;
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		color: white;
		position: absolute;
		bottom: 0px;
	}
	.row1{
		height: 50px;
		width: 90%;
		margin-left: 5%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>