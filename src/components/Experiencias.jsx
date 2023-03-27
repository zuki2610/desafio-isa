import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Image } from 'react-bootstrap';



const Experiencias = () => {


    return (
    <>
    <div className="experiencias">
        <div className="containerExperiencias">
            <h2 className="mt-4 mb-4 d-flex justify-content-center textHero">Experiencias</h2>
            <div className="experienciasCard">
                <div className="cardExperiencia">
                    <div className="cardImage">
                    <Image className="experienciaMobile rounded-circle" src={process.env.PUBLIC_URL + '/e2.jpg'} />
                    </div>
                    <div className="cardText">
                    <h3>Zelinski</h3>
                    <p>Aprendí todas las herramientas que aplico actualmente en mi emprendimiento y me encuentro en la cima del éxito</p>
                    </div>
                </div>    
            </div>
            <div className="experienciasCard">
                <div className="cardExperiencia">
                    <div className="cardImage">
                    <Image className="experienciaMobile rounded-circle" src={process.env.PUBLIC_URL + '/e3.jpg'} />
                    </div>
                    <div className="cardText">
                    <h3>Niurika</h3>
                    <p>Maravillosa experiencia, me llevo de la quiebra a la riqueza</p>
                    </div>
                </div>    
            </div>

            <div className="experienciasCard">
                <div className="cardExperiencia">
                    <div className="cardImage">
                    <Image className="experienciaMobile rounded-circle" src={process.env.PUBLIC_URL + '/e1.jpg'} />
                    </div>
                    <div className="cardText">
                    <h3>Sebas</h3>
                    <p>Inigualable y maravillosa la Isabel :D</p>
                    </div>
                </div>    
            </div>


         </div>
    </div>
    <div className="d-flex justify-content-center ">
        <buttom className="btnHero hover3">Contactar</buttom>
    </div>
    </>
);
}
            export default Experiencias;