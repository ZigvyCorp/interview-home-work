import CookieHelper from "./cookie-hepler";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export const getFormData = (data: { [name: string]: any }): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v));
    } else if (typeof value != 'undefined') {
      formData.append(key, value);
    }
  });
  return formData;
};

const getRequestHeaders = async (isFormData?: boolean): Promise<any> => {
  const token = CookieHelper.getItem('token');

  const headers = new Headers();
  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }
  if (!isFormData) {
    headers.append('Content-Type', 'application/json');
  }
  return headers;
};

// Attach body as search params
const getRequestUrl = (query: string, body?: any) => {
  return API_HOST + query + (body ? '?' + new URLSearchParams(body) : '');
};

const apiFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  try {
    const response = await fetch(input, init);
    const result = await response.json();
    if (!response.ok || response.status != 200) {
      const message = `Lỗi: ${result.message || response.status}`;
      throw new Error(message);
    }
    return result;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async (query: string, body: any) => {
  const isFormData = body instanceof FormData;
  const headers = await getRequestHeaders(isFormData);
  return await apiFetch(getRequestUrl(query), {
    method: 'POST',
    headers,
    body: isFormData ? body : JSON.stringify(body)
  });
};

export const apiDelete = async (query: string, body: any) => {
  const isFormData = body instanceof FormData;
  const headers = await getRequestHeaders(isFormData);
  return await apiFetch(getRequestUrl(query, body), {
    method: 'DELETE',
    headers,
    body: isFormData ? body : JSON.stringify(body)
  });
};

export const apiPut = async (query: string, body: any) => {
  const isFormData = body instanceof FormData;
  const headers = await getRequestHeaders(isFormData);
  return await apiFetch(getRequestUrl(query), {
    method: 'PUT',
    headers,
    body: isFormData ? body : JSON.stringify(body)
  });
};

export const apiPatch = async (query: string, body: any) => {
  const isFormData = body instanceof FormData;
  const headers = await getRequestHeaders(isFormData);
  return await apiFetch(getRequestUrl(query), {
    method: 'PATCH',
    headers,
    body: isFormData ? body : JSON.stringify(body)
  });
};

export const apiGet = async (query: string, body?: any) => {
  const headers = await getRequestHeaders();
  return await apiFetch(getRequestUrl(query, body), {
    method: 'GET',
    headers
  });
};
