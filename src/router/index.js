import { createRouter, createWebHashHistory } from 'vue-router'

import welcome from '../views/welcome.vue'
import anxiang from '../views/anxiang.vue'
import lingyin from '../views/lingyin.vue'
import webLink from '../views/webLink.vue'
import toolDownload from '../views/toolDownload.vue'

const routes = [
  {
    path:'/',
    name:'welcome',
    component:welcome
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
  },
  {
    path:'/toolDownload',
    name:'toolDownload',
    component:toolDownload
  },
  {
    path:'/webLink',
    name:'webLink',
    component:webLink
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
