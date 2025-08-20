import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import portfolio from '@/views/portfolio.vue'
import customer from '@/views/customer.vue'
import instructions from '@/views/instructions.vue'
import contact from '@/views/contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
    path: '/portfolio',
    name: 'portfolio',
    component:  portfolio
  },
  {
    path: '/customer',
    name: 'customer',
    component: customer
  },
  {
    path: '/instructions',
    name: 'instructions',
    component: instructions
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  }
  ],
})

export default router
