import React from 'react';
import Router from './Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Router/>
      <ToastContainer />
    </div>
  );
}

export default App;
