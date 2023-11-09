import { Header } from "@/components/layouts";

export interface IAdminLayout {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  return (
    <>
      <Header></Header>
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
