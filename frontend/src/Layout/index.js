import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
