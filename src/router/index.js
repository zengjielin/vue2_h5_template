import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index', //使用遵循横线连接 (kebab-case)
      meta: {
        arrowText: "",//是否显示导航栏左箭头
        title: "主页",
        index: 1
      },
      component: () => import("@/views/index"),
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        arrowText: "",
        title: "登录",
        index: 1
      },
      component: () => import("@/views/login"),
    }
  ]
})
