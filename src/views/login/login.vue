<template>
    <div class="home">
        <div class="login-wrap">
            <div class="login-box">
                <div class="title">登陆系统</div>
                <form class="form-con">
                    <input type="text" placeholder="请输入用户名或者邮箱" v-model="formData.loginId">
                    <input type="password" placeholder="请输入密码" v-model="formData.password">
                    <div class="login-btn" @click="login">登陆</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { passwordEncode } from '@/utils/common.js'
    import service from './service'
    import { getToken,setToken,removeToken } from '@/utils/common'
    import { Message } from 'element-ui'
    export default {
        data() {
            return {
                formData: {
                    loginId: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                let infoEncode = passwordEncode(this.formData)
                service.login(infoEncode.userId, infoEncode.password).then( data => {
                    if (data && data.mxToken) {
                        setToken(data.mxToken)
                        sessionStorage.setItem('userInfo', JSON.stringify(data));
                        this.$router.push('/')
                    } else {
                        Message({
                            type: 'error',
                            message: data.errMsg || '未知异常'
                        });
                    }
                }).catch(error => {
                    console.info(error);
                })
            }
        },
        mounted() {

        },
    }
</script>

<style scoped lang="scss">
    .home {
        width: 100%;
        height: 100%;
        background: #000;

        .login-wrap {
            position: absolute;
            top: 100px;
            right: 88px;
        }

        .login-box {
            border-radius: 14px;
            width: 320px;
            height: 360px;
            background: #fff;
            padding: 15px 25px;
        }

        .title {
            font-size: 24px;
            font-weight: 500;
            color: #000
        }

        input {
            box-sizing: border-box;
            width: 100%;
            height: 35px;
            padding-left: 35px;
            border: 1px solid #000;
            border-radius: 8px;
            margin-top: 30px;
        }

        .login-btn {
            cursor: pointer;
            background: #000;
            margin-top: 40px;
            border: none;
            padding: 10px 0;
            text-align: center;
            font-size: 18px;
            border-radius: 8px;
            color: #fff
        }
    }
</style>