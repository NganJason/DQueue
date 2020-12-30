import TokenService from './token.service'
import axios from 'axios'

const ApiService = {

  setAuthHeader() {
    /**
     * Set default header which will be sent with every request
     */
    axios.defaults.headers.common.Authorization = `Bearer ${TokenService.getAccessToken()}`
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  get(resource, params = null) {
    return axios.get(resource, { params })
  },

  post(resource, data) {
    return axios.post(resource, data)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  }

}

export default ApiService