export interface IAdminLayout {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
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
