import Axios from 'axios'
import { DELETE, DOMAIN, GET, POST, PUT } from '../util/Constant/Constant'

export class baseService {
  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: GET,
    })
  }

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: POST,
      data: model,
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
  }

  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: PUT,
      data: model,
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
  }

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: DELETE,
    })
  }
}