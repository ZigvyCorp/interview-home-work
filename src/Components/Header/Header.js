import { useMediaQuery } from "react-responsive";
import HeaderBlog from "./HeaderBlog";
import HeaderLogo from "./HeaderLogo";
import UserNav from "./UserNav";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="bg-secondary">
      <div className="container d-flex justify-content-between">
        <div
          style={{ flex: 0.5, gap: "10px" }}
          className="d-flex justify-content-between"
        >
          <HeaderLogo isMobile={isMobile} />
          <HeaderBlog isMobile={isMobile} />
        </div>
        <UserNav isMobile={isMobile} />
      </div>
    </div>
  );
}

export default Header;
