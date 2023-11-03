import React from 'react'
import { Link } from 'react-router-dom'
import { useDebounceCallback } from '../../hooks/useDebounceCallback'
import { AppDispatch } from 'store'
import { useDispatch } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space, Input } from 'antd'
import { postsActions } from 'store/posts'

const { Search } = Input

const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const handleSearchPosts = useDebounceCallback((value: string) => {
        //@ts-ignore
        dispatch(postsActions.fetchSearchPosts(value))
        dispatch(
            postsActions.updateStateSearch(value?.length > 0 ? true : false)
        )
        window.scrollTo({ top: 0 })
    }, 300)

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <p>BenJD1205</p>
                </Link>
            </div>
            <div className="search">
                <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={handleSearchPosts}
                    style={{ width: 300 }}
                />
            </div>
            <div className="user">
                <Space>
                    <Avatar shape="square" icon={<UserOutlined />} />
                </Space>
            </div>
        </div>
    )
}

export default Header
