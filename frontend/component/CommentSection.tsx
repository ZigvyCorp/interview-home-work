"use client"
import { useState } from "react";
import CommentItem from "./CommentItem";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { fetchCommentData, selectCommentDataByPost } from "@/src/redux/reducers/commentState";


export default function CommentSection ({amount, postId} : any) {
    const [showComment, setShowComment] = useState(false)
    const dispatch = useAppDispatch();

    const commentState = useAppSelector((state) => selectCommentDataByPost(state))
    const commentData = commentState.find((comment) => comment.postId == String(postId))?.comments

    const onClickReplyAmount = () => {
        setShowComment(!showComment)
        if(!showComment) {
            dispatch(fetchCommentData({postId}))
        }
    }
    return (
        <section className="d-flex flex-column w-100 mt-1 mt-sm-2">
            <button 
                onClick={onClickReplyAmount} 
                className="text-blue fw-medium btn btn-outline-light-blue rounded-5 mb-2 px-3" 
                style={{width: "fit-content", border: "0"}}
            >
                {amount} replies
            </button>
            <div className={`${showComment ? "d-flex" : "d-none"} flex-column w-100 gap-2 gap-sm-3 border-top border-1 border-gray text-black-primary px-2`}>
                {commentData?.map((comment: any, index: number) => (
                    <CommentItem key={index} data={comment}/>
                )) }
            </div>
        </section>
    )

}
