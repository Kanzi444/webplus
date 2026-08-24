import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import VisiMisiView from '../views/VisiMisiView.vue'
import LayananView from '../views/LayananView.vue'
import LegalitasView from '../views/LegalitasView.vue'
import KontakView from '../views/KontakView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/visimisi', name: 'visimisi', component: VisiMisiView },
    { path: '/layanan', name: 'layanan', component: LayananView },
    { path: '/legalitas', name: 'legalitas', component: LegalitasView },
    { path: '/kontak', name: 'kontak', component: KontakView }
  ]
})

export default router