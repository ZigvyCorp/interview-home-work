import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter } from 'react-router-dom'
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ConfigProvider theme={{
            token: {
                colorPrimary: "#101014"
            }
        }}>
            <StyleProvider hashPriority='high'>
                <Provider store={store}>
                    <App />
                </Provider>
            </StyleProvider>
        </ConfigProvider>
    </BrowserRouter>
)
