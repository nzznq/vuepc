<template>
	<el-container class="test">
		<el-header>人员管理</el-header>
		<el-main>
			<el-button @click="requestUser">人员信息</el-button>
			<ps-txt :msg = "message" >123456</ps-txt>
		</el-main>
	</el-container>
</template>
<script>
	import servcie from './service'
	import { getToken } from '@/utils/common'
	import psTxt from './components/txt'
	export default {
		name: 'test',
		data() {
			return {
				message:'这是一个局部组件'
			}
		},
		components:{
			psTxt
		},
		methods: {
			requestUser() {
				let token = getToken()
				servcie.getUserInfo(token).then( info => {
					this.$message("人员名称：" +info.userName + " （控制台查看更多信息）")
					console.log(info)
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	.test {
		height: 100%;

		.el-main {
			background-color: #E9EEF3;
			color: #333;
			text-align: left;
		}

		.el-header {
			background-color: #B3C0D1;
			color: #333;
			text-align: center;
			line-height: 60px;
		}

		.el-table td,
		.el-table th.is-leaf {
			line-height: 30px;
		}
	}
</style>