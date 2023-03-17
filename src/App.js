import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from './About';
import Cart from './pages/Cart';
import { useState } from 'react';
import Game from './Components/Game';

function App() {
  return (
   <>
   <Game /> 
    </>
    
  );
}

export default App;
   {/* <Router>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Router> */}
