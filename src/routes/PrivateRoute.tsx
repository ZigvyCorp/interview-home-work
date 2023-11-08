import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SITE_URL } from "@/modules/shared";

import { getAuthCredentials } from "@/modules/auth";

export interface IPrivateRoute {
  children: any;
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
  const navigate = useNavigate();
  const { token } = getAuthCredentials();
  const [loading, setLoading] = useState(true);

  const isUser = !!token;

  useEffect(() => {
    if (!isUser) navigate(SITE_URL.LOGIN);
    setLoading(false);
  }, [isUser]);

  if (loading) {
    return <div>loading</div>;
  }

  return children;
};

export default PrivateRoute;
