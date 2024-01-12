import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './pages/menus/Menu';
import Burger from './pages/burgers/Burger';
import Header from './components/header/Header';
import Snack from './pages/snacks/Snack';
import Salade from './pages/salades/Salade';
import Boisson from './pages/boissons/Boisson';
import Dessert from './pages/desserts/Dessert';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    font-family: Arial, Helvetica, sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/my-burger-app' element={<Menu/>}/>
        <Route path='/burger' element={<Burger/>}/>
        <Route path='/snack' element={<Snack/>}/>
        <Route path='/salade' element={<Salade/>}/>
        <Route path='/boisson' element={<Boisson/>}/>
        <Route path='/dessert' element={<Dessert/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

