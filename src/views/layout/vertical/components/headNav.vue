<template>
    <div class="head-nav">
        <div class="nav-wrap" :class="{'nav-active':navFlag}">
            <ul class="nav-list" @mouseover="navFlag=true" @mouseleave="navFlag=false"> 
                <li class="nav-item" v-for="(item,index) in menu">
                    <span :class="['nav-item-title',{'first-active':firstActive == item }]">{{item.title}}</span>
                    <ul class="nav-item-list">
                        <router-link :to="child.path" v-for="child in item.children" tag="li" active-class="active" exact>
                            <li class="menu-name">{{child.name}}</li>
                        </router-link>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'head-nav',
        data() {
            return {
                navFlag: false,
                firstActive: false,
            }
        },
        props: {
            menu: {
                type: Array,
                default: []
            }
        },
        methods: {
            listhover() {
                this.navFlag = true
            },
            menuActive(condition) {
                for(let item of this.menu) {
                    for(let child of item.children) {
                        if(child.path == condition) {
                            this.firstActive = item
                        }
                    }
                }
            }
        },
        mounted() {
            this.menuActive(this.$route.path)
        },
        watch: {
            $route(to,form){
                this.menuActive(to.path)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .head-nav {
        width: 100%;
        height: 40px;
        position: relative;

        .nav-wrap {
            width: 100%;
            max-height: 40px;
            position: absolute;
            top: 0;
            background: rgba(41, 50, 66, 0.9);
            overflow: hidden;
            transition: max-height .4s;

            .nav-list {
                width: 1200px;
                margin: auto;
                color: #fff;


                .nav-item {
                    float: left;
                    width: 120px;
                    height: 100%;
                    min-height: 300px;
                    text-align: center;
                    box-sizing: border-box;
                    cursor: pointer;

                    &:hover {
                        background: rgba(0, 0, 0, 0.3);
                    }

                    .nav-item-title {
                        display: inline-block;
                        width: 120px;
                        line-height: 40px;
                    }

                    .menu-name {
                        line-height: 40px;

                        &:hover {
                            color: #2277da;
                        }
                    }

                    .active {
                        color: #2277da;
                    }

                    .first-active {
                        background: rgba(0,0,0,0.3);
                    }
                }
            }
        }

        .nav-active {
            max-height: 1000px;
        }
    }
</style>