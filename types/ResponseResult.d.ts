//让axios请求结果有数据类型的支持
interface ResponseResult<T> {
  code: number
  message: string
  status: 'success' | 'error'
  data: T
}
