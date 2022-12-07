import Header from "../Components/Header/Header";

function Layout({ Component }) {
  return (
    <div>
      <Header />
      {<Component />}
    </div>
  );
}

export default Layout;
