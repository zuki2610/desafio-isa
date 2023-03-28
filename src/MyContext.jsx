import { createContext, useEffect, useState } from "react";
const Context = createContext();

const MyContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [cursos, setCursos] = useState([]);

  const getCursos = async () => {
    const data = await fetch(process.env.PUBLIC_URL + "/cursos.json");
    const cursos = await data.json();
    setCursos(cursos);
  };

	const getCurso = (id) => {
		return cursos.find(cursos => cursos.id === id);
	}

	const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

	const calcularTotales = () => { 
		let total = 0;
		let cantidad = 0;
		
		carrito.forEach(curso => {
			total += curso.price * curso.count;
			cantidad += curso.count;
		});

		setTotal(total);
		setCantidad(cantidad);
	};

	const agregarCarrito = (cursoId) => { 
		let tempCurso = carrito.find(curso => curso.id === cursoId);

		if (tempCurso) {
			tempCurso.count += 1;
			setCarrito([...carrito]);
		} else {
			tempCurso = cursos.find(curso => curso.id === cursoId);
			tempCurso.count = 1;
			setCarrito([...carrito, tempCurso]);
		}
	};

	const eliminarCarrito = (cursoId) => {
		let tempCurso = carrito.find(curso => curso.id === cursoId);

		if (tempCurso.count === 1) {
			setCarrito(carrito.filter(curso => curso.id !== cursoId));
		} else {
			tempCurso.count -=1;
			setCarrito([...carrito]);
		}
	};

	useEffect(() => {
		getCursos();
	}, []);

	useEffect(() => {
		calcularTotales();
	}, [carrito]);

	return (
    <Context.Provider
      value={{
        cursos,
        total,
        cantidad,
        carrito,
		formatNumber,
        getCurso,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Context.Provider>
  );

};

export { MyContext };

export default Context;
