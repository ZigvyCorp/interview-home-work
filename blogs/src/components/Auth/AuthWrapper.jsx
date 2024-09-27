import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { LOGIN_REQUEST } from "@redux/actions/authActions";

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const apiRequest = useSelector((state) => state.auth.apiRequest);
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: LOGIN_REQUEST });
  }, [dispatch]);

  useEffect(() => {
    if (!token && !apiRequest && router.pathname !== "/login") {
      router.push("/login");
    } else if (apiRequest && router.pathname === "/login") {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [apiRequest, token, router]);

  if (isLoading && apiRequest) {
    return <div>Loading...</div>;
  }

  return children;
};

export default AuthWrapper;
