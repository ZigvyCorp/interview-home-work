import { axiosBaseQuery } from "src/utils/axios-base-query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IResponse } from "src/interfaces/response.interface";





export  const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({
        baseUrl: `${process.env.REACT_APP_DOMAIN_SERVER}/api/v1/users`
    }),
    endpoints: build => ({
        login: build.mutation<IResponse,{email: string, password: string}> ({
            query: (user)=>({
                url:'/login',
                method: 'POST',
                data: {
                    email: user.email,
                    password: user.password
                }
            })
        }),
    })
})

export const {useLoginMutation} = userApi;