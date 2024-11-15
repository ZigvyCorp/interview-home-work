import axios from "axios";

type FailedQueue = {
  resolve: (value: unknown) => void
  reject: (reason?: any) => void
}

let isRefreshing = false;
const failedQueue: FailedQueue[] = [];
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});


const processQueue = (error: any) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve("");
    }
  });
  failedQueue.length = 0;
};

instance.interceptors.response.use(function(response) {
  return response;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      try {
        await new Promise(function(resolve, reject) {
          failedQueue.push({ resolve, reject });
        });
        return await instance(originalRequest);
      } catch (err) {
        return await Promise.reject(err);
      }
    }
    originalRequest._retry = true;
    isRefreshing = true;
    return new Promise(function(resolve, reject) {
      getRefreshToken()
        .then(() => {
          processQueue(null);
          resolve(instance(originalRequest));
        })
        .catch((err) => {
          processQueue(err);
          reject(err);
        })
        .finally(() => {
          isRefreshing = false;
        });
    });
  }
  return Promise.reject(error);
});
export default instance;
const getRefreshToken = async () => "";