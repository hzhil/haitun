<template>
	<div class="content">
			
		<div class="conTop">
			<img :src="src1"/>
		</div>
		
		<h5>{{title}}</h5>
		<p>{{descript}}</p>
		<span>¥{{price}}</span>
		
		<div class="numberAdd">
			<p>数量:&nbsp;&nbsp;&nbsp;<span @click='loseButton'>-</span><span>{{counter}}</span><span @click='plusButton'>+</span></p>
		</div>
		<br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br />
	</div>
</template>

<script>
	export default{
		data(){
			return{
				counter:0,
				src1:'',
				title:'',
				descript:'',
				price:'',
				obj:{},
				goodsObj:{}
			}
		},
		created(){
			let objString = localStorage.getItem("productList");
			
			this.obj = JSON.parse(objString);	
			this.src1 = this.obj.big_image;
			this.title = this.obj.name;
			this.descript = this.obj.describe;
			this.price=this.obj.price;
			
			this.getObj()
		},
		methods:{
			getObj(){
				//定义要存储商品的数据
				this.goodsObj = {
					id:this.obj.entity_id,
					name:this.obj.name,
					img:this.obj.big_image,
					price:this.obj.price,
					counter:this.counter
				};
				this.$root.bus.$emit('goodsDetail',this.goodsObj);
				
			},
			//购买商品增加按钮
			plusButton(){
				//商品++，库存--
				this.counter++;
				this.goodsObj.counter = this.counter;
				
				this.$root.bus.$emit('goodsDetail',this.goodsObj);
				
//				this.$root.bus.$emit('changeNum',this.counter);
			},
			//购买商品减少按钮
			loseButton(){
				if(this.counter<=0){
					this.counter = 0;
					return
				}
				this.counter--;
				this.goodsObj.counter = this.counter;
				
				this.$root.bus.$emit('goodsDetail',this.goodsObj);
				
				this.$root.bus.$emit('changeNum',this.counter-1);
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
	}
	.conTop{
		width: 100%;
		text-align: center;
	}
	.conTop img{
		width: 60%;
		margin: 20px 0px;
	}
	.content h5{
		width: 90%;
		margin-left: 5%;
		font-size: 20px;
	}
	.content p{
		width: 90%;
		margin-left: 5%;
		color: gray;
	}
	.content>span{
		width: 90%;
		margin-left: 5%;
		color: red;
		font-size: 30px;
	}
	.numberAdd{
		width: 100%;
		height: 60px;
		line-height: 60px;
	}
	.numberAdd>p{
		width: 90%;
		margin-left: 5%;
		font-size: 20px;
		
	}
	.numberAdd>p span{
		display: inline-block;
		border: 1px solid #ccc;
		width: 40px;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
</style>