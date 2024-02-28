import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import '../Languages'
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext.jsx';
import { LanguageProvider } from '../context/TranslateContext.jsx';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <AuthContextProvider>
                <LanguageProvider>
                    <App/>
                </LanguageProvider>
            </AuthContextProvider>
        </BrowserRouter>
    </Provider>,
)
