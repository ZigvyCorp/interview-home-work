const { default: axios } = require("axios");
const { getUsers, addUsers } = require("../repositories/users.repository");
const { addPosts } = require("../repositories/posts.repository");
const { addComments } = require("../repositories/comments.repository");

const MOCK_SERVER = 'https://jsonplaceholder.typicode.com'

/**
 * Randomly pick 1 ID from array
 * @param {({id: number})[]} arr 
 * @returns {number}
 */
const randomIdFrom = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index].id;
}

/**
 * ! The mock data will not exactly match the jsonplaceholder.
 *  
 * We will random matchs between the created posts-users-comments
 * because it's the bad practice to use ID from the external source
 */ 
const mockData = async () => {
  const users = await getUsers();
  if (users.length > 0) return false; // already mocked -> do nothing

  // MOCK USERS
  const usersMockRes = await axios.get(`${MOCK_SERVER}/users`)
  const mockUsers = usersMockRes.data.map(user => ({
    name: user.name,
    username: user.username,
    email: user.email
  }))
  const userIds = await addUsers(mockUsers);
  console.log(`Mocked ${userIds.length} users`)

  // MOCK POSTS
  const postsMockRes = await axios.get(`${MOCK_SERVER}/posts`)
  const mockPosts = postsMockRes.data.map(post => ({
    title: post.title,
    body: post.body,
    userId: randomIdFrom(userIds)
  }))
  const postIds = await addPosts(mockPosts);
  console.log(`Mocked ${postIds.length} posts`)

  // MOCK COMMENTS
  const commentsMockRes = await axios.get(`${MOCK_SERVER}/comments`);
  const mockComments = commentsMockRes.data.map(comment => ({
    body: comment.body,
    userId: randomIdFrom(userIds),
    postId: randomIdFrom(postIds)
  }))
  const commentIds = await addComments(mockComments);
  console.log(`Mocked ${commentIds.length} comments`)

  return true;
}

module.exports = {
  mockData
}