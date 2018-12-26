<template>
    <div class="txt">
        <div>{{msg}}</div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'ps-txt',
    props:[ "msg" ]
}
</script>

<style scoped>
.txt {
    margin-top:20px; 
}
</style>