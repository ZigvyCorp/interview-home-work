import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  console.log("🚀 ~ ScrollToTop ~ pathname:", pathname);

  useEffect(() => {
    window.scrollY = 0;
  }, [pathname]);

  return null;
}
