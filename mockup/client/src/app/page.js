"use client"
import React from "react"
import PostItem from "@/components/PostItem"
import { useDispatch, useSelector } from "react-redux"
import { apiGetAllPost, apiSearchPost } from "@/apis/data"
import { loadMorePost, searchPost } from "@/stores/dataSlice"
import { Input, Spin } from "antd"

const { Search } = Input

export default function Home() {

    const { postList, searchPostList } = useSelector(state => state.data)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = React.useState(1)
    const [loadingMore, setLoadingMore] = React.useState(false)
    const [loadingSearch, setLoadingSearch] = React.useState(false)
    const [isFixed, setIsFixed] = React.useState(false)
    const [keywords, setKeywords] = React.useState()

    const fetchPostList = async (page) => {

        setLoadingMore(true)
        const response = await apiGetAllPost(page, 5)
        setLoadingMore(false)
        if (response.status === 200) {

            dispatch(loadMorePost(response.data.data))
        }

    }

    const handleSearch = async (keyword) => {

        setLoadingSearch(true)
        const response = await apiSearchPost(keyword)
        setLoadingSearch(false)

        if (response.status === 200) {

            console.log(response.data.data)
            dispatch(searchPost(response.data.data))
        }
    }

    const getKeywords = (keywords) => {

        if (keywords.length > 0) {

            setKeywords(keywords)
        } else {
            setKeywords(null)
        }
    }

    const handleClear = () => {

        setKeywords(null)
    }

    React.useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {

                setCurrentPage(prev => prev + 1)
            }

            if (window.scrollY > 0) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        })

        return () => window.removeEventListener("scroll", () => { })

    }, [])

    React.useEffect(() => {

        if (currentPage !== 1) {

            fetchPostList(currentPage)
        }
    }, [currentPage])

    React.useEffect(() => {

        if (keywords) {
            handleSearch(keywords)
        }
    }, [keywords])

    return (
        <Spin spinning={loadingSearch} size="large">
            <div className="min-h-screen">
                <div className={`flex justify-center ${isFixed && "fixed top-[80px] right-0 left-0"}`}>
                    <div className={`p-[20px] bg-white rounded-[12px] mb-[20px] w-[50vw] ${isFixed && "shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"}`}>
                        <Search
                            placeholder="Enter to search..."
                            allowClear={handleClear}
                            onSearch={getKeywords}
                        />
                    </div>
                </div>
                {
                    keywords
                        ?
                        searchPostList?.map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))
                        :
                        postList.map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))
                }
                {
                    loadingMore &&
                    <div className="flex justify-center pb-[20px]">
                        <Spin size="large" />
                    </div>
                }
            </div>
        </Spin>

    )
}
