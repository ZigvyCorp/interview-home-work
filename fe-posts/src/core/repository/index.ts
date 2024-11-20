import { AxiosClient, IAxiosClient } from '../axios';
import { RawAxiosRequestHeaders } from 'axios';

export class BaseRepository extends AxiosClient {
  constructor(payload: IAxiosClient) {
    super(payload);
  }

  get({
    url,
    params = {},
    headers = {},
  }: {
    url: string;
    params?: Record<string, string | number>;
    headers?: RawAxiosRequestHeaders;
  }) {
    return this.getInstance().get(url, {
      params,
      headers: headers,
    });
  }

  post({
    url,
    params = {},
    body = {},
    headers = {},
  }: {
    url: string;
    params?: Record<string, string | number>;
    body: any;
    headers?: RawAxiosRequestHeaders;
  }) {
    return this.getInstance().post(url, body, {
      params,
      headers,
    });
  }

  put({
    url,
    params = {},
    body = {},
    headers = {},
  }: {
    url: string;
    params?: Record<string, string | number>;
    body: Record<string, unknown>;
    headers?: RawAxiosRequestHeaders;
  }) {
    return this.getInstance().put(url, body, {
      params,
      headers,
    });
  }

  patch({
    url,
    params = {},
    body = {},
    headers = {},
  }: {
    url: string;
    params?: Record<string, string | number>;
    body: Record<string, unknown>;
    headers?: RawAxiosRequestHeaders;
  }) {
    return this.getInstance().patch(url, body, {
      params,
      headers,
    });
  }

  delete({
    url,
    params = {},
    headers = {},
  }: {
    url: string;
    params?: Record<string, string | number>;
    headers?: RawAxiosRequestHeaders;
  }) {
    return this.getInstance().delete(url, {
      params,
      headers,
    });
  }
}
