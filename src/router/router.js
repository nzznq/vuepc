import Vue from "vue";
import Router from "vue-router";
import { _import } from '../utils/common' //模块加载方法

import businessRouter from "./business_router.js"	//业务模块路由

const routerModule = [{
	path: '*',
	redirect: '/404',
	hidden: true
}, {
	path: '/401',
	component: _import('errorPage/401'),
}, {
	path: '/404',
	component: _import('errorPage/404'),
}, {
	path: "/login",
	name: 'login',
	component: _import("login/login")
}, {
	path: "/",
	name: "main",
	redirect: "/test",
	component: _import("layout/landscape/landscape"),
	children: [
		{
			path: 'redirect/:path*',
			component: _import('layout/components/redirect/redirect')
		}
	].concat(businessRouter)
}]

Vue.use(Router);
export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: routerModule
});