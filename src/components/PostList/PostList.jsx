import React from 'react'
import PostItem from 'components/PostItem/PostItem'
import 'styles/PostList-styles.scss'

export default function PostList(props) {
    return (
        <div className="list-post">
            {props?.data.map(post =>
                post?.name?.includes(props.keyWord) ? (
                    <PostItem key={post.id} data={post} />
                ) : (
                    <PostItem key={post.id} data={post} />
                )
            )}
        </div>
    )
}
