import { getCookie } from "../utils/cookies";
import http from "../utils/http-request";

export const getData = async (url: string): Promise<any> => {
  const response = await http.get(url);
  const result = await response.json();
  return result;
};

export const createData = async (url: string, data: any) => {
  const response = await http.post(url, data, {
    headers: { "x-access-token": getCookie("x-access-token") },
  });
  const result = await response.json();
  return result;
};

export const updateData = async (url: string, data: any) => {
  const response = await http.patch(url, data, {
    headers: { "x-access-token": getCookie("x-access-token") },
  });
  const result = await response.json();
  return result;
};

export const deleteData = async (url: string) => {
  const response = await http.delete(url, {
    headers: { "x-access-token": getCookie("x-access-token") },
  });
  const result = await response.json();
  return result;
};
