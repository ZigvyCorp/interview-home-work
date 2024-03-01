import axios from "axios";

export default class HttpRequest {
  constructor(baseUrl, timeout = 30 * 1000) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }
  getRequest() {
    const instance = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeout,
      headers: {
        "Content-Type": "application/json",
      },
    });

    instance.interceptors.response.use(
      async (response) => {
        const { data } = response;
        return Promise.resolve(data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return instance;
  }
}
