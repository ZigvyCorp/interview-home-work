/**
 * Get a list of posts based on a search text.
 * If a search text is provided, the API will return posts with titles containing the search text.
 * If no search text is provided, the API will return all posts.
 * @param textSearch The text to search for in the post titles.
 * @returns A Promise that resolves to an array of posts.
*/

import ApiInstance from "../requests/Gateway/Instance"
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function getListPosts(textSearch: string, page: number) {
    try {
        if (textSearch) {
            const response = await ApiInstance.get(`posts?title_like=${textSearch}`);
            return response;
        } else {
            const response = await ApiInstance.get(`posts?_limit=10&_offset=${page}`);
            return response;
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}