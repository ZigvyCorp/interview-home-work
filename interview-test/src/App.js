import './App.less';
import { Layout } from 'antd';
import HeaderApp from './components/layouts/Header';
import HomePage from './components/pages/HomePage';
import DetailPage from './components/pages/DetailPage';
import NotFound from './components/pages/NotFound';
import SearchPage from './components/pages/SearchPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const { Content } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HeaderApp />
        <Content className="content">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="posts/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
