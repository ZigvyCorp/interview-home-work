import { Header } from "./header";
import Main from "./main/main.component";

function Layout() {
  return (
    <div className='max-w-screen-lg mx-auto px-6'>
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
