import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const {carrito, agregarServicio, quitarServicio} = useContext(CarritoContext)
    
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const servMostrar  = carrito.map(servicio => 
            <div className="card cardServicio" key={servicio.id}>
                    <img src={"./img/" + servicio.img} className="card-img-top" alt={servicio.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{servicio.nombre}</h5>
                            <p className="card-text">Precio: {servicio.precio}</p>
                            <p className="card-text">Cantidad: {servicio.cantidad}</p>
                            <p className="card-text">Precio Total: {servicio.precio * servicio.cantidad}</p>
                            <button className='btn btn-dark' onClick={() => quitarServicio(servicio)}>Eliminar</button>
                    </div>
                </div>)
        setCarritoLocal(servMostrar)
    }, [carrito]);
    
   const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} </div> : <> <h1>No existen elementos en el carrito <Link to="/servicios"><button className='btn btn-dark'>Ir a Servicios</button></Link></h1></>
          
    return app
}
export default Carrito;
