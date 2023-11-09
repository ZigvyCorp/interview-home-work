// Utilities
import cloneDeep from "lodash/cloneDeep";
import type { ReduxState } from 'lib/redux';

// Interface
import { Comment } from "./interface.ts"

export const getCommentByPost = (postId: number) => (state: ReduxState): Comment[] => {
  const postsComments = cloneDeep(state.manageComments.postsComment);

  return postsComments[postId] || [];
}