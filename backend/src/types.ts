export type TPost = {
    userId: string,
    author: string,
    id: string,
    title: string,
    body: string
}

export type TUser = {
    id: string,
    name: string,
}

export type TComments = {
    postId: string,
    id: string,
    name: string,
    email: string,
    body: string
}