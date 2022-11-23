// import { callAPI } from "../api/api";
// import { getComments, getPosts, getUserRequest, getUsers } from "../screen/post/redux/actions/postAction";

// export const getUserList = async () => {
//     try {
//         callAPI(`users`, 'GET', null).then(
//           async (res) => {
//             let json = await res?.data;
//             console.log("----------------------"+ json);

//             return json
//           }
//         );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   export const getPostList = async () => {
//     try {
//         callAPI(`posts`, 'GET', null).then(
//           async (res) => {
//             let json = await res?.data;
          
//             return json
//           }
//         );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   export const getDetailPost = async (idPost) => {
//     try {
//         callAPI(`posts/${idPost}`, 'GET', null).then(
//           async (res) => {
//             let json = await res?.data;
//             return json
//           }
//         );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   export const getCommentList = async () => {
//     try {
//         callAPI(`comments`, 'GET', null).then(
//           async (res) => {
//             let json = await res?.data;
//             return json
//           }
//         );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   export const getCommentDetailPost = async (idPost) => {
//     try {
//         callAPI(`post/${idPost}/comments`, 'GET', null).then(
//           async (res) => {
//             let json = await res?.data;
//             return json
//           }
//         );
//     } catch (error) {
//       console.log(error);
//     }
//   };
