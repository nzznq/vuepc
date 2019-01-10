import api from '@/api/index.js'
/**
 * 获取用户信息
 * @param token 
 */
let getUserInfo = (token) =>api.post('/api/mxmxController/getUserInfo',{
	token
});

/**
 * 获取数据
 */
let getMenu = () =>api.get('/getMenu')

export default {
    getUserInfo,
    getMenu
}