import React, { ReactNode, useMemo } from "react";
import Header from "./header";
import { useLocation, useNavigate } from "react-router";
import { selectCurrentUser } from "../redux/reducers/userReducer";
import { useSelector } from "react-redux";
interface LayoutWrapperProps {
  content: ReactNode;
}
export const NO_BOTTOM_NAVIGATION_PAGES = ["/log-in"];

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ content }) => {
  const location = useLocation();
  const isCurrentUser = useSelector(selectCurrentUser);
  const notBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.some((page) =>
      location.pathname.startsWith(page)
    ) && !isCurrentUser;
  }, [location]);

  if (notBottomNav) {
    return <>{content}</>;
  }

  return (
    <>
      <Header />
      {content}
    </>
  );
};
export default LayoutWrapper;
