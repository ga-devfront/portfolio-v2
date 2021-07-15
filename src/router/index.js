import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Competences from '../views/Competences'
import Contact from '../views/Contact'
import Portfolio from '../views/Portfolio'
import Services from '../views/Services'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/competences',
    name: 'Competences',
    component: Competences,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
