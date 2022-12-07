import { useMediaQuery } from "react-responsive";

function UserNav() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      style={{ flex: 2 }}
      className="d-flex justify-content-end align-items-center"
    >
      <img
        src="https://i.pravatar.cc/300"
        className="rounded-circle px-2 img-fluid"
        style={{ width: "60px" }}
        alt="Avatar"
      />
      <p className={`${isMobile ? "h6" : "h2"} mb-0 text-white-50`}>
        Kan Shiro
      </p>
    </div>
  );
}

export default UserNav;
