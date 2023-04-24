import Axios from './Axios'
const http = new Axios({
  baseURL: '/api',
  timeout: 30000,
})

export default http
