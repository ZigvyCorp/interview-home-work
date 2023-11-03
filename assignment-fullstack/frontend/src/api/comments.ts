import http from './httpClient'

const basePath = '/comments' as const;

export const commentsApi = {
    async getComments(postId: string) {
        try {
            const res = await http.get(`${basePath}/${postId}`)
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