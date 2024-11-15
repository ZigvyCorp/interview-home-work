import mockUsers from "../../../data/users.json";
import mockPosts from "../../../data/posts.json";
import mockComments from "../../../data/comments.json";
import User, { IUser } from "@/models/user";
import { createUser } from "@/repositories/user-repo";
import Post from "@/models/post";
import { slugify } from "@/utils/index";
import { createPost, getPostByIdOrSlug } from "@/repositories/post-repo";
import Comment, { IPopulatedComment } from "@/models/comment";
import { createComment, getComments } from "@/repositories/comment-repo";
import { CommentDto } from "@/models/dtos/comment-dto";
import populateComment from "@/utils/populate-comment";
import { Types } from "mongoose";
import { toCommentDto } from "@/utils/to-comment-dto";

type MockUser = (typeof mockUsers)[number];
type MockPost = (typeof mockPosts)[number];
type MockComment = (typeof mockComments)[number];

const initializeUser = async (user: MockUser) => {
  let userFromDB = await User.findOne({ username: user.username });
  if (!userFromDB) {
    userFromDB = await createUser({
      username: user.username, password: user.password, dob: user.dob, name: user.name
    });
    console.log(`User ${user.username} created successfully`);
  }
  return {
    ...user,
    _id: userFromDB._id
  };
};
const initializeUsers = async () => {
  const createUserPromises = mockUsers.map(user => initializeUser(user));
  return Promise.all(createUserPromises);
};
const initializePost = async ({ mockPost, user }: {
  mockPost: MockPost,
  user: Awaited<ReturnType<typeof initializeUser>>
}) => {
  const slug = slugify(mockPost.title);
  let postFromDB = await getPostByIdOrSlug(slug);
  if (!postFromDB) {
    postFromDB = await createPost({
      title: mockPost.title, content: mockPost.content, tags: mockPost.tags, owner: user._id
    });
    console.log(`Post ${postFromDB!.slug} created successfully`);
  }
  return {
    ...mockPost,
    _id: postFromDB!.id
  };
};
const initializePosts = async (createdUsers: Awaited<ReturnType<typeof initializeUsers>>) => {
  const createPostPromises = mockPosts.map(post => {
    const user = createdUsers.find(createdUser => post.owner === createdUser.id);
    if (user) {
      return initializePost({ mockPost: post, user: user });
    }
  }).filter(x => x !== undefined);
  return Promise.all(createPostPromises);
};
const initializeComment = async ({ mockComment, user, post }: {
  mockComment: MockComment,
  user: Awaited<ReturnType<typeof initializeUser>>,
  post: Awaited<ReturnType<typeof initializePost>>
}) => {
  const queryComment = await populateComment(Comment.findOne({
    post: new Types.ObjectId(post._id),
    content: mockComment.content,
    owner: new Types.ObjectId(user._id)
  }).sort({ createdAt: -1 }))
    .lean<IPopulatedComment>();
  if (!queryComment) {
    const createdComment = await createComment({
      content: mockComment.content,
      postID: post._id,
      owner: user._id
    });
    console.log(`Comment ${createdComment!.content.substring(0, 10)} created successfully`);
  }
  return {};
};
const initializeComments = async ({ createdUsers, createdPosts }: {
  createdUsers: Awaited<ReturnType<typeof initializeUsers>>,
  createdPosts: Awaited<ReturnType<typeof initializePosts>>
}) => {
  const createCommentPromises = mockComments.map(comment => {
    const user = createdUsers.find(createdUser => comment.owner === createdUser.id);
    const post = createdPosts.find(createdPost => comment.post === createdPost.id);
    if (user && post) {
      return initializeComment({ mockComment: comment, user: user, post: post });
    }
  }).filter(x => x !== undefined);
  return Promise.all(createCommentPromises);
};


export const initializeDatabase = async () => {
  const createdUsers = await initializeUsers();
  const createdPosts = await initializePosts(createdUsers);
  await initializeComments({
    createdUsers, createdPosts
  });
};
export default initializeDatabase;