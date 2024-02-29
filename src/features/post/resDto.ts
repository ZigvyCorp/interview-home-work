export interface PostResponseDTO {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostReqDTO {
    title?: string | undefined
    body?: string | undefined
    email?: string | undefined
    id?: number | null
}

export interface UserResponseDTO {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export interface CommentResponseDTO {
    postId: number
    id: number
    name: string
    email: string
    body: string
}