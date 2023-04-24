import http from '@/plugins/axios'
interface User {
  name: string
  age: number
  phone: number
}
export const test = () => http.request<User>({ url: 'get' })
