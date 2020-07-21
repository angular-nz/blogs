import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index'
import commodityIndex from "@/views/commodity/index";
import messageBoard from "@/views/messageBoard/index";
import login from "@/views/user/login";
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes : [
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: "/shoe",
      name: 'shoe_index',
      component: commodityIndex,
    },
    {
      path: "/message/board",
      name: 'message_board',
      component: messageBoard,
    },
    {
      path: "/login",
      name: 'login',
      component: login,
    },
  ]
});
router.beforeEach((to, from, next) => {
  next();
})

export default router;
