<template>
  <div class="block">
    <!--<span class="demonstration">Click 指示器触发</span>-->
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in arr" :key="item">
        <img :src="item.src" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
	export default {
		name: 'block',
		data(){
			return{
				arr:[
					{
						src:"static/20170505095419642.jpg"
					},
					{
						src:"static/20170717234207274.jpg"
					},
					{
						src:"static/20170724173920812.jpg"
					}
				]
			}
		}
	}
</script>

<style>
  .el-carousel__item img {
    width: 100%;
    height: 200px;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>