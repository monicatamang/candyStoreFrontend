import Vue from 'vue'
import VueRouter from 'vue-router'
import CandyStore from '../views/CandyStore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CandyStore',
    component: CandyStore
  }
]

const router = new VueRouter({
  routes
})

export default router
