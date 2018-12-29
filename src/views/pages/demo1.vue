<template>
    <div class="app-container" @click = "changeMsg">
        <scroll-bar>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
                <div class="con">模拟长页面</div>
        </scroll-bar>
    </div>
</template>

<script>
    export default {
        name: 'demo1',
        data() {
            return {
                msg:"我是demo1"
            }
        },
        methods: {
            changeMsg() {
                this.msg = '我的内容已发生改变'
            }
        },
    }
</script>

<style lang="scss" scoped>
    .con {
        padding: 30px;
        font-size: 30px;
        text-align: center;
    }
</style>
