/* eslint-disable no-unneeded-ternary */
/* eslint-disable camelcase */
import axios from 'axios'


const RequestMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH',
}
export default class HttpUtility {
  static async get(endpoint, params, requestConfig) {
    const paramsConfig = params ? { params } : undefined

    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Get,
      },
      {
        ...paramsConfig,
        ...requestConfig,
      },
    )
  }

  static async post(endpoint, data, headers) {
    const config = data ? { data, headers } : undefined
    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Post,
      },
      config,
    )
  }

  static async put(endpoint, data, headers) {
    const config = data ? { data, headers } : undefined

    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Put,
      },
      config,
    )
  }

  static async patch(endpoint, data, headers) {
    const config = data ? { data, headers } : undefined

    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Patch,
      },
      config,
    )
  }

  static async delete(endpoint, data, headers) {
    const config = data ? { data, headers } : undefined

    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Delete,
      },
      config,
    )
  }

  static async request(restRequest, config) {
    try {
      const axiosRequestConfig = {
        ...config,
        method: restRequest.method,
        url: restRequest.url,
        headers: {
          'Content-Type': config?.headers?.['Content-Type'] ? config.headers['Content-Type'] : 'application/json',
          ...config?.headers,
        },
      }

      const [axiosResponse] = await Promise.all([axios(axiosRequestConfig)])

      const { status, data, request } = axiosResponse

      return {
        status,
        data,
        request,
      }
    } catch (error) {
      return error.request
    }
  }
}
