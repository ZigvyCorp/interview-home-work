import { useDispatch, useSelector } from "react-redux";
import { Avatar, Tag, Divider, Button } from "antd";
import { timeSince } from "../utils";
import { fetchCommentsRequest, clearComments } from "../actions";
import { isEmpty, get } from "lodash";
import { useNavigate } from 'react-router-dom'

import Comment from './Comment'

function equalComments(prev, next) {
    return prev?.data?.length === next?.data?.length && prev?.loading === next?.loading
}

export default function PostItem({ post }) {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { data: comments = [], loading, hasNext } = useSelector(
        state => state.comments[post._id] || {},
        { equalityFn: equalComments }
    )

    const open = !isEmpty(comments)

    return <div className="pt-8">
        <h3
            className="text-lg font-semibold mb-4 cursor-pointer hover:underline"
            onClick={() => {
                navigate(`/${post._id}`)
            }}
        >{post.title}</h3>
        <p className="font-medium">{post.content.slice(0, 200)}...</p>
        <div className="flex items-center">
            <div className="flex my-4" >
                <Avatar size="small" />
                {
                    post.owner.name ?
                        <p className="ml-2">{post.owner.name}</p> :
                        <p className="ml-2 text-gray-500">Unknown</p>
                }
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full mx-1" />
            <span className="text-gray-400 text-xs">{timeSince(new Date(post.created_at))}</span>
        </div>
        <div>
            {post.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>

        <div className="mt-4">
            {
                !open ?
                    <Button
                        type="link"
                        loading={loading}
                        onClick={() => {
                            dispatch(fetchCommentsRequest(post._id))
                        }}
                    >
                        {post.commentsCount} replies
                    </Button> :
                    <Button
                        type="link"
                        onClick={() => {
                            dispatch(clearComments(post._id))
                        }}>
                        Hide replies
                    </Button>
            }
            {
                open &&
                <>
                    <Divider className="my-2" />
                    <div className="pl-4 py-2 space-y-4">
                        {comments.map(c => <Comment key={c._id} comment={c} />)}
                    </div>
                    {
                        hasNext &&
                        <div className="flex justify-center my-4">
                            <Button
                                loading={loading && comments.length > 0}
                                onClick={() => {
                                    dispatch(fetchCommentsRequest(post._id, comments.length))
                                }}
                            >Load more</Button>
                        </div>
                    }

                </>
            }
        </div>
    </div>
}