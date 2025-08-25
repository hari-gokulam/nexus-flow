import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './views/HomeView.vue'
import DesignerView from './views/DesignerView.vue'



const routes = [
  { path: '/', component: HomeView },
  { path: '/designer', component: DesignerView },

  // { path: '/orders', component: () => import('./views/OrdersView.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router