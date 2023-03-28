import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import  Context  from "../MyContext";

const Cursos = () => {

  const {  cursos, agregarCarrito, formatNumber, eliminarCarrito } = useContext(Context);

  const navigate = useNavigate();

  const verDetalle = (id) => {
    navigate(`/desafio-isa/detalles/${id}`);
  };

  return (
    <>
      <div className="pt-2 bgCursos">
        <div className="cursos d-flex justify-content-center">
          <h2 className="mt-4 mb-4 d-flex justify-content-center textHero">
            Cursos
          </h2>
        </div>
        <div className="contenedorCard">
          {cursos.map((curso) => (
            <div
              className="text-card cardCurso rounded"
              style={{ width: "18rem" }}
              key={curso.id}
            >
              <Image src={curso.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{curso.name}</h5>
                <span>{curso.clave}</span>
                <p className="card-text">Precio:${formatNumber(curso?.price || 0)}</p>
                <div className="ms-5">
                  <Button
                    type="button "
                    onClick={() => {
                      verDetalle(curso.id);
                    }}
                    className="btn btn-info mb-2"
                  >
                    Ver mas
                  </Button>
                  <Button type="button" className="btn btn-success ms-5 mb-2" onClick={() => { agregarCarrito(curso.id) }}>
                    +
                  </Button>
                  <Button type="button" className="btn btn-danger ms-2 mb-2" onClick={() => { eliminarCarrito(curso.id) }}>
                    -
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cursos;
