<template>
	<div class="page">
		<button @click = fn>click</button>
		<div>{{res}}</div>
	</div>
</template>
<script>
export default{
	name:'test',
	data(){
		return{
			res: 123
		}
	},
	methods:{
		fn(){
			this.res = 6666;
		}
	}
}
</script>
<style scoped lang="scss">
	$bg: #ccc;
	.page{
		background: $bg;
		font-size: 16px;
	}
</style>