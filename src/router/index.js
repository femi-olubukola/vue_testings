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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
