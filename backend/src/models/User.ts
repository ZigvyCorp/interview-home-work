import { model, Schema } from "mongoose"

export interface IUser {
    username: string
    password: string
    name: string
    dob: string
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default: ""
        },
        dob: {
            type: String,
            default: ""
        },
    },
    { timestamps: {createdAt: "1576506719083"} },
)

const User = model<IUser>("User", userSchema)

export default User
