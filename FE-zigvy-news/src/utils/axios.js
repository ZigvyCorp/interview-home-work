import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url, params) {
    return this.instance.get(url, { ...params });
  }

  post(url, params) {
    return this.instance.post(url, { ...params });
  }

  put(url, params) {
    return this.instance.put(url, { ...params });
  }

  delete(url, params) {
    return this.instance.delete(url, { ...params });
  }
}

export default new AxiosService();