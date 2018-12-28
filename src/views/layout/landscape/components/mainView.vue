<template>
    <div class="main-view">
        <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedViews">
                <router-view/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([ "cachedViews" ])
        },
    }
</script>

<style lang="scss" scoped>
    .main-view {
        height: 100%;
        border-radius: 8px; 
        overflow: hidden;
    }

    /*fade-transform*/
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .5s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>