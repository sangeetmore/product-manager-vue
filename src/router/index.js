import Vue from 'vue'
import VueRouter from 'vue-router'
import ManagerView from '../views/ManagerView.vue'
import ListView from '../views/ListView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manager',
    component: ManagerView
  },
  {
    path: '/product-list',
    name: 'product-list',
    component: ListView

  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
