'use-client'

// Utilities
import { Moment } from "moment";
import React, { useEffect } from "react";
import {
  reduxStore,
  useDispatch,
  useSelector,
  getPostComments,
  getCommentByPost,
} from "lib/redux";

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

const randomLiked = (): React.ReactElement => {
  return Math.round(Math.random()) ? <BiSolidLike /> : <BiLike />
}

const randomShared = (): React.ReactElement => {
  return Math.round(Math.random()) ? <FaShareSquare /> : <FaRegShareSquare />
}

export default function Post({key , post, accountId}: PostProps): React.ReactElement {
  const dispatch = useDispatch()
  const { date, body, title, username, id } = post

  useEffect(() => {
    dispatch(getPostComments(id))
  }, [id, dispatch])

  const comments = useSelector(getCommentByPost(id))

  return (
    <div className="post" key={key}>
      <div className="post__title">{ title }</div>
      <div className="post__summary">
        <div className="summary__username">{ formatUserName(post, accountId) }</div>
        <div className="summary__date">{ formatDate(date) }</div>
      </div>
      <div className="post__content">{ formatContent(body) }</div>
      <div className="post__actions">
        <Button variant="outline-info" className="actions__button">{ randomLiked() } 2000</Button>
        <Button variant="outline-info" className="actions__button"><AiOutlineComment /> { comments.length }</Button>
        <Button variant="outline-info" className="actions__button">{ randomShared() } 1703</Button>
      </div>
    </div>
  )
}