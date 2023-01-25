import React from 'react';
import ReactDOM from 'react-dom';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { WelcomePage } from './WelcomePage.js';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route exact path='/' element={ <WelcomePage /> }/>
      </Routes>
  </BrowserRouter>
, document.getElementById('root'))