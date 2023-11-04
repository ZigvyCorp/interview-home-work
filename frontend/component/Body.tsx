"use client"
import { useEffect, useState } from "react";
import Post from "./Post";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { fetchPostData, selectCurrentPage, selectPostData, selectTotalPages } from "@/src/redux/reducers/postState";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

export default function Body () {
    const [keyState, setKeyState] = useState("")
    const postData = useAppSelector(selectPostData)
    const totalPage = useAppSelector(selectTotalPages)
    const currentPage = useAppSelector(selectCurrentPage)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchPostData({page : 1}))
    }, [])
    return (
        <div className="w-100 d-flex gap-3 gap-sm-4 flex-column mt-100px mt-sm-120px px-3 px-sm-5 pb-5">
            <SearchBar setKeyState={setKeyState}/>
            {postData.map((post : any, index : number) => (
                <Post key={index} data={post}/>
            ))}
            <Pagination keyState={keyState} totalPages={totalPage} currentPage={currentPage}/>
        </div>

    )
}
