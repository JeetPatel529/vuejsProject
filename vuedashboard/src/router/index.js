import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/user-list',
      name: 'Userlist',
      component: () => import('../pages/Userlist.vue')
    },
    {
      path: '/product-list',
      name: 'ProductList',
      component: () => import('../pages/ProductList.vue')
    },
    {
      path: '/add-product',
      name: 'Addproductlist',
      component: () => import('../pages/Addproduct.vue')
    },
  ]
})

export default router
