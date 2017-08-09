<template>
	<div id="tui">
		<div class="tui1">
			<h3>{{msg1}} </h3>
			<p>{{msg2}}</p>
		</div>
		<div class="lunbo">
			<swiper :options="swiperOption" ref="mySwiper">
			    <!-- slides -->
			    
			    <swiper-slide v-for="obj in arr"  :key = "obj.id">
			    	<dl>
						<dt><img :src="obj.src"/></dt>
						<dd>
							<p>{{obj.pp}}</p>
							<span>{{obj.sp}}</span> <b>{{obj.pri}}</b>
						</dd>
					</dl>
			    </swiper-slide>
			    <!-- Optional controls -->
			    <!--<div class="swiper-pagination"  slot="pagination"></div>-->
			    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
			    <!--<div class="swiper-button-next" slot="button-next"></div>-->
			    <div class="swiper-scrollbar"   slot="scrollbar"></div>
			</swiper>
		</div>

	</div>
</template>

<script>
	import axios from 'axios';
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name:'tui',
		data (){
			return{
				msg1:'海豚推荐',
				msg2:'RECOMMENDATION',
				arr:true,
				swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
		          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
		          notNextTick: true,
		          // swiper configs 所有的配置同swiper官方api配置
//		          autoplay: 3000,
				  //side的宽
		          width:150,
		          //水平垂直方向
		          direction : 'horizontal',
		          grabCursor : true,
		          setWrapperSize :true,
//		          autoHeight: true,
		          pagination : '.swiper-pagination',
//		          paginationClickable :true,
//		          prevButton:'.swiper-button-prev',//上一张
//		          nextButton:'.swiper-button-next',//下一张
//		          scrollbar:'.swiper-scrollbar',//滚动条
		          //鼠标滚轮控住与否
		          mousewheelControl : false,
		          observeParents:true,
		          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
		          debugger: true,
		          watchSlidesProgress : true,
				  watchSlidesVisibility : true,
//				  slidesPerView : auto,
				//图片间距
				  spaceBetween : 20,
				  //左侧偏移量
				  slidesOffsetBefore : 20,
				  //右侧偏移量
				  slidesOffsetAfter : -210,
		        }
				
			}
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
				let _this = this;
				axios.get("static/json/homeTui.json").then(function(res){
//					console.log(res)
					_this.arr = res.data
				})
			}
		},
		components: {
		    swiper,
		    swiperSlide
		}
	}
</script>
<style>
	.tui1{
		/*border: 1px solid red;*/
		height: 320px;
		width: 100%;
		background-image: url(../../../static/index-rebg.jpg);
		background-repeat: no-repeat;
		background-size: 100% ;
		text-align: center;
		color: white;
	}
	#tui{
		position: relative;
	}
	.lunbo{
		width: 100%;
		overflow: hidden;
		position: absolute;
		top: 60px;
	}
	.lunbo dl{
		width: 150px;
		background-color: white;
	}
	.lunbo dl dt{
		width: 100%;
	}
	.lunbo dl dt img{
		width: 100%;
	}
</style>