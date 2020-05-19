import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/PageHome.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/PageCartComp.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/CatalogComp.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutComp.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/PageProductComp.vue')
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
