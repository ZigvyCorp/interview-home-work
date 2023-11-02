import "./style.css";
import AvatarUser from "../../Components/Header/AvatarUser";
import LogoHeader from "../../Components/Header/LogoHeader";
import PostList from "../../Components/PostList";

function Homepage() {
  return (
    <>
      <div className="app_header">
        <LogoHeader />
        <h2>BLOG</h2>
        <AvatarUser />
      </div>
      <div className="app_post-list">
        <PostList />
      </div>
    </>
  );
}

export default Homepage;
