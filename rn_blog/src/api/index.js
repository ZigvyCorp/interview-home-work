const baseURL = 'https://jsonplaceholder.typicode.com/';

export const post = {
    fetchAllPost: async () => {
        try {
            const response = await fetch(baseURL + 'posts');
            const data = await response.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}

export const user = {
    fetchAllUser: async () => {
        try {
            const response = await fetch(baseURL + 'users');
            const data = await response.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}

export const comment={
    fetchAllComment: async () => {
        try {
            const response = await fetch(baseURL + 'comments');
            const data = await response.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}