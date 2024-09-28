// E:\zigvy\zigvy-interview-blog\frontend\src\App.jsx
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import HomePage from './pages/HomePage';
import Login from "./pages/Login.jsx";
import PostDetail from "./components/PostDetail.jsx";

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/posts/:id" element={<PostDetail />} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    );
};

export default App;
