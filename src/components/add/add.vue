<template>
	<div class="add">
		<addtop></addtop>
		
		<addmiddle></addmiddle>
		
		<addbottom></addbottom>
	</div>
</template>

<script>
	import Addbottom from '@/components/add/addbottom'
	import Addtop from '@/components/add/addtop'
	import Addmiddle from '@/components/add/addmiddle'
	
	export default{
		components:{Addmiddle,Addtop,Addbottom}
	}
</script>

<style>
	
</style>