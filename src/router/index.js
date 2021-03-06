import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from "../components/test";
import sign from "../components/sign";
import login from "../components/login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/sign',
      name: 'sign',
      component:sign
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]

})
