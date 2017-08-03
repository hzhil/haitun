<template>
	<div class="bottom">
		<ul>
			<li>客服</li>
			<li class="num" @click="buyCar">购物车<span>{{numBuy}}</span></li>
			<li class="adds" @click="addBuy">加入购物车</li>
			<li class="mast">立即购买</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arrBuy:[],
				numBuy:0,
				val:1,
				obj:{}
			}
		},
		created(){
			this.$root.bus.$on("changeNum",value=>{
				this.print(value)
			}),
			this.getObj()
		},
		methods:{
			print(value){
				this.val=value
			},
			getObj(){
				let objString = localStorage.getItem("obj");
				this.obj = JSON.parse(objString);	
			},
			addBuy(){
				this.numBuy=this.numBuy+this.val;
				this.arrBuy.push(this.obj);
//				console.log(this.obj.price)
//				this.$root.bus.$emit('buyShop',this.arrBuy)
				
				localStorage.setItem("buyShop",JSON.stringify(this.arrBuy))
			},
			buyCar(){
				this.$router.push('/buy')
			}
		}
	}
</script>

<style>
	.bottom ul li{
		width: 25%;
		height: 55px;
		line-height: 55px;
		text-align: center;
		border: 1px solid #ccc;
		background: white;
	}
	.bottom ul .adds{
		background: pink;
		color: red;
	}
	.bottom ul .mast{
		background: red;
		color: white;
	}
	.bottom ul{
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		list-style: none;
	}
	.bottom ul .num{
		position: relative;
	}
	.bottom ul .num span{
		position: absolute;
		display: block;
		width: 18px;
		height: 18px;
		line-height: 18px;
		background: blue;
		color: white;
		border-radius: 50%;
		top: 5px;
		right: 15px;
	}
</style>