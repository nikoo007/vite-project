interface ViteEnv {
  VITE_SOME_KEY: string
  VITE_SOME_URL: string
}
interface ImportMetaEnv extends ViteEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
