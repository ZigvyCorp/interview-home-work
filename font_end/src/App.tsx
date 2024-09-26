import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFound from './components/NotFound';
import Layout from './components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import BlogPage from './pages/BlogPage.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/blog">
                        <Route index element={<NotFound />} />
                        <Route path=":id" element={<BlogPage />} />
                    </Route>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
