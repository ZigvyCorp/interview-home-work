import { RESOURCES } from "src/constant/resource.constant";
import { URL } from "src/constant/url.constant";
import fetchData from "src/util/service.util";

export const getUsers = async () => {
  try {
    const data = await fetchData(`${URL}/${RESOURCES.USERS}`, "GET");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getUser = async (id: number) => {
  try {
    const data = await fetchData(`${URL}/${RESOURCES.USERS}/${id}`, "GET");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
