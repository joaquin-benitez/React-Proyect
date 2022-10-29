import React, {useState, useContext} from 'react';
import { CarritoContext } from '../context/CarritoContext';

const DetalleServicios = ({servicio}) => {
  const [cantidad, setCantidad] = useState(1);

  const {carrito, agregarServicio, quitarServicio} = useContext(CarritoContext)

  const cantServicio = (operacion) => {
    if(operacion == "+") {
        if(cantidad < 20) {
          setCantidad(cantidad + 1)
        }   
    } else {
      if(cantidad > 1) {
        setCantidad(cantidad - 1)
      }
  }
}


    return (
        <>
         
  <div className="row g-0">
    <div className="col-12">
      <img src={"../img/"+ servicio.img} className="img-det img-fluid rounded-start"  />
    </div>
    <div className="col-12">
      <div className="card-body">
        <h5 className="card-title">{servicio.nombre}</h5>

        <p className="card-text">${servicio.precio}</p>
        <p className="card-text">{servicio.descripcion}</p>
        <p className='card-text'>{cantidad} Cantidad</p>
        
        <button className='btn btn-light' onClick={() => cantServicio("+")}>+</button>
        
        <button className='btn btn-dark' onClick={() => cantServicio("-")}>-</button>

        <button className='btn btn-dark' onClick={() => agregarServicio(servicio, cantidad) }>Agregar al carrito</button>

        </div>
        </div>
      </div>

        </>
    );
}

export default DetalleServicios;