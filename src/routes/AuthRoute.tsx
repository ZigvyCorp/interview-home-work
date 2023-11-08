import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { SITE_URL } from "@/modules/shared";

import { getAuthCredentials } from "@/modules/auth";

export interface IAuthRoute {
  children?: any;
}
const AuthRoute = ({ children }: IAuthRoute) => {
  const navigate = useNavigate();
  const { token } = getAuthCredentials();
  const isUser = !!token;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isUser) navigate(SITE_URL.HOME);
    setLoading(false);
  }, [isUser]);

  if (loading) {
    return <div>loading</div>;
  }

  return <>{children}</>;
};

export default AuthRoute;
