import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./setup/redux/configStore.ts";
import { AxiosInterceptor } from "./setup/useIntercepter.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <AxiosInterceptor>
        <App />
      </AxiosInterceptor>
    </Provider>
  </BrowserRouter>
);
