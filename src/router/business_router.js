import { _import } from '../utils/common'   //模块加载方法

const businessRouter = [{
	path: "/test",
  	name: "test",
	  component: _import("test/test"),
	  meta: {
		  title: 'test'
	  }
},{
	path: "/demo",
  	name: "demo",
	  component: _import("test/demo"),
	  meta: {
		  title: 'demo',
		  fullWidth:true
	  }
}]

export default businessRouter;




