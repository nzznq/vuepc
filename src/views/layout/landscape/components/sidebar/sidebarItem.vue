<template>
    <el-submenu :index="item.path">
        <template slot="title">
            <i class="sidebar-icon" :class="item.icon" v-if = "item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
            <sidebar-item v-if="child.children&&child.children.length>0" :item="child" :key="child.path" />
            <el-menu-item v-else :index="child.path">
                <i class="sidebar-icon" :class="child.icon" v-if = "child.icon"></i>
                <span slot="title">{{child.label}}</span>
            </el-menu-item>
        </template>
    </el-submenu>
</template>

<script>
    export default {
        name: 'sidebarItem',
        props: {
            item: {
                type: Object,
            }
        }
    }
</script>