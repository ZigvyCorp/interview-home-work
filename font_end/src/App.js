import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/blog">
                    <Route index element={<NotFound />} />
                    <Route
                        path=":id"
                        element={
                            <Layout>
                                <Blog />
                            </Layout>
                        }
                    />
                </Route>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
