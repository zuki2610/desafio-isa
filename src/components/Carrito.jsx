import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Context from "../MyContext";

const Carrito = () => {
  const { carrito, agregarCarrito, eliminarCarrito, cantidad } = useContext(Context);
  const [mostrarModal, setMostrarModal] = useState(false);

  function actualizarTabla() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.name}</td>
              <td>{curso.count}</td>
              <td>
                <button
                  className="agregar"
                  data-id={curso.id}
                  onClick={(e) => {
                    const id = e.target.dataset.id;
                    agregarCarrito(id);
                  }}
                >
                  +
                </button>
                <button
                  className="restar"
                  data-id={curso.id}
                  onClick={(e) => {
                    const id = e.target.dataset.id;
                    eliminarCarrito(id);
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <Button
        variant="light"
        onClick={() => setMostrarModal(true)}
        className="carritoLleno hover5"
      >
        {cantidad}
        <i className="bi bi-cart-check-fill"></i>
      </Button>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>{actualizarTabla()}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              console.log(carrito);
              setMostrarModal(false);
            }}
          >
            Comprar
          </Button>
          <Button
            variant="secondary"
            onClick={() => setMostrarModal(false)}
          >
            Seguir comprando
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Carrito;
