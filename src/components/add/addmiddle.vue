<template>
	<div class="content">
			
		<div class="conTop">
			<img :src="src1"/>
		</div>
		
		<h5>{{title}}</h5>
		<p>{{descript}}</p>
		<span>{{price}}</span>
		
		<div class="numberAdd">
			<p>数量:&nbsp;&nbsp;&nbsp;<span @click='lose'>-</span><span>{{counter}}</span><span @click='plus'>+</span></p>
		</div>
		<br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br />
	</div>
</template>

<script>
	export default{
		data(){
			return{
				counter:1,
				src1:'',
				title:'',
				descript:'',
				price:''
			}
		},
		created(){
			this.getObj()
		},
		methods:{
			getObj(){
				let objString = localStorage.getItem("obj");
				let obj = JSON.parse(objString);
				this.src1 = obj.src;
				this.title = obj.title;
				this.descript = obj.describe;
				this.price=obj.price
			},
			lose(){
				if(this.counter<=1){
					this.counter = 1
				}else{
					this.$root.bus.$emit('changeNum',this.counter-1);
					this.counter--
				}
			},
			plus(){
				this.counter++;
				this.$root.bus.$emit('changeNum',this.counter)
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