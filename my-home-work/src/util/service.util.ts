import axios, { AxiosRequestConfig } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

async function fetchData(url: string, method: HttpMethod, params?: unknown) {
  const config: AxiosRequestConfig = {
    method,
    url,
    params,
  };
  const response = await axios(config);

  return response.data;
}

export default fetchData;
