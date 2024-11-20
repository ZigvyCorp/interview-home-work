import { get } from "lodash"
import { useParams } from "react-router-dom"

export const getPathParam = (key: string) => {
    const params = useParams()
    return get(params, key)
}