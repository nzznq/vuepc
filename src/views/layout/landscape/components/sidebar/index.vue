<template>
    <div class="sidebar-container">
        <logo :isCollapse="sidebarFlag"></logo>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu :show-timeout="200" :default-active="$route.path" :collapse="sidebarFlag" mode="vertical" router>
                <el-submenu index="">
                    <template slot="title">
                        <i class="iconfont icon-renyuanxiaozu"></i>
                        <span slot="title">人员/部门管理</span>
                    </template>
                    <el-submenu index="11">
                        <span slot="title">部门管理</span>
                        <el-menu-item index="/">艾普智诚</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/test">人员管理</el-menu-item>
                </el-submenu>
                <el-submenu index="111">
                    <template slot="title">
                        <i class="iconfont icon-permissions-user"></i>
                        <span slot="title">菜单权限管理</span>
                    </template>
                    <el-menu-item index="">人员权限管理</el-menu-item>
                    <el-menu-item index="">报警信息管理</el-menu-item>
                </el-submenu>
                <el-submenu index="1111">
                    <template slot="title">
                        <i class="iconfont icon-baojingguanli"></i>
                        <span slot="title">企业信息管理</span>
                    </template>
                    <el-menu-item index="1">企业logo维护</el-menu-item>
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
                menu: [{
                    label: "人员部门管理",
                    path: '/1',
                    icon: 'icon-renyuanxiaozu',
                    children: [{
                        label: "人员管理",
                        path: '/11',
                        children: {
                            label: "部门管理",
                            path: '/111',
                        }
                    }],
                }, {
                    label: "菜单权限管理",
                    path: '/2',
                    icon: 'icon-permissions-user',
                    children: [{
                        label: "人员权限管理",
                        path: '/21',
                    }, {
                        label: "报警信息管理",
                        path: '/22',
                    }],
                }, {
                    label: "企业信息管理",
                    path: '/3',
                    icon: 'icon-baojingguanli',
                    children: [{
                        label: "企业logo维护",
                        path: '/31',
                    }],
                }]
            }
        },
        methods: {
        },
        props: ['sidebarFlag'],
        components: {
            sidebarItem,
            logo
        },
    }
</script>

<style lang="scss">
    @import './styles/sidebar';
</style>