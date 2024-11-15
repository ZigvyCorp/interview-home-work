import User from "@/models/user";
import bcrypt from "bcrypt";
import {CreateUserDto} from "@/models/dtos/create-user-dto";

const saltRounds = 10;
export const createUser = async ({username, password}: CreateUserDto) => {
    const lowerCaseUsername = username.toLowerCase().trim();
    const existingUser = await User.findOne({username: lowerCaseUsername});
    if (existingUser) {
        throw new Error('Username or email already exists')
    }
    const passwordHash = await bcrypt.hash(password, saltRounds);
    return User.create({username: lowerCaseUsername, passwordHash});
};