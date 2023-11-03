import './App.css';
import { Header } from './components';
import { RootRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Header/>
      <RootRoutes/>
    </div>
  );
}

export default App;
