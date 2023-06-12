import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import YapilacakEkle from '../views/YapilacakEkle.vue'
import YapilacakGuncelle from '../views/YapilacakGuncelle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/yapilacakekle',
    name: 'yapilacakekle',
    component: YapilacakEkle
  },
  {
    path: '/yapilacakguncelle/:id',
    name: 'yapilacakguncelle',
    component: YapilacakGuncelle,
    props:true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
