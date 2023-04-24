import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { setRouter } from './router'
import { setupPlugins } from './plugins'

async function start() {
  const app = createApp(App)
  setRouter(app)
  await router.isReady()
  setupPlugins(app)
  app.mount('#app')
}

start()
