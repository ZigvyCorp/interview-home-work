import Header from "./components/header";

function defaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default defaultLayout;
