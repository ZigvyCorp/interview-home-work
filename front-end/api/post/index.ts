import BaseAPI from './methods'

const { globalCRUD, patch } = new BaseAPI<any>('posts')

export const postApi = {
	...globalCRUD,
	addComment: (params: any) => patch('/addComment', params)
}
