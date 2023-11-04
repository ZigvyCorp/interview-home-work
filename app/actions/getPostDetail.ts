/**
 * Get a list of posts based on a search text.
 * If a search text is provided, the API will return posts with titles containing the search text.
 * If no search text is provided, the API will return all posts.
 * @param textSearch The text to search for in the post titles.
 * @returns A Promise that resolves to an array of posts.
*/

import ApiInstance from "../requests/Gateway/Instance"

export default async function getPostDetail(id: number) {
    try {
        const response = await ApiInstance({
            method: 'get',
            url: `posts/${id}`,
        });
        return response;
    } catch (err) {
        console.error(err);
        throw err;
    }
}