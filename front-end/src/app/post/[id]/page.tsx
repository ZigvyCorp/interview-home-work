'use client';

// Utilities
import {
  Comment,
  UserPost,
  getAccount,
  useDispatch,
  useSelector,
  getDetailPost,
  getPostComments,
  getCommentByPost,
} from "lib/redux";
import Image from "next/image";
import moment, { Moment } from "moment";
import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Avatar  from "../../../assest/avatar.jpg";

// Interface
interface CommentWithDate extends Comment {
  commentDate: Moment;
}

// Style
import "./post-detail.scss";

const formatDate = (date: Moment): string => {
  return moment(date).format('DD-MM-YYYY HH:mm')
}

const formatUserName = (post: UserPost, accountId: number): string => {
  if(post.userId === accountId) {
    return 'You';
  }

  return post.username;
}

const commentDate = (commentDate: Moment, date: Moment): string => {
  const randomDate = moment(date).diff(moment(commentDate), 'days');

  if(randomDate === 0) {
    return 'Today';
  }

  if(randomDate === 1) {
    return 'A day ago';
  }

  return `${randomDate} day ago`;
}

export default function DetailPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const postId = Number(params.id);
  const account = useSelector(getAccount);
  const postDetail = useSelector(getDetailPost(postId));
  const comments = useSelector(getCommentByPost(postId));

  const { date, body, title } = postDetail;

  useEffect(() => {
    if(!comments.length) {
      dispatch(getPostComments(postId))
    }

    return () => {}
  }, [postId, dispatch, comments.length]);

  const handleBackClick = (): void => {
    router.back();
  };

  const Comments = (postDate: Moment) => {
    const updatedComments: CommentWithDate[] = comments.map((comment: Comment): CommentWithDate => {
      const randomDate = Math.floor(Math.random() * 17);
      return {
        ...comment,
        commentDate: moment(postDate).subtract(randomDate, 'days')
      }
    }).sort((a, b) => b.commentDate.diff(a.commentDate, 'days'));


    return updatedComments.map((comment: CommentWithDate): React.ReactElement => {
      return (
        <div key={comment.id} className="comment">
          <Image src={Avatar} alt="Avatar" className="comment__avatar" />
          <div className="comment__description">
            <div className="description__info">
              <div className="info__name">{ comment.name }</div>
              <div className="info__date">{ commentDate(comment.commentDate, date) }</div>
            </div>
            <div className="comment__content">{ comment.body }</div>
            <div className="comment__action">
              <Button variant="outline-info" className="action__button">Reply</Button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className="detail">
        <div className="detail__title">{ title }</div>
        <div className="detail__summary">
          <div className="summary__username">
            <span className="summary__label">Author</span>: { formatUserName(postDetail, account.id) }
          </div>
          <div className="summary__date">
            <span className="summary__label">Created at</span>: { formatDate(date) }
          </div>
        </div>
        <div className="detail__content">{ body }</div>
      </div>
      <div className="comments">
        { Comments(date) }
      </div> 
      <Button
        variant="outline-info"
        className="back-button"
        onClick={handleBackClick}
      >
        Back
      </Button>
    </>
  )
}