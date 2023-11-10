import { Comments } from "./Comments"
import { useState } from "react"
import { UpOutlined} from "@ant-design/icons"
export const Posts = ({ title, author, createdDate, content, comments }) => {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="post-container  container mx-auto pt-[2em] pb-[5em]">
            <h1 className="text-3xl text-center">{title}</h1>
            <div>
                <div className="post__info">
                    <p className="post__info-author">createtd by: {author}</p>
                    <p className="post__info-created-date">{createdDate}</p>
                </div>
                <div className="post__content cursor-pointer">
                    {content}
                </div>
                <div className="border-b-4 border-grey-900"></div>
            </div>
            {comments.length !== 0 ? (
                <button onClick={() => setShowComments(!showComments)}>
                    {showComments ? <UpOutlined />
                        : (`Show ${comments.length} Comments`) }
                </button>
            ) : "No comment on this post"}
            {
                showComments && comments.map(cmt => <Comments key={cmt.comment_id}
                    name={cmt.users?.username}
                    avatar={cmt.users?.username.slice(0, 1)}
                    date={cmt.created_date}
                    content={cmt.content}
                />)

            }
        </div>
    )
}




