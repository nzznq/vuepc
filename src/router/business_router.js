const _import = require('./_import_module');	//模块加载方法


const businessRouter = [{
	path: "/test",
  	name: "test",
  	component: _import("test/test"),
  	meta:{
  		keepAlive: true
  	}
}]

export default businessRouter;




