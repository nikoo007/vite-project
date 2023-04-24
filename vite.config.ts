import path from 'path'
import { UserConfig, ConfigEnv, defineConfig } from 'vite'
import { setupVitePlugins } from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(
  ({ command, mode }: ConfigEnv): UserConfig => {
    return {
      plugins: setupVitePlugins(),
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    }
  }
)
