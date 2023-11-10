import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const path = route.path;
          const Page = route.page;

          return (
            <Route
              key={index}
              path={path}
              element={
                <div className="Zigvy_blog">
                  <Page />
                </div>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
