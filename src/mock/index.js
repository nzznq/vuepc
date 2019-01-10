import Mock from 'mockjs'

import { menuList } from './modules/menu'

function registerMock(mockArr) {
  mockArr.forEach(item => {
    Mock.mock(item.path, item.data)
  })
}

registerMock(menuList)

export default Mock