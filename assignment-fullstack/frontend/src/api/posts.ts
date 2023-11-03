import http from './httpClient'

const basePath = '/posts' as const;

export const postsApi = {
    async getPosts(payload?: { page: number, limit: number }) {
        try {
            const res = await http.get(`${basePath}`, {
                params: {
                    page: payload?.page
                }
            })
            const { data } = res.data;
            return {
                status: true,
                message: '',
                data: data,
            };
        }
        catch (err) {
            return Promise.reject({ status: false, message: err })
        }
    },
    async searchPost(query?: string) {
        try {
            const res = await http.get(`${basePath}`, {
                params: {
                    title: query
                }
            })
            const { data } = res.data;
            return {
                status: true,
                message: '',
                data: data,
            };
        }
        catch (err) {
            return Promise.reject({ status: false, message: err })
        }
    },
    async getPostById(id: any) {
        try {
            const res = await http.get(`${basePath}/${id}`)
            const { data } = res.data;
            return {
                status: true,
                message: '',
                data: data,
            };
        }
        catch (err) {
            return Promise.reject({ status: false, message: err })
        }
    }
}