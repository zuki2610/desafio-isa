import React, {useState, useEffect} from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Cursos = () => {
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();
    const getCursos = async () => {
        const data = await fetch(process.env.PUBLIC_URL + '/cursos.json');
        const cursos = await data.json();
        setCursos(cursos);
    }
    const verDetalle = () => {
        navigate('/desafio-isa/detalles');
    }
    useEffect(() => {
        getCursos();
    }, [])

    return (

    <>
    <div className="pt-2 bgCursos">
        <div className="cursos d-flex justify-content-center">
        <h2 className="mt-4 mb-4 d-flex justify-content-center textHero">Cursos</h2>
        </div>  
        <div className="contenedorCard">
      {cursos.map((curso) => (
      
          <div className="text-card cardCurso rounded" style={{width: "18rem"}}>
          <Image  src={curso.img} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{curso.name}</h5>
          <p className="card-text">Precio:{curso.price}</p>
          <div className="ms-5">
          <button type="button " onClick={verDetalle} className="btn btn-info mb-2">Ver mas</button>
          <button type="button " className="btn btn-success ms-5 mb-2">+</button>
          <button type="button " className="btn btn-danger ms-2 mb-2">-</button>
          </div>
          </div>
      </div>
       
      ))
    }
 </div>
        
    </div>
    
    </>
    );
}
export default Cursos;