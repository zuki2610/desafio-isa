import React, { useContext }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Image, Button } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";
import  Context  from "../MyContext";

const Detalles = () => {
  const { id } = useParams();
  const {  getCurso, agregarCarrito, formatNumber, eliminarCarrito } = useContext(Context);
 
  const cursoActual = getCurso(id);
  return (
    <>
      <Header />
      <div className="pt-2 bgCursos">
        <div className="cursos d-flex justify-content-center">
          <h2 className="mt-4 mb-4 d-flex justify-content-center textHero">
            Cursos
          </h2>
        </div>
        <div className="contenedorCard ms-5">
        <div
              className="text-card cardCurso rounded d-flex gap-5"
              style={{ width: "32rem" }}
            >
              <Image src={cursoActual.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Curso:{cursoActual.name}</h5>
                <p className="card-text">Descripcion:{cursoActual.desc}</p>
                <p className="card-text">Precio:${formatNumber(cursoActual?.price || 0)}</p>
                <div className="ms-5">
                <Button type="button" className="btn btn-success ms-5 mb-2" onClick={() => { agregarCarrito(cursoActual.id) }}>
                    +
                  </Button>
                  <Button type="button" className="btn btn-danger ms-2 mb-2" onClick={() => { eliminarCarrito(cursoActual.id) }}>
                    -
                  </Button>
                  <span>Clave:{cursoActual.clave}</span>
                </div>{" "}
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Detalles;
