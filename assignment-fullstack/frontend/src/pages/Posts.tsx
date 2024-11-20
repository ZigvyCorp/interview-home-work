import React, { useState, useEffect } from 'react'
import Card from 'components/atoms/Card'
import Loading from 'components/molecules/Loading'
import { postsApi } from '../api/posts'
import { useDebounceCallback } from 'hooks/useDebounceCallback'
import { useToast } from '../hooks/useToast'
import {
    hasSearchMovieDataSelector,
    isLoadingSearchMovieSelector,
    postSearchDataSelector,
} from 'store/posts/selector'
import { useSelector } from 'react-redux'

const Posts = () => {
    const postSearchData = useSelector(postSearchDataSelector)
    const hasSearchData = useSelector(hasSearchMovieDataSelector)
    const isLoadingSearch = useSelector(isLoadingSearchMovieSelector)
    const [posts, setPosts] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [query, setQuery] = useState<{ page: number; limit: number }>({
        page: 1,
        limit: 5,
    })
    const toast = useToast()

    const getPosts = async () => {
        try {
            setLoading(true)
            const res = await postsApi.getPosts({
                page: query?.page,
                limit: query?.limit,
            })
            if (res.status) {
                setLoading(false)
                setPosts([...posts, ...res.data])
            }
        } catch (err: any) {
            setLoading(false)
            toast(err?.message, 'error')
        }
    }

    const handleChangePage = useDebounceCallback(() => {
        setQuery((prev) => ({ ...prev, page: prev?.page + 1 }))
    }, 400)

    useEffect(() => {
        const gridPost = document.getElementById('grid-post')
        window.addEventListener('scroll', () => {
            if (!gridPost) return
            if (
                gridPost &&
                window.scrollY + window.innerHeight >
                    gridPost.clientHeight + gridPost.offsetTop
            ) {
                console.log('Hi')
                handleChangePage()
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    useEffect(() => {
        getPosts()
    }, [query?.page])

    return (
        <div className="post" id="grid-post">
            {postSearchData?.length > 0 &&
                postSearchData?.map((post: any, idx) => (
                    <Card key={idx} {...post} />
                ))}
            {postSearchData?.length === 0 &&
                posts &&
                !hasSearchData &&
                posts?.length > 0 &&
                posts.map((post: any, idx: number) => (
                    <Card key={idx} {...post} />
                ))}
            {/* add loading posts when user pull */}
            {hasSearchData &&
                postSearchData?.length === 0 &&
                !isLoadingSearch && (
                    <p
                        style={{
                            fontSize: '18px',
                            margin: '100px 0',
                            textAlign: 'center',
                            color: '#ffffff',
                        }}
                    >
                        No results matching your search!
                    </p>
                )}
            {loading && (
                <Loading
                    size="large"
                    loadingStyle={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <div
                        style={{
                            position: 'fixed',
                            bottom: '60%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                        }}
                    >
                        Loading...
                    </div>
                </Loading>
            )}
        </div>
    )
}

export default Posts
