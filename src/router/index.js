import { createRouter, createWebHashHistory } from 'vue-router'

import anxiang from '../views/anxiang.vue'
import lingyin from '../views/lingyin.vue'

const routes = [
  {
    path:'/'
  },
  {
    path:'/anxiang',
    name:'anxiang',
    component:anxiang
  },
  {
    path:'/lingyin',
    name:'lingyin',
    component:lingyin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
