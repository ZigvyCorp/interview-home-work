'use-client'

// Utilities
import {
  reduxStore,
  useDispatch,
  useSelector,
  getPostComments,
  getCommentByPost,
} from "lib/redux";
import { Moment } from "moment";
import React, { useEffect, useMemo } from "react";
import { useRouter } from 'next/navigation';

// Interface
import { UserPost } from "../../../lib/redux";

interface PostProps {
  key: number;
  post: UserPost;
  accountId: number;
}

// Components
import { Button } from "react-bootstrap"
import { AiOutlineComment } from 'react-icons/ai';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { FaRegShareSquare, FaShareSquare } from 'react-icons/fa';

// Style
import './post.scss';

// Constants
import { BRIEF_CONTENT_LENGTH } from 'constants/index.ts'

const formatDate = (date: Moment): string => {
  return date.format('DD-MM-YYYY HH:mm')
}

const formatContent = (content: string): string => {
  if(content.length <= BRIEF_CONTENT_LENGTH) {
    return content;
  }

  return content.substring(0, BRIEF_CONTENT_LENGTH) + '...';
}

const formatUserName = (post: UserPost, accountId: number): string => {
  if(post.userId === accountId) {
    return 'You';
  }

  return post.username;
}

export default function Post({key , post, accountId}: PostProps): React.ReactElement {
  const router = useRouter();
  const dispatch = useDispatch();
  const { date, body, title, id } = post;

  const randomLiked = useMemo((): React.ReactElement => {
    return Math.round(Math.random()) ? <BiSolidLike /> : <BiLike />
  }, [])

  const randomShared = useMemo((): React.ReactElement => {
    return Math.round(Math.random()) ? <FaShareSquare /> : <FaRegShareSquare />
  }, [])

  const comments = useSelector(getCommentByPost(id))

  useEffect(() => {
    if(!comments.length) {
      dispatch(getPostComments(id))
    }
  }, [comments.length, id, dispatch]);

  const handleGoToDetailPost = () => {
    router.push(`post/${id}`)
  };

  return (
    <div className="post" key={key} onClick={handleGoToDetailPost}>
      <div className="post__title">{ title }</div>
      <div className="post__summary">
        <div className="summary__username">Author: { formatUserName(post, accountId) }</div>
        <div className="summary__date">Created at: { formatDate(date) }</div>
      </div>
      <div className="post__content">{ formatContent(body) }</div>
      <div className="post__actions">
        <Button variant="outline-info" className="actions__button">{ randomLiked } 2000</Button>
        <Button variant="outline-info" className="actions__button"><AiOutlineComment /> { comments.length }</Button>
        <Button variant="outline-info" className="actions__button">{ randomShared } 1703</Button>
      </div>
    </div>
  )
}