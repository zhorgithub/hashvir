import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>

      <ToastContainer />
      <Routes />
    </Router>
  );
}

export default App;
