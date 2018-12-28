<template>
	<div class="app-wrap" :class="{ 'hideSidebar':sidebar }">
		<div class="app-left">
			<sidebar :sidebarFlag = "sidebar"></sidebar>
		</div>
		<div class="app-right">
			<div class="content-head">
				<div class="hamburger" @click="navActive">
					<i class="iconfont icon-caidan"></i>
				</div>
				<userbar class="userbox" :userInfo = "userInfo"></userbar>
			</div>
			<div class="content-main">
				<tags />
				<main-view />
			</div>
		</div>
	</div>
</template>
<script>
	import { MessageBox  } from 'element-ui'
	import { mapActions, mapGetters } from 'vuex'
	import { sidebar, userbar, tags, mainView } from './components'
	export default {
		data() {
			return {
				userInfo: JSON.parse(sessionStorage.getItem('userInfo')) ,
			}
		},
		components: {
			sidebar,
			userbar,
			tags,
			mainView
		},
		computed: {
			...mapGetters(['sidebar'])
		},
		methods: {
			...mapActions(['setSidebar']),
			navActive() {
				this.setSidebar()
			}
		},
		mounted() {
		},
	}
</script>
<style scoped lang="scss">
	.app-wrap {
		width: 100%;
		height: 100%;
		min-width: 1200px;
		display: flex;
		flex-direction: row;
		overflow: hidden;

		.app-left {
			height: 100%;
			transition: width .3s;
		}

		.app-right {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;

			.content-head {
				height: 64px;
				line-height: 64px;
				padding-right: 30px;

				.hamburger {
					float: left;
					padding: 0 8px;
					height: 64px;
					line-height: 64px;
					transition: .3s;
					cursor: pointer;
					transform: rotate(0deg);

					.icon-caidan {
						font-size: 30px;
					}
				}

				.userbox {
					float: right;
				}
			}

			.content-main {
				padding: 10px;
				flex: 1;
				display: flex;
				flex-direction: column;
				background: #999;
				background: #EEF2F5;
			}
		}
	}

	.hideSidebar {
		.hamburger {
			transform: rotate(90deg) !important;
		}
	}
</style>