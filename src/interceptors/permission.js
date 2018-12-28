import router from '../router/router'
import store from '../store'
import { MessageBox } from 'element-ui'
import {
	getToken,
} from '@/utils/common' // getToken from cookie

const whiteList = ['/login'] //白名单

router.beforeEach((to, from, next) => {
	if(getToken()) {
		if(to.path == '/login') {
			next({
				path: '/'
			})
		} else{
			if(sessionStorage.getItem('userInfo') == null) {
				MessageBox.confirm('session过期，请重新登录',  '确定登出', {
				confirmButtonText: '重新登录',
				type: 'warning'
				}).then(() => {
					store.dispatch('FedLogOut').then(() => {
						location.reload();
					});
				});
			}
			next()
		}
	} else {
		/* token不存在*/
		if(whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
			next()
		} else {
			next('/login') // 否则全部重定向到登录页
		}
	}
})
