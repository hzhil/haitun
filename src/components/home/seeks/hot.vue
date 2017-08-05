<template>
	<div class="hot">
		<p>{{hp}}</p>
		<ul>
			<li>美的惠儿</li>
			<li>成人奶粉</li>
			<li>Osteocare</li>
			<li>Brita必然的</li>
			<li>铁元</li>
			<li>红印黑糖</li>
			<li>悦诗风吟</li>
			<li>爱他美</li>
			<li>关节灵</li>
		</ul>
	</div>
</template>

<script>
	
	export default{
		name:"hot",
		data(){
			return {
				hp:'热门搜索'
			}
		}
	}
</script>

<style>
	.hot{
		/*border: 1px solid red;*/
		margin:15px;
	}
	.hot p{
		height: 50px;
		line-height: 50px;
		font-size: 24px;
		border-bottom: 1px solid black;
	}
	.hot ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.hot ul li{
		list-style: none;
		background: #ccc;
		margin-top: 10px;
		width: 100px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		margin-right: 10px;
	}
</style>