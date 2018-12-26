import Cookies from 'js-cookie'
import {
    setMaxDigits,
    RSAKeyPair,
    encryptedString
} from './lib/RSA'


const TokenKey = 'Admin-Token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

/**
 * 引入 路由组件
 * @param file 文件在views下的地址 
 */
export function _import(file) {
    return require('@/views/' + file + '.vue').default
}

/**
 * 登陆 账号密码RSA加密
 * @param obj 账号密码
 * @returns obj 加密后的账号密码
 */
export function passwordEncode(userInfo) {
    setMaxDigits(100);
    var key = new RSAKeyPair("10001", "", "866cafa116451ce58386c8286a75e21a534e1ca0fdb79ea6991d660911592f062097b8ac559711b6718407712334c12d383e5d9b40d0abcdbd3dbc54d2ff52cb");
    let info = {}
    info.password = encryptedString(key, encodeURIComponent(userInfo.password));
    info.userId = userInfo.loginId.trim();
    return info
}
