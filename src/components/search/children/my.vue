<template>
	<div class="my">
		<p>奶粉辅食</p>
		<div class="milk">
			<dl @click="shop">
				<dt><img src="http://assets.haituncun.com/media/wysiwyg/category/ymuyin/ynaiffs/ypeifnf.jpg?imageView2/0/w/140/h/140"></dt>
				<dd>配方奶粉</dd>
			</dl>
			<dl>
				<dt><img src="http://assets.haituncun.com/media/wysiwyg/category/ymuyin/ynaiffs/ypeifnf.jpg?imageView2/0/w/140/h/140"/></dt>
				<dd>配方奶粉</dd>
			</dl>
			<dl>
				<dt><img src="http://assets.haituncun.com/media/wysiwyg/category/ymuyin/ynaiffs/ypeifnf.jpg?imageView2/0/w/140/h/140"/></dt>
				<dd>配方奶粉</dd>
			</dl>
			<dl>
				<dt><img src="http://assets.haituncun.com/media/wysiwyg/category/ymuyin/ynaiffs/ypeifnf.jpg?imageView2/0/w/140/h/140"/></dt>
				<dd>配方奶粉</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			shop(){
				this.$router.push("/shoplist")
			}
		}
	}
</script>

<style>
	.milk{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.milk dl{
		width: 30%;
		text-align: center;
	}
	.milk dl dt{
		width: 100%;
	}
	.milk dl dt img{
		width: 100%;
	}
</style>