import supabase from "../utils/connect-supabase";
import IUser from "../models/user-model";
import { IResponse } from "../interfaces/response-interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";


class UserService {
    static createUser = async (userInfor: IUser) => {
        try {
            if (
                userInfor.email == "" ||
                userInfor.password == "" ||
                userInfor.name == "" ||
                userInfor.username == ""
            ) 
            {
                return {
                    type: "Error",
                    code: StatusCodes.BAD_REQUEST,
                    message: "Invalid input error",
                } as IResponse;
            }

            let { data: existUser } = await supabase
                .from("users")
                .select('*')
                .eq("email", userInfor.email)
                .single();

            if (existUser) {
                return {
                    type: "Error",
                    code: StatusCodes.BAD_REQUEST,
                    message: "Email already exists",
                } as IResponse;
            }

            let { data: newUser } = await supabase
                .from("users")
                .insert(userInfor)
                .select();

            if (newUser && newUser.length > 0) {
                return {
                    code: StatusCodes.OK,
                    message: {
                        ...newUser[0],
                        accessToken: this.generateAccessToken(newUser[0].id)
                    },
                    type: "Success",
                } as IResponse;
            } else {
                return {
                    code: StatusCodes.BAD_REQUEST,
                    type: "Error",
                    message: "Create user failed",
                } as IResponse;
            }
        } catch (error) {
            return {
                code: StatusCodes.BAD_GATEWAY,
                type: "Error",
                message: "Server error",
            } as IResponse;
        }
    };

    static loginUser = async (email: string, password: string) => {
        try {
            let { data: user } = await supabase
                .from("users")
                .select()
                .eq("email", email)
                .single();

            if (user && user.password === password) {
                return {
                    code: StatusCodes.OK,
                    type: "Success",
                    message: {
                        ...user,
                        accessToken: this.generateAccessToken(user.id)
                    },
                } as IResponse;
            } else {
                return {
                    code: StatusCodes.OK,
                    type: "Success",
                    message: "Login failed",
                } as IResponse;
            }
        } catch (error) {
            return {
                code: StatusCodes.BAD_GATEWAY,
                type: "Error",
                message: "Server error",
            } as IResponse;
        }
    };

    static generateAccessToken = (id: String): String => {
        try {
            return jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
                expiresIn: "1d",
            });
        } catch (err) {
            throw err;
        }
    };

    static generateRefreshToken = async (id: String) => {
        try {
            const refreshToken = jwt.sign(
                { id },
                `${process.env.JWT_SECRET_KEY}`,
                {
                    expiresIn: "3d",
                }
            );
            await supabase
                .from("users")
                .update({
                    refresh_token: refreshToken,
                })
                .eq("id", id);

            return refreshToken;
        } catch (err) {
            throw err;
        }
    };

    static verifyRefreshToken = (token: string) => {
        try {
            if (token) {
                const decoded = jwt.verify(
                    token,
                    `${process.env.JWT_SECRET_KEY}`
                ) as JwtPayload;
                return {
                    type: "Success",
                    code: StatusCodes.OK,
                    message: {
                        accessToken: UserService.generateAccessToken(
                            decoded.id
                        ),
                    },
                };
            }

            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "No token provided",
            };
        } catch (err) {
            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "Invalid refresh token",
            };
        }
    };

    static getUserByToken = async (token: string) => {
        try {
            if (token) {
                const decoded = jwt.verify(
                    token,
                    `${process.env.JWT_SECRET_KEY}`
                ) as JwtPayload;
                
                let { data: user } = await supabase
                .from("users")
                .eq("id", decoded.id)
                .single();
                

                return {
                    type: "Success",
                    code: StatusCodes.OK,
                    message: user,
                } as IResponse;
            }

            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "No token provided",
            };
        } catch (err) {
            return {
                type: "Error",
                code: StatusCodes.BAD_REQUEST,
                message: "Invalid refresh token",
            };
        }
    };
}

export default UserService;
