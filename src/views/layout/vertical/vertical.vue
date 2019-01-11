<template>
    <div class="app-wrap">
        <header>
            <div class="logo-wrap"></div>
            <head-nav :menu="menu"></head-nav>
        </header>
        <section class="app-section">
            <div class="section-content" :class="{'full-width': $route.meta.fullWidth}">
                <router-view />
            </div>
        </section>
    </div>
</template>

<script>
    import { headNav } from './components'
    export default {
        data() {
            return {
                menu:[{
                    title:"一级菜单",
                    children:[{
                        name: "test",
                        path: "/test"
                    },{
                        name: "demo",
                        path: "/demo"
                    }]
                },{
                    title:"一级菜单",
                    children:[{
                        name: "test",
                        path: ""
                    }]
                },{
                    title:"一级菜单",
                    children:[{
                        name: "test",
                        path: ""
                    }]
                },{
                    title:"一级菜单",
                    children:[{
                        name: "test",
                        path: ""
                    }]
                }]
            }
        },
        components: {
            headNav
        }
    }
</script>

<style lang="scss" scoped>
    .app-wrap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        min-width: 1200px;

        .logo-wrap {
            height: 70px;
        }

        .app-section {
            flex: 1;
            .section-content {
                width: 1200px;
                height: 100%;
                margin: auto;
            }

            .full-width {
                width: 100%;
            }
        }
    }
</style>