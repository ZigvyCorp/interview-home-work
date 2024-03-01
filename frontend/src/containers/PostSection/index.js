import React, { useCallback, useState } from 'react'
import './PostSection.css'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, Input } from 'antd'
import * as actions from '../../store/actions'
import PostContent from '../../components/PostContent'

const PostSection = ({ isPostDetail }) => {
    const { Search } = Input
    const [page, setPage] = useState(1)
    const { posts, totalPages } = useSelector(state => state.post)
    const dispatch = useDispatch()
    const onChangePage = useCallback((page) => {
        setPage(page)
        dispatch(actions.getPosts(page))
    }, [])

    const onSearch = useCallback((value) => {
        dispatch(actions.getPosts(1, 5, value))
    }, [])

    return (
        <>
            {!isPostDetail && (
                <div className='search-section'>
                    <Search placeholder="input search text" onSearch={onSearch} />
                </div>
            )}

            {posts.length > 0
                ?
                posts.map((post) => <PostContent post={post} />)
                :
                <PostContent isPostDetail post={posts} />
            }
            {!isPostDetail &&
                (
                    <div className='pagination-section'>
                        <Pagination current={page} total={totalPages * 10} onChange={onChangePage} />
                    </div>
                )}
        </>
    )
}

export default PostSection
