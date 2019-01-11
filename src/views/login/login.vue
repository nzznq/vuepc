<template>
    <div class="login-page">
        <el-form ref="loginForm" :model="formData" :rules="loginRules" class="login-form" auto-complete="on"
            label-position="left">
            <div class="title-container">
                <h3 class="title">系统登陆</h3>
            </div>

            <el-form-item prop="loginId">
                <span class="icon-container">
                    <i class="iconfont icon-wodered"></i>
                </span>
                <el-input v-model="formData.loginId" placeholder="请输入账号" name="username" type="text" auto-complete="on" />
            </el-form-item>

            <el-form-item prop="password">
                <span class="icon-container">
                    <!-- <svg-icon icon-class="password" /> -->
                </span>
                <el-input type="password" v-model="formData.password" placeholder="输入密码" name="password" auto-complete="on"
                    @keyup.enter.native="handleLogin" />
            </el-form-item>
            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登
                陆</el-button>
        </el-form>
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
                loading: false,
                formData: {
                    loginId: 'admin',
                    password: 'admin'
                },
                loginRules: {
                    loginId: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                    password: [{ required: true, message: '请输密码', trigger: 'blur' }]
                },
            }
        },
        methods: {
            handleLogin() {
                this.loading = true
                if (this.formData.loginId == 'admin' && this.formData.password == 'admin') {
                    setToken(this.formData.password)
                    let userInfo = {}
                    userInfo.userId = '12345678'
                    userInfo.userName = 'admin'
                    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
                    this.$router.push('/')
                } else {
                    Message({
                        type: 'error',
                        message: '密码错误'
                    });
                }
                //let infoEncode = passwordEncode(this.formData)
                // service.login(infoEncode.userId, infoEncode.password).then(data => {
                //     if (data && data.mxToken) {
                //         setToken(data.mxToken)
                //         sessionStorage.setItem('userInfo', JSON.stringify(data));
                //         this.$router.push('/')
                //     } else {
                //         Message({
                //             type: 'error',
                //             message: data.errMsg || '未知异常'
                //         });
                //     }
                // }).catch(error => {
                //     console.info(error);
                // })
            }
        },
        mounted() {

        },
    }
</script>

<style scoped lang="scss">
    .login-page {
        width: 100%;
        height: 100%;
        background: #2d3a4b;

        .title-container {
            font-size: 26px;
            color: #eee;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            max-width: 100%;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;

            .icon-container {
                padding: 6px 5px 6px 15px;
                color: #889aa4;
                vertical-align: middle;
                width: 30px;
                display: inline-block;
            }
        }

        & /deep/ .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }

        & /deep/ .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: #eee;
                height: 47px;
                caret-color: #fff;
            }
        }
    }
</style>