<template>
  <div class="logo">
    <transition name="fade">
      <span v-if="isCollapse" class="logo-wrap">
        <template>
          <div class="logo-sm bgicon" v-if="isCollapse"></div>
        </template>
      </span>
    </transition>
    <transition name="fade">
      <template v-if="!isCollapse">
          <div class="logo-big bgicon"></div>
      </template>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "logo",
    data() {
      return {};
    },
    props: ["isCollapse"],
  };
</script>

<style scoped="scoped" lang="scss">
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-active {
    transition: opacity 2.8s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 125px;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    box-sizing: border-box;
  }

  .logo_title {
    padding: 0 5px 0 0;
    color: #409eff;
    font-size: 28px;

    &.is-bold {
      font-weight: 700;
    }
  }

  .logo-bg {
    height: 100%;
    background: url(./image/logo.png) no-repeat;
    background-size: 100%;
  }

  .logo-wrap {
    width: 100%;
    height: 100%;
    padding: 26px 10px;
  }
  .bgicon{
    background: url(./image/icon.png) no-repeat;
  }
  .logo-big{
    width: 93px;
    height: 100px;
    background-position: 0px 0px; 
  }
  .logo-sm{
    width: 40px;
    height: 35px;
    background-size: 100%;

  }
</style>