import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className='min-h-full'>
      <Outlet />
    </main>
  );
}

export default Main;
