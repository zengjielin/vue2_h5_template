<template>
  <div id="app">
    <div class="app-root" :class="{'is-padding-top':isPaddingTop}">
      <div class="app-header">
        <div class="placeholder" v-show="isPaddingTop"></div>
        <div class="app-nav-bar">
          <van-nav-bar
            :title="navBarTitle"
            :left-text="arrowText"
            :left-arrow="false"
            @click-left="goBack"
          />
        </div>
      </div>
      <div class="app-page">
        <transition :name="transitionName">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { isBankAbcClient } from "@/util/isBankAbcClient";
export default {
  data() {
    return {
      navBarTitle: "主页",
      isPaddingTop: false,
      transitionName: "",
      arrowText: ""
    };
  },
  name: "App",
  methods: {
    goBack() {
      if (!this.arrowText) {
        return;
      }
      this.$router.go(-1);
    }
  },
  watch: {
    $route(to, from) {
      const toIndex = to.meta.index;
      const fromIndex = from.meta.index;
      this.transitionName = toIndex < fromIndex ? "slide-right" : "slide-left";
      this.navBarTitle = to.meta.title;
      this.arrowText = to.meta.arrowText;
    }
  },
  created() {
    isBankAbcClient()
      ? (this.isPaddingTop = true)
      : (this.isPaddingTop = false);
  }
};
</script>

<style lang='scss'>
#app {
  font-family: "Rajdhani-Medium", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: #fafafa;
  .app-root {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    user-select: none;
    padding-top: 92px;
    box-sizing: border-box;
    .app-header {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .placeholder {
        padding-top: 88px;
      }
      .app-nav-bar {
      }
    }
    .app-page {
      height: 100%;
      overflow-y: scroll;
      .slide-right-enter-active,
      .slide-right-leave-active,
      .slide-left-enter-active,
      .slide-left-leave-active {
        will-change: transform;
        transition: all 500ms;
        position: absolute;
      }
      .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }

      .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }

      .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }

      .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }
    }
  }
  .is-padding-top {
    padding-top: 180px;
  }
}
</style>
