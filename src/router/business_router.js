import { _import } from '../utils/common'   //模块加载方法

const businessRouter = [{
	path: "/test",
  	name: "test",
	  component: _import("test/test"),
	  meta: {
		  title: 'test'
	  }
}, {
	path: "/demo1",
  	name: "demo1",
	  component: _import("pages/demo1"),
	  meta: {
		  title: '艾普智诚'
	  }
}, {
	path: "/demo2",
  	name: "demo2",
	  component: _import("pages/demo2"),
	  meta: {
		  title: '人员权限管理'
	  }
}, {
	path: "/demo3",
  	name: "demo3",
	  component: _import("pages/demo3"),
	  meta: {
		  title: '报警信息管理'
	  }
}, {
	path: "/demo4",
  	name: "demo4",
	  component: _import("pages/demo4"),
	  meta: {
		  title: '企业logo管理'
	  }
}]

export default businessRouter;




