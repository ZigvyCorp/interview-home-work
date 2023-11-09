import { asyncHandle } from '../utils/asyncHandle'
import { API_BASE_URL } from '../config/apiConfig'

const getCommentsByPostId = async (id) => {
    const [response, err] = await asyncHandle(fetch(API_BASE_URL + '/comments/' + id))
    if (err) {
        console.log(err)
    }
    let data = await response.json()
    data = data.metadata
    return data
}
export { getCommentsByPostId }
