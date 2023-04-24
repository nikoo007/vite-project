// vite/plugins/index.ts
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configMockPlugin } from './mock'

export function setupVitePlugins() {
  // vitePlugins就是Vite所有插件的配置列表
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    // 初始插件，在这里导入其他框架的resolver
    // Autoimport({
    //     resolvers: []
    // }),
    // Components({
    //     resolvers: []
    // })
  ]

  // 将mock的设置加入插件列表中
  vitePlugins.push(configMockPlugin(true, true))

  // 下面可以添加其他的插件
  // vitePlugins.push(...);

  return vitePlugins
}
