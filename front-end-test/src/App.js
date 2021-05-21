import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import PostPage from './pages/PostDetails';
import Layout from './hoc/Layout';
import SearchResults from './pages/SearchResults';

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/post/:id" exact
                        component={(props) => <PostPage {...props} />} />

                    <Route path="/search/:query" exact
                        component={(props) => <SearchResults {...props} />} />
                </Switch>
            </Layout>

        </div>
    );
}

export default App;
