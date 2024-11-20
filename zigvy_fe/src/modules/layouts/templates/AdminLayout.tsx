import { Link, useLocation, useParams } from "react-router-dom";

import { Container } from "@/components/common";

import { Header } from "@/components/layouts";

import Logo from "@/assets/imgs/icons/logo.svg";
import { useMemo } from "react";

export interface IAdminLayout {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  const location = useLocation();
  const params = useParams();

  const page_title = useMemo(() => {
    switch (location.pathname) {
      default:
        const result = Object.keys(params).length > 0 ? "Blog detail" : "Blogs";
        return result;
      // break;
    }
  }, [location.pathname]);

  return (
    <>
      <Header>
        <Container className="h-full">
          <div className="flex justify-between items-center h-full relative">
            <Link to={"/"} className="logo">
              <img src={Logo} alt="" />
            </Link>

            <h1 className="absolute left-1/2 -translate-x-1/2 text-[2rem] font-semibold capitalize">{page_title}</h1>

            <div>Avatar</div>
          </div>
        </Container>
      </Header>
      <main className="pt-[var(--head-height)] bg-bg min-h-[100vh]">{children}</main>
      <footer></footer>
    </>
  );
};

export default AdminLayout;

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height,
//   };
// }
