import './index.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Herosec';
import Cursos from './components/Cursos';
import Experiencias from './components/Experiencias';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <Header />
    <Hero />
    <Cursos />
    <Experiencias />
    <Footer />
    </div>
  );
}

export default App;
