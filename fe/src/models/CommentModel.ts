import { User } from "./UserModel";

export interface Comment {
    id?: number;
    owner?: number;
    ownerDetail?: User;
    post?:number;
    content?: string;
}