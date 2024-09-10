import { Header } from "./header";
import Main from "./main/main.component";

function Layout() {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
