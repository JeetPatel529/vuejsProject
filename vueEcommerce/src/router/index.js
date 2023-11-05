import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'About',
      component: () => import('../pages/About.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../pages/Categories.vue')
    },
    {
      path: '/product-list/:productcategorey',
      name: 'productlist',
      component: () => import('../pages/ProductList.vue')
    },
    {
      path: '/product/:productname/:productId',
      name: 'product',
      component: () => import('../pages/Product.vue')
    },
    {
      path: '/terms-&-conditions',
      name: 'termsandconditions',
      component: () => import('../pages/Terms&Conditions.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacypolicy',
      component: () => import('../pages/PrivacyPolicy.vue')
    },
  ]
})

export default router
