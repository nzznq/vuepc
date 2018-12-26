import api from '@/api/index.js'

let login = (loginId,password) => api.post('/api/mxmxController/login',{
    loginId,
    password,
    loginType:2
})

export default {
    login
}