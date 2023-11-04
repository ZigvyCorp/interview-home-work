import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "../src/components/MainHeader";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import PostsPage from "./pages/Post";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <MainHeader />
          <main className="container">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/posts" />
              </Route>
              <Route path="/posts" exact>
                <PostsPage />
              </Route>
              <Route path="/posts/:postId">
                <PostDetail></PostDetail>
              </Route>
            </Switch>
          </main>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
