<template>
  <div class="logo">
    <transition name="fade">
      <span v-if="isCollapse" class="logo-wrap">
        <template>
          <div class="logo-bg" v-if="isCollapse"></div>
        </template>
      </span>
    </transition>
    <transition name="fade">
      <template v-if="!isCollapse">
        <span class="logo_title" key="1">UPMS</span>
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
    transition: opacity 2.5s;
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
    height: 64px;
    line-height: 64px;
    text-align: center;
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
    padding: 11px 5px;
  }
</style>