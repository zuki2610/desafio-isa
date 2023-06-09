import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import MyContext from "../MyContext";
import Carrito from "./Carrito";

const Header = () => {
  const { cantidad } = useContext(MyContext);
  const navigate = useNavigate();
  
  const redireccionHome = () => {
    navigate("/desafio-isa/home");
  };


  return (
    <>
      <div className="header">
        <div className="d-flex flex-row">
          <div className="containerHeader d-flex">
            <Image
              onClick={() => {redireccionHome()} }
              className="logoMobile"
              src={process.env.PUBLIC_URL + "/carolineSada.jpg"}
            />
            <div className="column text-center texttitle">
              <span>Emprende con:</span>
              <h2>Caroline Sada</h2>
            </div>
            <div className="pt-5 mt-5">
              <Carrito />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
