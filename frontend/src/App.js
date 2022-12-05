import  Layout from './views/Layout'
import Post from './views/Post'
import Dashboard from './views/Dashboard'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import './App.scss';
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        <ScrollToTop />
        <Switch>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path="*" element={
                <div style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </div>
              }
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
