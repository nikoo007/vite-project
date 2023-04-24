// plugin/mock.ts
import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(isBuild: boolean, prodMock: boolean) {
  return viteMockServe({
    // 模拟服务的文件夹，在设置了configPath后失效
    mockPath: 'mock',
    // 是否实时更新
    watchFiles: true,
    // 在模拟时忽略的文件名格式
    ignore: /^\_/,
    // 是否启动本地的mock文件，实质上是Mock开关
    localEnabled: true,
    // 是否在生产环境使用Mock
    // 用来动态控制生产环境是否开启Mock，通过动态添加代码到Main.ts中来实现
  })
}
