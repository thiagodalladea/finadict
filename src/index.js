import React from 'react';
import ReactDOM from 'react-dom';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import { WelcomePage } from './components/WelcomePage/WelcomePage.js';
import { LoginPage } from './components/LoginPage/LoginPage.js';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route exact path='/' element={ <WelcomePage /> }/>
          <Route exact path='/login' element={ <LoginPage /> }/>
      </Routes>
  </BrowserRouter>
, document.getElementById('root'))