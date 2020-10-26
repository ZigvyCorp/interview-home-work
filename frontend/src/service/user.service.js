import { getAsync } from "../core/utils/http-client";


const usersUrl = "https://jsonplaceholder.typicode.com/users"

export const getUsersAsync = () => {
    return getAsync(usersUrl)
}