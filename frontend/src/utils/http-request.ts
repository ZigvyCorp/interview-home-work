import { ErrorWithStatus, UnauthorizedError } from "./http-error";
type CustomOptions = RequestInit & { baseUrl?: string };
interface HttpRequest {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  options?: Partial<CustomOptions>;
}

async function handleRequestError(res: any) {
  const statusCode = res.status;
  const data = await res.json();
  if (statusCode === 401) {
    throw new UnauthorizedError({
      message: data.errors[0].message,
      status: statusCode,
    });
  } else {
    throw new ErrorWithStatus({
      message: data.errors[0].message,
      status: statusCode,
    });
  }
}

const request = async ({
  method,
  url,
  options,
}: HttpRequest): Promise<Response> => {
  const body = options?.body ? JSON.stringify(options.body) : undefined;
  const baseHeaders = {
    "Content-Type": "application/json",
  };

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const fullUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    body,
    method,
  });
  if (!res.ok) {
    try {
      await handleRequestError(res);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return res;
};

const http = {
  get(url: string, options?: Omit<CustomOptions, "body">): Promise<Response> {
    return request({ method: "GET", url, options });
  },

  post(url: string, body: any, options?: Omit<CustomOptions, "body">) {
    return request({ method: "POST", url, options: { ...options, body } });
  },

  put(url: string, body: any, options?: Omit<CustomOptions, "body">) {
    return request({ method: "PUT", url, options: { ...options, body } });
  },

  patch(url: string, body: any, options?: Omit<CustomOptions, "body">) {
    return request({ method: "PATCH", url, options: { ...options, body } });
  },

  delete(url: string, options?: Omit<CustomOptions, "body">) {
    return request({ method: "DELETE", url, options: { ...options } });
  },
};

export default http;
