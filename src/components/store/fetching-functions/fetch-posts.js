import { getRandomDate } from '../../../helpers/date-helper';
import { serializeDate } from '../../../helpers/object-helper';

export async function fetchPosts(endpoint) {
  try {
    const response = await fetch(endpoint);
    const totalPosts = response?.headers.get('x-total-count');
    if (!response.ok) throw new Error(response.statusText);
    const posts = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 250));

    let addedDatePostData = posts.map((post) => ({
      ...post,
      createdAt: serializeDate(
        getRandomDate(new Date('2016-09-13'), new Date('2019-09-13'))
      )
    }));

    return { posts: addedDatePostData, totalPosts };
  } catch (err) {
    throw new Error(`-Error: ${err}\n-End point: ${endpoint}`);
  }
}
