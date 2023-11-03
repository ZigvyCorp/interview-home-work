import http from './httpClient'

const basePath = '/users' as const;

export const usersApi = {
    async getUser(userId: string) {
        try {
            const res = await http.get(`${basePath}/${userId}`)
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