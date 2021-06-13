import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CandyStore from '../views/CandyStore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Store',
    name: 'CandyStore',
    component: CandyStore
  }
]

const router = new VueRouter({
  routes
})

export default router
