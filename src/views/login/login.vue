<template>
    <div class="home">
        <div class="header">
            <div class="logo">
                <img src="./image/logo.png" alt="logo"> 
                <img src="./image/logo-title.png" alt="logo-tit">
            </div>
        </div>
        <div class="section">
            <div class="logo-pic"></div>
        </div>
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
    import { getToken, setToken, removeToken } from '@/utils/common'
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
                service.login(infoEncode.userId, infoEncode.password).then(data => {
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
        display: flex;
        flex-direction: column;

        .header {
            height: 12%;
            display: flex;
            align-items: center;
            padding-left: 15%;
            .logo {
                img:first-child {
                    margin-right:30px;
                }
            }
        }

        .section {
            flex: 1;
            background: url(./image/login_bg.png) no-repeat;
            background-size: 100% 100%;

            .logo-pic {
                position: absolute;
                width: 581px;
                height: 562px;
                top: 55%;
                left: 15%;
                margin-top: -281px;
                background: url(./image/login_pic.png) no-repeat;
                background-size: 100% 100%;
            }
        }

        .login-wrap {
            position: absolute;
            top:  372px;
            right: 388px;
        }

        .login-box {
            border-radius: 14px;
            width: 320px;
            height: 300px;
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