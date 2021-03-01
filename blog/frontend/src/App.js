import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>main</Container>
      </main>
    </>
  );
}

export default App;
