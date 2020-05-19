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
      name: 'Index',
      meta: {
        arrowText: "",
        title: "主页",
        index: 1
      },
      component: () => import("@/views/Index"),
    }
  ]
})
