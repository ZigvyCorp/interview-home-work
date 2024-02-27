/* eslint-disable react-refresh/only-export-components */

import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ReactNode, useEffect } from "react";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN,
});


interface AxiosInterceptorProps {
  children: ReactNode;
}

const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  useEffect(() => {
    // console.log("useEffect");
    const configUse = instance.interceptors.request.use((config) => {
      //set up header if necessary
      return config;
    });
    const resInterceptor = (response: AxiosResponse) => {
      console.log("resInterceptor", response);
      return response;
    };

    const errInterceptor = (error: AxiosError) => {
      //set up dispatch if get error
      return Promise.reject(error);
    };

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => {
      instance.interceptors.response.eject(interceptor);
      configUse;
    };
  }, []);

  return <>{children}</>;
};

export default instance;
export { AxiosInterceptor };
