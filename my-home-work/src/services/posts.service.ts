import { LIMIT_POSTS } from "src/constant/app.constant";
import { IPost, RESOURCES } from "src/constant/resource.constant";
import { URL } from "src/constant/url.constant";
import getRandomDate from "src/util/random-date.util";
import fetchData from "src/util/service.util";

export const getPosts = async (page = 1) => {
  try {
    const data = await fetchData(
      `${URL}/${RESOURCES.posts}/?_page=${page}&_limit=${LIMIT_POSTS}`,
      "GET"
    );
    const posts = data.map((d: IPost) => {
      const startDate = new Date("2020-01-01");
      const endDate = new Date("2023-12-31");

      const randomDate = getRandomDate(startDate, endDate);
      return { ...d, createdAt: randomDate };
    });
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPost = async (id: string) => {
  try {
    const data = await fetchData(`${URL}/${RESOURCES.posts}/${id}`, "GET");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
