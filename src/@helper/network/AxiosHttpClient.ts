// import React from "react";
import Axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import { IObject, IObjectPromise, Utils } from "../utils";
import { ApiException } from "./common";

export interface IAxiosRequestOptions extends AxiosRequestConfig {
  headers?: IObject;
}
export interface IAxiosResponse<T extends any> extends AxiosResponse {}
export class AxiosHttpClient {
  private baseUrl: string;
  private options: IAxiosRequestOptions;
  private interceptors: IObjectPromise;
  private instance: AxiosInstance;
  constructor(config: {
    baseurl: string;
    options: IAxiosRequestOptions;
    interceptors?: IObjectPromise;
  }) {
    const { baseurl = "", options = {}, interceptors = {} } = config;
    this.baseUrl = baseurl;
    this.options = options;
    if (interceptors) {
      this.interceptors = interceptors;
    } else {
      this.interceptors = {};
    }
    this.instance = Axios.create({
      baseURL: baseurl,
      ...options,
    });
  }

  private handerError(error?: any): ApiException {
    if (!error) {
      return new ApiException("Unknown", 500);
    }
    if (!error.isAxiosError) {
      if (error.message) {
        return new ApiException(error.message, 500);
      }
      return new ApiException("Unknown", 500);
    }
    console.log("handerError error", JSON.stringify(error));
    const { response, message = "Unknown", code } = error as AxiosError;
    if (response) {
      const { data = {}, status = 500 } = response;
      return new ApiException(message, status, data);
    }

    return new ApiException(message, 500, undefined, code);
  }

  private async intercept() {
    const headerAppend = await Utils.promiseAllObject(this.interceptors);
    return headerAppend;
  }

  async get<T>(endpoint: string, params: any = {}): Promise<IAxiosResponse<T>> {
    try {
      const headers = await this.intercept();
      const paramUrls = new URLSearchParams(params).toString();
      let url = endpoint;
      if (paramUrls) {
        url += "?" + paramUrls;
      }
      console.log("url", this.baseUrl + url);
      return await this.instance.get(url, { headers });
    } catch (error) {
      throw this.handerError(error);
    }
  }
  async post<T>(
    endpoint: string,
    body: any = {},
    params: any = {}
  ): Promise<IAxiosResponse<T>> {
    try {
      const headers = await this.intercept();
      const paramUrls = new URLSearchParams(params).toString();
      let url = endpoint;
      if (paramUrls) {
        url += "?" + paramUrls;
      }
      console.log("url:", url);
      console.log("headers:", headers);
      console.log("body", body);
      return await this.instance.post(url, body, {
        headers,
      });
    } catch (error) {
      throw this.handerError(error);
    }
  }

  async put<T>(
    endpoint: string,
    body: any = {},
    params: any = {}
  ): Promise<IAxiosResponse<T>> {
    try {
      const headers = await this.intercept();
      const paramUrls = new URLSearchParams(params).toString();
      let url = endpoint;
      if (paramUrls) {
        url += "?" + paramUrls;
      }
      return await this.instance.put(url, body, {
        headers,
      });
    } catch (error) {
      throw this.handerError(error);
    }
  }

  async patch<T>(endpoint: string, body: any = {}): Promise<IAxiosResponse<T>> {
    try {
      const headers = await this.intercept();

      const url = endpoint.trim();
      return await this.instance.patch(url, body, {
        headers,
      });
    } catch (error) {
      throw this.handerError(error);
    }
  }
  async delete<T>(
    endpoint: string,
    body: any = {},
    params: any = {}
  ): Promise<IAxiosResponse<T>> {
    try {
      const headers: { [key: string]: any } = await this.intercept();
      const paramUrls = new URLSearchParams(params).toString();
      let url = endpoint;
      if (paramUrls) {
        url += "?" + paramUrls;
      }
      return await this.instance.delete(url, {
        headers,
        data: body,
      });
    } catch (error) {
      throw this.handerError(error);
    }
  }

  async postFormData<T>(
    endpoint: string,
    data: any,
    params: any = {}
  ): Promise<IAxiosResponse<T>> {
    try {
      const headers: { [key: string]: any } = await this.intercept();
      const paramUrls = new URLSearchParams(params).toString();
      let url = endpoint;
      if (paramUrls) {
        url += "?" + paramUrls;
      }
      headers["Content-Type"] = "multipart/form-data";
      console.log("-------------------");
      console.log(url);
      console.log("-------------------");
      return await this.instance.post(url, data, {
        headers,
      });
    } catch (error) {
      throw this.handerError(error);
    }
  }
}
