import { App } from 'vue'
import { setupTailWindcss } from './tailwindcss'

export function setupPlugins(app: App) {
  setupTailWindcss()
}
