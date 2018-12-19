import Vue from "vue";
import Router from "vue-router";
const _import = require('./_import_module');	//模块加载方法

import businessRouter from "./business_router.js"	//业务模块路由

const routerModule = [{
  	path: "/",
  	name: "main",
  	component: _import("layout/landscape"),
  	children: [].concat(businessRouter)
}]

Vue.use(Router);
export default new Router({
	mode: "history",
  	base: process.env.BASE_URL,
  	routes: routerModule
});