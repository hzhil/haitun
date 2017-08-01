<template>
	<div class="">
		<tab></tab>
		<seek></seek>
		<hot></hot>
	</div>
</template>

<script>
	import Tab from '@/components/Tab'
	import Seek from '@/components/home/seeks/Seek'
	import Hot from '@/components/home/seeks/hot'
	
	export default{
		name:'seeks',
		components:{Tab,Seek,Hot}
	}
</script>

<style>
</style>