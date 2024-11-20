export default interface IUser {
    id?: string;
    name: string,
    username?: string,
    email: string,
    password: string,
    avatar?: string | '',
    refreshToken?: string
}