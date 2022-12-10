import { getRandomDate } from '../../helpers/date-helper';
import { serialize } from '../../helpers/object-helper';

export async function fetchPosts(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(response.statusText);
    const posts = await response.json();

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    let addedDatePostData = posts.map((post) => ({
      ...post,
      createdAt: serialize(
        getRandomDate(new Date(2015, 0, 1), new Date())
      )
    }));

    const sortedDatePostData = addedDatePostData.sort(
      (postA, postB) =>
        new Date(postB.createdAt) - new Date(postA.createdAt)
    );
    return sortedDatePostData;
  } catch (err) {
    throw new Error(`-Error: ${err}\n-End point: ${endpoint}`);
  }
}
