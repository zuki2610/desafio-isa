import React from 'react';
import Header from './Header';
import Hero from './Herosec';
import Cursos from './Cursos';
import Experiencias from './Experiencias';
import Footer from './Footer';


const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Cursos />
            <Experiencias />
            <Footer />
            
        </>
    );
}

export default Home;