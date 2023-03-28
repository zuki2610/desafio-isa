import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Image } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Carrito = () => { 
    
    Swal.fire({
        position: 'top-end',
        icon: 'cart',
        title: 'Carrito',
        showConfirmButton: false
      })

    return (
<>
</>
    );
}
export default Carrito;

