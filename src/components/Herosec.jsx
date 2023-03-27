import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {


    return (
    <>
    <div className="heroContent">
        <Image className="imgMobile" src={process.env.PUBLIC_URL + '/img1.png'} />
        <div>
            <h1 className="textHero">Emprende con éxito<br/> con los secretos de <br/>Caroline Sada</h1>
            <p className="subTextHero">Soluciones Financieras Para Emprendedores</p>
            <div className="btnContainer">
                <buttom className="btnHero hover3">Contactar</buttom>
            </div>
        </div>
        </div>
        <div className="banner">
        <p className="bannerText">Descubre los mejores secretos para Emprender</p>
        </div>
    </>
    );
}
export default Hero;