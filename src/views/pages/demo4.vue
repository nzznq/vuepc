<template>
    <div class="app-container" @click="changeMsg">
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: 'demo4',
        data() {
            return {
                msg: "我是demo4"
            }
        },
        methods: {
            changeMsg() {
                this.msg = '我的内容已发生改变'
            }
        },
    }
</script>