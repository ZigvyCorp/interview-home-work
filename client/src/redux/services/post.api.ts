
import { createApi } from "@reduxjs/toolkit/query/react";
import { IResponse } from "src/interfaces/response.interface";
import { axiosBaseQuery } from "src/utils/axios-base-query";
import { useAppSelector } from "../hook";


let accessToken: string; 

if (typeof localStorage !== 'undefined') {
    accessToken = localStorage.getItem("accessToken") as string;
    console.log('Authorization', `Bearer ${accessToken}`);
} 
else {
    console.log("👉️ can't use localStorage")
}

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: axiosBaseQuery({
        baseUrl: `${process.env.REACT_APP_DOMAIN_SERVER}/api/v1/posts`,        
    }),
    endpoints: build => ({
        getAllPost: build.query<IResponse,void> ({
            query: ()=>({
                url: `/`,
                method: 'GET', 
                headers: {'Authorization': `Bearer ${accessToken}`}
            })
        }),
        getAllPostByPage: build.query<IResponse,{page:string,accessToken:string}> ({
            query: ({page, accessToken})=>({
                url: `/page/${page}`,
                method: 'GET', 
                headers: {'Authorization': `Bearer ${accessToken}`}
            })
        }),
        getPost: build.query<IResponse, string> ({
            query: (post_id) => ({
                url: `/${post_id}`,
                method: 'GET',
                headers: {'Authorization': `Bearer ${accessToken}`}
            })
        }),
      
    })
})

export const {useGetAllPostQuery, useGetAllPostByPageQuery} = postApi;