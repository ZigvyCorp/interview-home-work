import avatarUser from "../../assets/user.png";
import "./style.css";
function AvatarUser(params) {
  return (
    <>
      <div className="header_avatar">
        <img src={avatarUser}></img>
        <p>TriNVM</p>
      </div>
    </>
  );
}
export default AvatarUser;
