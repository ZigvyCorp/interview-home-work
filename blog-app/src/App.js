import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/layouts/defaultLayout/defaultLayout';
import { mapRoutes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './components/contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App" style={{ width: '100vw', height: '100vh' }}>
          <Routes>
            {mapRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
