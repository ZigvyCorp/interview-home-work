import Skeleton from "react-loading-skeleton";
import { IMAGES } from "../../assets/images";

interface IProps {
  userInfo?: string;
  imgAvatar?: string;
}

export const Header = (props: IProps) => {
  const { userInfo = "", imgAvatar } = props;
  return (
    <header className="border-bottom" style={{ height: "90px" }}>
      <div className="container d-flex justify-content-between align-items-center h-100">
        <div className="p-3 bg-dark rounded">
          <div className="text-white font-weight-bold">HH</div>
        </div>

        <h1>Blogs</h1>
        <div className="d-flex justify-content-center align-items-center">
          {imgAvatar ? (
            <img
              src={imgAvatar}
              className="rounded-circle me-3"
              width="50px"
              alt="userAvatar"
            />
          ) : (
            <img
              src={IMAGES.userAvatarDefault}
              width="50px"
              className="rounded-circle me-3"
              alt="userAvatar"
            />
          )}
          {userInfo || "Loading..."}
        </div>
      </div>
    </header>
  );
};
