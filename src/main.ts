import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setRouter } from './router'

const app = createApp(App)
setRouter(app)
app.mount('#app')
