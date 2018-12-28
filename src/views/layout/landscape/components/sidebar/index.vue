<template>
    <div class="sidebar-container">
        <logo :isCollapse="sidebarFlag"></logo>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu :show-timeout="200" :default-active="$route.path" :collapse="sidebarFlag" mode="vertical" router>
                <sidebar-item v-for="item in menu" :item="item" :key="item.label"></sidebar-item>
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
                    icon: 'iconry',
                    children: [{
                        label: "人员管理",
                        path: '/test',
                    }, {
                        label: "部门管理",
                        path: '/demo1',
                        children: [{
                            label: "艾普智诚",
                            path: '/demo1',
                        }]
                    }],
                }, {
                    label: "菜单权限管理",
                    path: '/demo2',
                    icon: 'iconqx',
                    children: [{
                        label: "人员权限管理",
                        path: '/demo2',
                    }, {
                        label: "报警信息管理",
                        path: '/demo3',
                    }],
                }, {
                    label: "企业信息管理",
                    path: '/demo4',
                    icon: 'iconqy',
                    children: [{
                        label: "企业logo维护",
                        path: '/demo4',
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
        computed: {
            // menu() {
            //     let routers = this.$router.options.routes
            //     let menu = routers.filter(item => item.name == 'main')
            //     return menu
            // },
        },
    }
</script>

<style lang="scss">
    @import './styles/sidebar';
</style>