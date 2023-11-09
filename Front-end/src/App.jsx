import NewFeed from "./components/NewFeed";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import store from "./redux/store"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<NewFeed/>}/>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
}


export default App;