import axios, { AxiosInstance, AxiosResponse } from 'axios';
import queryString from 'query-string';

export interface IAxiosClient {
  baseURL: string;
}

export class AxiosClient {
  private baseURL: string;
  private instance: AxiosInstance;

  constructor(payload: IAxiosClient) {
    this.baseURL = payload.baseURL;
    this.instance = this.init();

    // this.instance.interceptors.request.use(this.interceptorsRequestFail);

    this.instance.interceptors.response.use(
      this.interceptorsResponseSuccess,
      this.interceptorsResponseFail
    );
  }

  private init() {
    return axios.create({
      baseURL: this.baseURL,
      timeout: 100000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      paramsSerializer: {
        serialize: (params: Record<string, any>) => {
          return queryString.stringify(params);
        },
      },
    });
  }

  private interceptorsResponseFail(err: any) {
    const responseErrorData = err?.response?.data;
    if (responseErrorData) return Promise.reject(responseErrorData);
    return Promise.reject(err);
  }

  private interceptorsResponseSuccess(res: AxiosResponse) {
    if (res && res.data) return res.data;
    return res;
  }

  private interceptorsRequestFail(err: any) {
    if (err.response && err.response.data) return err.response.data;
    return Promise.reject(err);
  }

  public getInstance() {
    return this.instance;
  }
}
