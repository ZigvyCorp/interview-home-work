export interface IPost {
    id: number | string,
    userId: string | number
    title: string,
    body: string,
    createAt: Date,
}