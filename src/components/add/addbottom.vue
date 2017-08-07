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
				localObj:{}
			}
		},
		created(){
			this.$root.bus.$on("changeNum",value=>{
				this.print(value)
			}),
			this.$root.bus.$on("goodsDetail",value=>{
				this.goodsDetail(value)
			})
		},
//		beforeDestroy(){
//			this.$root.bus.$off('changeNum');
//			this.$root.bus.$off('goodsDetail');
//		},
		methods:{
			print(value){
				this.val=value
			},
			goodsDetail(value){
//				传过来要本地存储的对象
				this.localObj = value;
			},
			addBuy(){
				//点击加入购物车，保存到本地
				//获取本地存储
			      var locationDataStr = localStorage.getItem("shopBuy");
			      var localtionData;
			      //如果为空则创建一个对象;否则将它转为json对象
			      if(!locationDataStr){
			        localtionData = {};
			      }else{
			        localtionData = JSON.parse(locationDataStr);
			      }
				//获取存储的数据,对要存储的数据与本地进行比较
			      var tempData = localtionData[this.localObj.id];
			      //如果没有数据，则把它加进本地存储中
			      if(!tempData){
			        localtionData[this.localObj.id] = this.localObj;
			      }else{
			        //之前有数据，将数量+1
			        tempData.counter += 1;
			      }
			      //存储到本地
			    localStorage.setItem("shopBuy",JSON.stringify(localtionData));
				
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