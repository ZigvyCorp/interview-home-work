import bcrypt from 'bcrypt';
import { Model, User } from '../../models/user';
import { generateToken } from '../../shared/jwt';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY;
const refeshTokenLife: string = process.env.REFESH_TOKEN_LIFE;
const accessTokenLife: string = process.env.ACCESS_TOKEN_LIFE;


export default class Service {

    public static async login(payload): Promise<any> {
        const username = payload.username;
        const password = payload.password;
        const foundUser = await Model.findOne({ username: username });
        if (!foundUser || !bcrypt.compareSync(password + foundUser.salt, foundUser.hash)){
            return { message: 'Username or password are wrong' };
        }
        else {
            const accessToken = await generateToken({ _id: foundUser._id }, JWT_SECRET_KEY, accessTokenLife);
            return {
                user: {
                    username: foundUser.username,
                    dob: foundUser.dob
                },
                accessToken
            }
        }
    }

    public static async register(payload): Promise<any> {
        const id = new mongoose.Types.ObjectId();
        const username = payload.username;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(payload.password + salt, 10);
        const foundUser = await Model.findOne({ username: username });
        if (!foundUser){
            await Model.create(<User>{
                _id: id,
                username: username,
                hash: hash,
                salt: salt,
            })
            return { message: 'Register successfully' };
        }
        return { message: 'Username or email already exist' };
    }

}