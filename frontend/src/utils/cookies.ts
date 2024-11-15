import Cookies from "universal-cookie";
const cookies = new Cookies();
export const setCookie = (name: string, value: string, options?: any) => {
  if (cookies.get(name)) {
    cookies.remove(name);
  }
  return cookies.set(name, value, {
    ...options,
    path: options?.path ? "/" : options?.path,
  });
};
export const getCookie = (name: string, options?: any) => {
  return cookies.get(name, options);
};

export const removeCookie = (name: string, options?: any) => {
  return cookies.remove(name, options);
};
