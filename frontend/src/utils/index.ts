export type Status = "idle" | "pending" | "succeeded" | "failed"

export const APIHost = "http://localhost:5000/api"
export const APIPaths = {
    Post: `${APIHost}/posts`,
}
