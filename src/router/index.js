import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/another',
    name: 'AnotherPage',
    component: () => import('../components/AnotherPage')
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('../components/Testing')
  },
  {
    path: '/qr',
    name: 'QrCode',
    component: () => import('../components/QrCode')
  },
  {
    path: '/weekly',
    name: 'WeeklyCalender',
    component: () => import('../components/reusables/WeeklyCalender')
  },
  {
    path: '/sparkline',
    name: 'HeartRateSparklines',
    component: () => import('../components/HeartRateSparklines')
  },
  // {
  //   path: '/login',
  //   name: 'LoginPage',
  //   component: () => import('../components/LoginPage')
  // }
  {
    path: '/directory',
    name: 'UserDirectory',
    component: () => import('../components/UserDirectory')
  },
  {
    path: '/default',
    name: 'Default',
    component: () => import('../views/Default')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
