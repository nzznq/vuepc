<template>
    <div class="userbar">
        <el-dropdown size="medium" @command="handleCommand">
            <span class="el-dropdown-link">
                <i class="iconfont icon-wodered"></i>{{userInfo.userName?userInfo.userName:'没有Key值'}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="个人信息">个人信息</el-dropdown-item>
                <el-dropdown-item command="清除缓存">清除缓存</el-dropdown-item>
                <el-dropdown-item divided command="退出登录">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
        data() {
            return {
            }
        },
        props: [ 'userInfo' ],
        methods: {
            ...mapActions([ 'FedLogOut']),
            handleCommand(command) {
                this.$message(command)
                if(command == "退出登录") {
                    this.FedLogOut().then( data => {
                        location.reload()
                    })
                }
            }
        },
        mounted() {
            console.log(this.userInfo.username)
        }
    }
</script>
<style lang="scss" scoped>
    .userbar {
        cursor: pointer;
    }

    .iconfont {
        float: left;
        font-size: 18px;
    }
</style>