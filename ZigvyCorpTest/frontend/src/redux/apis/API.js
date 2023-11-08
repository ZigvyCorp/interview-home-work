import axios from "axios";
import baseURL from "./baseURL";

export const getProductsData = () => {
  return axios.get(`${baseURL.urlJsonServer}/products`);
};

export const getProductById = async (id) => {
  const response = await axios.get(`${baseURL.urlJsonServer}/products/${id}`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(
    `${baseURL.urlJsonServer}/products`,
    product
  );
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(
    `${baseURL.urlJsonServer}/products/${id}`
  );
  return response.data;
};

export const updateProduct = async (object) => {
  const response = await axios.put(
    `${baseURL.urlJsonServer}/products/${object.id}`,
    object.product
  );
  return response.data;
};

// export const testGetDataProduct = async (id) => {
// const response = await axios.get(`${baseURL.urlJsonServer}/products/${id}`);
// console.log("API xem api trả về cái gì", response);
// return response.data;
// };

export const testGetDataProduct = (id) => {
  return axios.get(`${baseURL.urlJsonServer}/products/${id}`);
};

export const apiRegister = async (user) => {
  const response = await axios.post(
    `${baseURL.serverURL}/api/v1/users/register`,
    user
  );
  return response.config.data;
};

export const apiLogin = async (infor) => {
  const response = await axios.post(
    `${baseURL.serverURL}/api/v1/users/login`,
    infor
  );
  return response.data.data;
};
