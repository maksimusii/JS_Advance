import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/PageProductComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/StartPage.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/PageHome.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/PageCartComp.vue')
      },
      {
        path: 'catalog',
        name: 'Catalog',
        component: () => import('../views/CatalogComp.vue')
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('../views/CheckoutComp.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: Product,
        props: true
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/E404Comp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
