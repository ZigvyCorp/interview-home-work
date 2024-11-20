import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Public, Blog, Register, ForgotPassword, ResetPassword, NotFound, DetailNews } from "./pages/public"
import path from './routes/path';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { Loading } from 'components';


function App() {

  const { loading } = useSelector((state) => state.loadingSlice)


  return (
    <>
      <div className="min-h-screen font-main bg-main relative">
        <Loading isLoading={loading} fullscreen={true} />

        <ToastContainer
        />
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Blog />} />
            <Route path={path.DETAIL_NEWS} element={<DetailNews />} />
          </Route>



          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.FORGOTPASSWORD} element={<ForgotPassword />} />
          <Route path={path.RESETPASSWORD} element={<ResetPassword />} />
          <Route path={path.ALL} element={<NotFound />} />


        </Routes>
      </div>
    </>
  );
}

export default App;
