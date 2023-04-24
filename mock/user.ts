// test.ts
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        status: 'succes',
        data: {
          name: '测试成功',
          age: 18,
          phone: 12312312,
        },
      }
    },
  },
] as MockMethod[]
