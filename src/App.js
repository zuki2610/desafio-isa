import './index.css';
import React from 'react';
import Detalles from './components/Detalles';
import Carrito from './components/Carrito';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/desafio-isa/home" element={<Home />} />
          <Route path="/desafio-isa/carrito" element={<Carrito />} />
          <Route path="/desafio-isa/detalles" element={<Detalles />} /> 
          <Route exact path="/desafio-isa" element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  );
}
export default App;
