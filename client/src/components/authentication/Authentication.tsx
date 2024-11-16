import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthenticationProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Authentication = (props: AuthenticationProps): JSX.Element => {
  const { children } = props;
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Authentication;
