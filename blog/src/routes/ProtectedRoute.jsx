import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { userState$ } from "../redux/selectors";

export default function ProtectedRouter({ children }) {
  const navigation = useNavigate();
  const isLogged = useSelector(userState$);

  useEffect(() => {
    if (isLogged) {
      navigation("/");
    } else {
      navigation("/login");
    }
  }, [isLogged]);

  return <Outlet />;
}
