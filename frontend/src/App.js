import { BrowserRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="my-4">
        <Container>
          <Route path="/" component={HomePage} exact/>
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
