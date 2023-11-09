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
    data = data.metadata
    data = data.map((value) => {
        let content = value.content
        value.content = content.length > 100 ? content.slice(0, 100) + '...' : content
        return value
    })
    return data
}

const getPostById = async (id) => {
    const [response, err] = await asyncHandle(fetch(API_BASE_URL + '/posts/' + id))
    if (err) {
        console.log(err)
    }
    let data = await response.json()
    data = data.metadata
    return data
}
export { getListPost, getPostById }
