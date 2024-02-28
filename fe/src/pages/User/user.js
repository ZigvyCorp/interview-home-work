import { useSelector } from "react-redux";
function User() {
  let user = useSelector((value) => value.posts);
  console.log(user);
  return <>userPage</>;
}

export default User;
