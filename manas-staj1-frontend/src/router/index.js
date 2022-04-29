import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import ProductsView from '../views/admin/ProductsView.vue'
import OrdersView from '../views/admin/OrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '/admin/orders',
        name: 'products',
        component: ProductsView
      },
      {
        path: '/admin/products',
        name: 'orders',
        component: OrdersView     
      },
    ]
  },  
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
