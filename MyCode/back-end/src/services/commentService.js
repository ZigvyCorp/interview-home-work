import axios from 'axios';
export let getComment = async (postId) => {
    try {
        const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        return comments.data

    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
}
