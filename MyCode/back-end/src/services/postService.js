import axios from 'axios';
export let getPosts = async () => {
    try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const users = await axios.get('https://jsonplaceholder.typicode.com/users')
        return {
            posts: posts.data,
            users: users.data
        };
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
}
