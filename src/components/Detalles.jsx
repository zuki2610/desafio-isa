import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Image, Button } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";

const Detalles = () => {
  const [curso, setCurso] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCurso = async () => {
      console.log(id);
      const data = await fetch(process.env.PUBLIC_URL + "/cursos.json");
      const cursos = await data.json();
      console.log(cursos);
      const curso = cursos.find((curso) => curso.id === id);
      console.log(curso);
      setCurso(curso);
      setLoading(true);
    };
    getCurso();
  }, [id]);

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
          {loading ? (
            <div
              className="text-card cardCurso rounded d-flex gap-5"
              style={{ width: "32rem" }}
            >
              <Image src={curso.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Curso:{curso.name}</h5>
                <p className="card-text">Descripcion:{curso.desc}</p>
                <p className="card-text">Precio:{curso.price}</p>
                <div className="ms-5">
                  <Button type="button " className="btn btn-success ms-5 mb-2">
                    +
                  </Button>
                  <Button type="button " className="btn btn-danger ms-2 mb-2">
                    -
                  </Button>
                  <span>Clave:{curso.clave}</span>
                </div>{" "}
              </div>
            </div>
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Detalles;
