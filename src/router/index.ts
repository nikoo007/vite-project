import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export function setRouter(app: App) {
  app.use(router)
}
export default router
