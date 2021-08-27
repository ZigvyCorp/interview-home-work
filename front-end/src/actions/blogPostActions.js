// import fetch from "isomorphic-fetch";
// let token =
//   "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjVhNjg4MjVkYTE1NTEzMDFmYWFjNSIsImlhdCI6MTYyOTg1Nzk2NSwiZXhwIjoxNjYxMzkzOTY1fQ.Rd4CeLctJbnAxLSBhfXLOBPPZrXk4kRiIchs2HNH-XSlQC2CDzRnff0kE1OOze5CxPhdgB3vLTsktks2qj5wag";
// export function fetchBlogPosts() {
//   return fetch("http://192.168.1.71:3000/api/post/", {
//     method: "GET",
//     mode: "cors",
//     headers: new Headers({
//       Authorization: "Bearer " + token,
//     }),
//   })
//     .then((res) => res.json())
//     .catch((err) => err);
// }

// export function fetchBlogPost(id) {
//   return fetch("http://192.168.1.71:3000/api/post/Id?postId=" + id, {
//     method: "GET",
//     mode: "cors",
//   })
//     .then((res) => {
//       res.json();
//     })
//     .then((result) => console.log("success:", result))
//     .catch((err) => err);
// }

// export function fetchBlogPostByKey(key, data) {
//   let url =
//     "http://192.168.1.71:3000/api/post/key?key=" + key + "&data=" + data;
//   return fetch(url, {
//     method: "GET",
//     mode: "cors",
//     headers: new Headers({
//       Authorization: "Bearer " + token,
//     }),
//   })
//     .then((res) => {
//       console.log(1111111, res);
//       res.json();
//     })
//     .then((result) => console.log("success:", result))
//     .catch((err) => err);
//   }
