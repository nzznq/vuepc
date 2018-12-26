<template>
    <div class="sidebar-container">
        <logo :isCollapse="sidebarFlag"></logo>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu :show-timeout="200" :default-active="$route.path" :collapse="sidebarFlag" mode="vertical">
                <el-submenu index="4">
                    <template slot="title">
                        <i class="iconfont icon-renyuanxiaozu"></i>
                        <span slot="title">人员部门管理</span>
                    </template>
                    <el-menu-item index="4-1">人员部门管理</el-menu-item>
                    <el-submenu index="4-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="iconfont icon-permissions-user"></i>
                        <span slot="title">菜单权限管理</span>
                    </template>
                    <el-menu-item index="2-1">人员权限管理</el-menu-item>
                    <el-menu-item index="2-2">报警信息管理</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="iconfont icon-baojingguanli"></i>
                        <span slot="title">企业信息管理</span>
                    </template>
                    <el-menu-item index="3-1">企业logo维护</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import sidebarItem from './sidebarItem'
    import logo from '../logo/logo'

    export default {
        data() {
            return {
            }
        },
        methods: {
        },
        props: [ 'sidebarFlag' ],
        components: {
            sidebarItem,
            logo 
        },
    }
</script>

<style lang="scss">
	@import './styles/sidebar';
</style>