import { asyncHandle } from '../utils/asyncHandle'
import { API_BASE_URL } from '../config/apiConfig'

const getListPost = async ({ search }) => {
    const [response, err] = await asyncHandle(
        fetch(
            API_BASE_URL +
                '/posts?' +
                new URLSearchParams({
                    search: search,
                })
        )
    )

    if (err) {
        console.log(err)
    }
    let data = await response.json()
    data = data.map((value) => {
        let body = value.body
        value.body = body.length > 100 ? body.slice(0, 100) + '...' : body
        return value
    })
    return data
}

const getPostById = async (id) => {
    const [response, err] = await asyncHandle(fetch(API_BASE_URL + '/posts/' + id))
    if (err) {
        console.log(err)
    }
    return await response.json()
}
export { getListPost, getPostById }
