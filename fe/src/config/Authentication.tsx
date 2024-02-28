import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { UserState } from "../redux/reducer/userReducer";
import { useNavigate } from "react-router-dom";

export function Authentication({ children }: { children: React.ReactNode }) {
  const user = useAppSelector(UserState);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.currentUser) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, user.currentUser]);
  return <div>{children}</div>;
}
