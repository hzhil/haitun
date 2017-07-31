<template>
	<div class="list">
		<div class="row">
			<dl>
				<dt><img src="static/indexboutique.gif"/></dt>
				<dd>全球精品馆</dd>
			</dl>
			<dl>
				<dt><img src="static/indexicon-global.png"/></dt>
				<dd>全球商家</dd>
			</dl>
			<dl>
				<dt><img src="static/indexicon-cate.png"/></dt>
				<dd>商品分类</dd>
			</dl>
			<dl>
				<dt><img src="static/indexicon-logistics.png"/></dt>
				<dd>物流查询</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		name:'list'
	}
</script>

<style>
	.row{
		margin: 10px 0px;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.row dl{
		width: 24%;
		text-align: center;
	}
	.row dl dt{
		margin-left: 20%;
		width: 60%;
	}
	.row dl dt img{
		width: 100%;
	}
</style>