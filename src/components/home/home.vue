<template>
  <div class="hello">
    <htop></htop>
    <hplay></hplay>
    <list></list>
    <img1></img1>
    <tui></tui>
    <wonder></wonder>
    <hglobal></hglobal>
    <!--<tab></tab>-->
  </div>
</template>

<script>
//	import Tab from '@/components/Tab'
	import Htop from '@/components/home/htop'
	import Hplay from '@/components/home/Hplay'
	import List from '@/components/home/List'
	import Img1 from '@/components/home/Img1'
	import Tui from '@/components/home/Tui'
	import Wonder from '@/components/home/Wonder'
	import Hglobal from '@/components/home/Hglobal'
	
	export default {
		name: 'name',
		components:{Htop,Hplay,List,Img1,Tui,Wonder,Hglobal}
	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	
</style>
