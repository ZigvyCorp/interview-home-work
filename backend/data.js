const Comment = require("./models/comment");
 const Post = require("./models/post");
 const User = require("./models/user");
 const axios = require("axios");
 const mongoose = require("mongoose");



 const baseUrl = "https://jsonplaceholder.typicode.com/"

 const fetchUserDataAndSave = async () => {
     try {
       // Make an API request to the external API
       const apiUrl = `${baseUrl}/users`;
       const response = await axios.get(apiUrl);
       const apiData = response.data;

       // Process and save the data in your MongoDB collection
       for (const userData of apiData) {
         const user = {
           userId: userData.id,
           name: userData.name,
           username: userData.username,
           email: userData.email
         };
         User.create(user)
       }

       console.log('User data are fetched and stored successfully');
     } catch (error) {
       console.error('Failed to fetch and store user data:', error);
     }
 };

 const fetchPostDataAndSave = async () => {
     try {
       // Make an API request to the external API
       const apiUrl = `${baseUrl}/posts`;
       const response = await axios.get(apiUrl);
        const apiData = response.data;
       const listUser = await User.find()
       // Process and save the data in your MongoDB collection
       for (const postData of apiData) {
         const postAuthor = listUser.find((item) => item.userId == postData.userId);
         const userObjectId = postAuthor?._id ? postAuthor?._id : new mongoose.Types.ObjectId();
         const post = {
           postId: postData.id,
           title: postData.title,
           body: postData.body,
           author: userObjectId
         }
         Post.create(post)
       }

       console.log('Post data are fetched and stored successfully');
     } catch (error) {
       console.error('Failed to fetch and store post data:', error);
     }
 };


 const fetchCommentDataAndSave = async () => {
     try {
       // Make an API request to the external API
       const apiUrl = `${baseUrl}/comments`;
       const response = await axios.get(apiUrl);
       const apiData = response.data;


       // Process and save the data in your MongoDB collection
       for (const commentData of apiData) {
         const post = await Post.findOne({postId: commentData.postId})

         // const post = listPost.find((item) => item.postId == commentData.postId);
         const postObjectId = post?._id ? post._id : new mongoose.Types.ObjectId();

         const comment = new Comment({
           post: postObjectId,
           postId: commentData.postId,
           name: commentData.name,
           email: commentData.email,
           body: commentData.body,
         })
         await comment.save()

         post.comments.push(comment._id)
         await post.save()

       }

       console.log('Comment data are fetched and stored successfully');
     } catch (error) {
       console.error('Failed to fetch and store comment data:', error);
     }
 };

 const initializeData = async () => {
     await fetchUserDataAndSave();
     await fetchPostDataAndSave();
     await fetchCommentDataAndSave();
 }

 module.exports = initializeData;