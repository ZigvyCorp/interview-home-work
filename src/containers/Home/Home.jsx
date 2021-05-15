import React, { useEffect, useState } from 'react'
import PostList from 'components/PostList/PostList'
import Paginations from 'components/Pagination/Paginations'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from 'redux/actions'
import { postsState$, usersState$ } from 'redux/selectors'
import SearchBar from 'components/SearchBar/SearchBar'

export default function Home() {
    const dispatch = useDispatch()
    const posts = useSelector(postsState$)
    const users = useSelector(usersState$)
    const [keyWord, setKeyWord] = useState('')

    var mergeList = posts.map((post, id) =>
        Object.assign({}, post, users.data[id])
    )

    const handleSearch = text => {
        setKeyWord(text)
        console.log(text)
    }

    useEffect(() => {
        //Trigger an action
        dispatch(actions.getPosts.getPostsRequest())
        dispatch(actions.getUsers.getUsersRequest())
    }, [dispatch])

    return (
        <div>
            <SearchBar clickSearch={handleSearch} />
            <PostList data={mergeList} keyWord={keyWord} />
            <Paginations />
        </div>
    )
}
