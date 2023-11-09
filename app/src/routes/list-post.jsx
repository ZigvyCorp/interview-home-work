
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsRequest } from '../actions'
import { Button, Input } from 'antd'
import PostItem from '../components/PostItem'

export default function ListPost() {
    const { data: posts, hasNext, search, loading } = useSelector(state => state.posts) || []
    const dispatch = useDispatch()

    return <div className='pb-10'>
        <div className="py-4">
            <Input.Search
                loading={loading}
                onSearch={value => {
                    dispatch(fetchPostsRequest(0, value))
                }}
                placeholder='Search posts...'
            />
        </div>
        <div className="divide-y space-y-6">
            {posts.map(post => <PostItem key={post._id} post={post} />)}
        </div>
        {
            hasNext &&
            <div className='mt-4 text-center select-none'>
                <Button
                    loading={loading}
                    onClick={() => {
                        dispatch(fetchPostsRequest(posts.length, search, true))
                    }}
                >Load more</Button>
            </div>
        }
    </div>

}