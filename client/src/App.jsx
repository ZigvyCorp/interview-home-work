import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserAuthForm from './pages/UserAuthForm';
import HomePage from './pages/HomePage';
import { createContext, useEffect, useState } from 'react';
import { lookInSession } from './common/session';
import SearchPage from './pages/SearchPage';
import PageNotFound from './pages/404.page';
export const UserContext = createContext({});

const App = () => {
  const [userAuth, setUserAuth] = useState({});
  useEffect(() => {
    let userInSession = lookInSession('user');

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route
            path="signin"
            element={<UserAuthForm type="sign-in" />}
          />
          <Route
            path="signup"
            element={<UserAuthForm type="sign-up" />}
          />
          <Route path="search/:query" element={<SearchPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
