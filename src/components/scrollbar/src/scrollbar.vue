<template>
    <div class="scrollbar">
        <slot />
    </div>
</template>

<script>
    export default {
        name: "scroll-bar"
    }
</script>

<style lang="scss" scoped>
    .scrollbar {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        scrollbar-track-color: transparent;
        scrollbar-highlight-color: transparent;
        scrollbar-face-color: rgba(0, 0, 0, 0.2);
        scrollbar-arrow-color: transparent;
        
        &::-webkit-scrollbar {
            width: 10px;
            height: 10px;
            background: transparent;
        }

        &::-webkit-scrollbar-track {
            border-radius: 15px;
            background-color:transparent;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 15px;
            background: transparent;
        }

        &:hover {
            &::-webkit-scrollbar-thumb {
                background: rgba(0,0,0,.2)
            }
        }
        
    }
</style>