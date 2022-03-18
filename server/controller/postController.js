import { asyncHandler } from "@/utils/asyncHandler";
import randomDate from "@/utils/randomDate";
import randomIntFromInterval from "@/utils/randomIntFromInterval";
import axios from "axios";

let tags = [
   "consult",
   "it",
   "hala",
   "it",
   "hala",
   "gov",
   "legal",
   "political",
   "breathtaking",
   "landscape",
   "vietnam",
];

// @desc    Get all post
// @route   POST /api/coupon
// @access  PUBLIC
export const getAllPost = asyncHandler(async (req, res) => {
   let cursor = parseInt(req.query.cursor) || 1;
   if (cursor < 1) cursor = 1;
   else if (cursor > 20) cursor = 20;
   const pageSize = 5;
   let { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
      {
         params: {
            _page: !req.query.keyword && cursor,
            _limit: !req.query.keyword && pageSize,
         },
      }
   );
   posts = posts.map((post, i) => {
      return {
         owner: post.userId,
         id: post.id,
         title: post.title,
         content: post.body,
         tags: tags.slice(randomIntFromInterval(0, 7)),
         created_at: randomDate(new Date(2021, 1, 1), new Date()),
      };
   });

   let nextCursor = cursor !== 20 ? cursor + 1 : null;
   if (req.query.keyword) {
      posts = posts.filter((post) =>
         post.title.includes(req.query.keyword.trim())
      );
      nextCursor = null;
   }

   // res.json({ posts, nextCursor });
   setTimeout(() => res.json({ posts, nextCursor }), cursor === 1 ? 0 : 1000);
});
// @desc    Get post by ID
// @route   POST /api/post/:id
// @access  PUBLIC
export const getPostById = asyncHandler(async (req, res) => {
   let { data: post } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
   );
   res.json({
      owner: post.userId,
      id: post.id,
      title: post.title,
      content: post.body,
      tags: tags.slice(randomIntFromInterval(0, 7)),
      created_at: randomDate(new Date(2021, 1, 1), new Date()),
   });
});
// @desc    Get PostName
// @route   POST /api/posts/name
// @access  PUBLIC
export const getPostsName = asyncHandler(async (req, res) => {
   let { data: postsName } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
   );
   postsName = postsName.map((post) => {
      return { id: post.id, title: post.title };
   });
   res.json(postsName);
});
