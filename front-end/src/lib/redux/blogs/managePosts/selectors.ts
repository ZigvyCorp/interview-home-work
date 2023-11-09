// Utilities
import cloneDeep from 'lodash/cloneDeep';
import { type ReduxState } from 'lib/redux'
import { getUserById } from 'lib/redux/users/manageUsers/selectors.ts'

// Interface
import { Post, UserPost } from './interface.ts';

// Constants
import { PAGINATION } from 'constants/index.ts';

export const getAllPosts = (state: ReduxState): UserPost[] => {
  const posts = cloneDeep(state.managePosts.posts);

  return posts.map((post: Post) => {
    const user = getUserById(state, post.userId)

    return {
      ...post,
      userId: user?.id,
      username: user?.name,
    }
  })
}

export const getPostsByPageNumber = (state: ReduxState): UserPost[] => {
  const posts: UserPost[] = getAllPosts(state)
  const startPostIndex = (state.managePosts.pageNumber - 1) * PAGINATION.MAX_ITEM_PER_PAGE

  return posts.splice(startPostIndex, PAGINATION.MAX_ITEM_PER_PAGE);
}

export const getTotalPage = (state: ReduxState): number => {
  return state.managePosts.totalPage;
}

export const getPageNumber = (state: ReduxState): number => {
  return state.managePosts.pageNumber;
}