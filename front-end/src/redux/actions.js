import { Types } from "./Types"

export const fetchUsers = (data) => {
  return {
    type: Types.fetchUsers,
    payload: data
  }
}

export const fetchPosts = (data) => {
  return {
    type: Types.fetchPosts,
    payload: data
  }
}

export const fetchComments = () => {
  return {
    type: Types.fetchComments
  }
}

export const fetchTags = () => {
  return {
    type: Types.fetchTags
  }
}

export const fetchUserById = (data) => {
  return {
    type: Types.fetchUserById,
    payload: data
  }
}

export const fetchPostById = (id) => {
  return {
    type: Types.fetchPostById,
    payload: id
  }
}

export const fetchCommentByPostId = (data) => {
  return {
    type: Types.fetchCommentByPostId,
    payload: data
  }
}
