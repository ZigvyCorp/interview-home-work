import React, { useState } from 'react'
import InputEmoji from "react-input-emoji";
import { blogService } from 'services/blogService';
import { icons } from 'utils/icons';
import Avatar from "assets/img/avatar.png";

const CommentBlog = ({ getCurrentNews, id, news }) => {
    console.log('news: ', news);
    const [comment, setComment] = useState("")

    const { AiOutlineSend } = icons

    const handleComment = async () => {
        if (!comment.trim()) return
        const response = await blogService.handleComment(id, { content: comment })
        if (response?.success) {
            getCurrentNews(id)
        }
        setComment("")
    }

    return (
        <div>
            <div className=" w-full  flex items-center mb-3">

                <InputEmoji
                    value={comment}
                    onChange={(msg) => setComment(msg)}
                    cleanOnEnter
                    onEnter={handleComment}
                    placeholder="Comment...."
                />
                <button
                    onClick={handleComment}
                    className="bg-feature text-hover p-2 rounded-lg"
                >
                    <AiOutlineSend />
                </button>
            </div>
            <p className="mb-5 text-sm">Comment({news?.comments?.length})</p>
            {news?.comments?.map((item) => {
                return <div key={item._id} className=" mb-5 px-2">
                    <div className="flex items-center gap-3 mb-2">
                        <img
                            className="w-[40px] shadow-md rounded-full"
                            src={Avatar}
                            alt=""
                        />
                        <div className="text-sm ">
                            <h3 className="font-semibold italic">
                                {item?.postedBy?.firstName + "" + item?.postedBy?.lastName}
                            </h3>

                        </div>
                    </div>
                    <p>{item.content}</p>

                </div>
            })}


        </div>
    )
}

export default CommentBlog