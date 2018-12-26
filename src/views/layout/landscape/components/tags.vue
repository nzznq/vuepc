<template>
    <ul class="tags-view">
        <li v-for="(item,index) in keepMenu" class="tag-item">text</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                keepMenu: [11]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .tags-view {
        border-top: 1px solid #ccc;
        padding: 6px 15px;

        .tag-item {
            padding: 3px 8px;
            border: 1px solid #ccc;
            float: left;
            margin-right: 10px;
            border-radius: 6px;
            cursor:pointer;
        }
    }
</style>