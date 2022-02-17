// const fetchUsersByIds = (userIds) => {
//   return new Promise((resole) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.json();
//         return users;
//       })
//       .then((users) => {
//         resole(users?.filter((user) => userIds.includes(user.id)));
//       })
//       .catch((err) => err);
//   });
// };

// export default fetchUsersByIds;
