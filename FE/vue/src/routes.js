import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './views/HomeView.vue'
import DesignerView from './views/DesignerView.vue'
import LoginScreen from './views/LoginScreen.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginScreen },
  { path: '/designer', component: DesignerView },
  { path: '/roles', component: () => import('./views/RoleView.vue') },
  { path: '/tenants', component: () => import('./views/TenantView.vue') },
  { path: '/dashboard', component: () => import('./views/DashboardView.vue') },
  { path: '/workflow-designer', component: () => import('./views/WorkflowDesignerView.vue') },
  { path: '/workflow-instance', component: () => import('./views/WorkflowInstanceView.vue') },

  // { path: '/orders', component: () => import('./views/OrdersView.vue') },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;