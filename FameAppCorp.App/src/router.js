import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
//import initProgress from './plugin/progressbar'

import Login from './pages/Login.vue'
import TestBrid from './pages/TestBrid.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'testBrid',
      path: '/homeTest',
      component: TestBrid,
      meta: { layout: 'simple', public: true }
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: { layout: 'simple', public: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.public)) {
    next()
  }
  else {
    if (store.state.userContext == null) {
      next('/login')
    }
    else {
      next()
    }
  }
});

//initProgress(router)

export default router
