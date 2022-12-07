import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function HeaderLogo() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="py-3">
      <Link
        to="/"
        className={`text-white text-decoration-none ${isMobile ? "h4" : "h1"}`}
      >
        LOGO
      </Link>
    </div>
  );
}

export default HeaderLogo;
