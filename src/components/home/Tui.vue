<template>
	<div id="tui">
		<div class="tui1">
			<h3>{{msg1}} </h3>
			<p>{{msg2}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:'tui',
		data (){
			return{
				msg1:'海豚推荐',
				msg2:'RECOMMENDATION'
			}
		}
	}
</script>
<style>
	.tui1{
		/*border: 1px solid red;*/
		height: 200px;
		width: 100%;
		background-image: url(../../../static/index-rebg.jpg);
		background-repeat: no-repeat;
		background-size: 100% ;
		text-align: center;
		color: white;
	}
</style>