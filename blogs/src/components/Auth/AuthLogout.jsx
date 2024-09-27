import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "@redux/actions/authActions";

const AuthLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </nav>
  );
};

export default AuthLogout;
