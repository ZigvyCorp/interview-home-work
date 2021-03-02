import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Post />
        </Container>
      </main>
    </>
  );
}

export default App;
