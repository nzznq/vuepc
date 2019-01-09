import { _import } from '../utils/common'   //模块加载方法

const businessRouter = [{
	path: "/test",
  	name: "test",
	  component: _import("test/test"),
	  meta: {
		  title: 'test'
	  }
}]

export default businessRouter;




