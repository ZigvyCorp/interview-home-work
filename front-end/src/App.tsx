import React from 'react';
import WebRoute from './router';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div style={{width:'50%', margin:'auto', padding:10}}>
      <WebRoute/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
