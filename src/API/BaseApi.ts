import { IObjectPromise } from "../@helper/utils";
import {
  AxiosHttpClient,
  IAxiosRequestOptions,
} from "../@helper/network/AxiosHttpClient";
import { configEnv } from "../@config";

interface ServiceConfigiration {
  baseurl: string;
  options: IAxiosRequestOptions;
  interceptors?: IObjectPromise;
}

class ApiService {
  private httpClient: AxiosHttpClient;

  private config: ServiceConfigiration;

  constructor(config: ServiceConfigiration) {
    this.httpClient = new AxiosHttpClient(config);
    this.config = config;
  }
  async get<T = any>(endpoint: string, params: any = {}): Promise<T> {
    try {
      const res = await this.httpClient.get<T>(endpoint, params);
      return res.data;
    } catch (error) {
      console.log(endpoint, JSON.stringify(error));
      throw error;
    }
  }
  async post<T = any>(
    endpoint: string,
    body: any = {},
    params: any | undefined = {},
    isNeedLogOut: boolean | undefined = true
  ): Promise<T> {
    try {
      const res = await this.httpClient.post<T>(endpoint, body, params);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<T = any>(
    endpoint: string,
    body: any = {},
    params: any | undefined = {},
    isNeedLogOut: boolean | undefined = true
  ): Promise<T> {
    try {
      const res = await this.httpClient.delete<T>(endpoint, body, params);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async put<T = any>(
    endpoint: string,
    body: any = {},
    params: any | undefined = {}
  ): Promise<T> {
    try {
      const res = await this.httpClient.put<T>(endpoint, body, params);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async postFormData<T = any>(
    endpoint: string,
    data: any,
    params: any | undefined = {}
  ): Promise<T> {
    try {
      const res = await this.httpClient.postFormData<T>(endpoint, data, params);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export const getService = async () => {
  const { host } = configEnv();

  let headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
  };

  return new ApiService({
    baseurl: host || "",
    options: {
      timeout: 10000,
      headers,
    },
    interceptors: {},
  });
};
