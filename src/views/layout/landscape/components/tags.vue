<template>
    <div class="tags-view-container">
        <div class="more-handle">
                <el-dropdown>
                        <el-button type="primary">
                          更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item @click.native="refreshSelectedTag(currentTag)">刷新当前</el-dropdown-item>
                          <el-dropdown-item @click.native="closeSelectedTag(currentTag)">关闭当前</el-dropdown-item>
                          <el-dropdown-item @click.native="closeOthersTags(currentTag)">关闭其他</el-dropdown-item>
                          <el-dropdown-item @click.native="closeAllTags">关闭全部</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
        </div>
        <div class="tags-view-wrapper">
            <router-link v-for="tag in visitedViews" ref="tag" :class="isActive(tag)?'active':''" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                :key="tag.path" tag="span" class="tags-view-item" @click.middle.native="closeSelectedTag(tag)"
                @contextmenu.prevent.native="openMenu(tag,$event)">
                {{ tag.title }}
                <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" v-if = "visitedViews.length != 1" />
            </router-link>
        </div>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">刷新</li>
            <li @click="closeSelectedTag(selectedTag)">关闭当前</li>
            <li @click="closeOthersTags(selectedTag)">关闭其他</li>
            <li @click="closeAllTags">关闭全部</li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                visible: false,
                top: 0,
                left: 0,
                selectedTag: {},  //选中的tag
                currentTag: {}  //当前路由 tag
            }
        },
        computed: {
            visitedViews() {
                return this.$store.state.tags.visitedViews
            }
        },
        watch: {
            $route() {
                this.addViewTags()
                this.moveToCurrentTag()
            },
            visible(value) {
                if (value) {
                    document.body.addEventListener('click', this.closeMenu)
                } else {
                    document.body.removeEventListener('click', this.closeMenu)
                }
            }
        },
        mounted() {
            this.addViewTags()
        },
        methods: {
            isActive(route) {
                if(route.path === this.$route.path) {
                    this.currentTag = route
                }
                return route.path === this.$route.path
            },
            addViewTags() {
                const { name } = this.$route
                if (name) {
                    this.$store.dispatch('addView', this.$route)
                }
                return false
            },
            moveToCurrentTag() {
                const tags = this.$refs.tag
                this.$nextTick(() => {
                    for (const tag of tags) {
                        if (tag.to.path === this.$route.path) {
                            if (tag.to.fullPath !== this.$route.fullPath) {
                                this.$store.dispatch('updateVisitedView', this.$route)
                            }
                            break
                        }
                    }
                })
            },
            refreshSelectedTag(view) {
                console.log(view)
                this.$store.dispatch('delCachedView', view).then(() => {
                    const { fullPath } = view
                    this.$nextTick(() => {
                        this.$router.replace({
                            path: '/redirect' + fullPath
                        })
                    })
                })
            },
            closeSelectedTag(view) {
                this.$store.dispatch('delView', view).then(({ visitedViews }) => {
                    if (this.isActive(view)) {
                        const latestView = visitedViews.slice(-1)[0]
                        if (latestView) {
                            this.$router.push(latestView)
                        } else {
                            this.$router.push('/')
                        }
                    }
                })
            },
            closeOthersTags(view) {
                this.$router.push(view)
                this.$store.dispatch('delOthersViews', view).then(() => {
                    this.moveToCurrentTag()
                })
            },
            closeAllTags() {
                this.$store.dispatch('delAllViews')
                this.$router.push('/')
            },
            openMenu(tag, e) {
                const menuMinWidth = 105
                const offsetLeft = this.$el.getBoundingClientRect().left
                const offsetWidth = this.$el.offsetWidth
                const maxLeft = window.screen.width - menuMinWidth
                const left = e.clientX + 15

                if (left > maxLeft) {
                    this.left = maxLeft
                } else {
                    this.left = left
                }
                this.top = e.clientY + 15

                this.visible = true
                this.selectedTag = tag
            },
            closeMenu() {
                this.visible = false
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .tags-view-container {
        width: 100%;
        padding-bottom:0;
        margin-bottom: 10px;

        .more-handle {
            margin-right: 22px;
            height: 100%;
            float: right;
            .el-button{
                height: 26px;
                line-height: 26px;
                padding: 0 8px;
                margin-top: 10px;
                padding-left: 10px;
            }
        }

        .tags-view-wrapper {
            background: #fff;
            padding: 8px 0;
            border-radius: 8px; 

            .tags-view-item {
                transition: width .3s;
                display: inline-block;
                position: relative;
                cursor: pointer;
                border-radius: 4px;
                border: 1px solid #d8dce5;
                color: #495060;
                background: #fff;
                padding: 5px 12px;
                font-size: 14px;
                margin-left: 5px;
                margin-right: 8px; 
                border-radius: 15px;

                &:hover .el-icon-close {
                    width: 16px;
                    opacity: 1;
                }

                &:first-of-type {
                    margin-left: 15px;
                }

                &:last-of-type {
                    margin-right: 15px;
                }

                &.active {
                    color: #169AFF;
                    border-color: #169AFF;

                    &::before {
                        content: '';
                        background: #169AFF;
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        position: relative;
                        margin-right: 2px;
                    }
                }
            }
        }

        .contextmenu {
            margin: 0;
            background: #fff;
            z-index: 100;
            position: absolute;
            list-style-type: none;
            padding: 5px 0;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
            box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

            li {
                margin: 0;
                padding: 7px 16px;
                cursor: pointer;

                &:hover {
                    background: #eee;
                }
            }
        }
    }
</style>

<style rel="stylesheet/scss" lang="scss">
    .tags-view-wrapper {
        .tags-view-item {
            .el-icon-close {
                opacity: 0;
                width: 0px;
                height: 16px;
                vertical-align: 2px;
                border-radius: 50%;
                text-align: center;
                transition: all .3s cubic-bezier(.645, .045, .355, 1);
                transform-origin: 100% 50%;

                &:before {
                    transform: scale(.6);
                    display: inline-block;
                    vertical-align: -3px;
                }

                &:hover {
                    background-color: #b4bccc;
                    color: #fff;
                }
            }
        }
    }
</style>