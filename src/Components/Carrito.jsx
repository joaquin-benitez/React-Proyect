import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CarritoContext';

const Carrito = () => {
    const {carrito, agregarServicio, quitarServicio} = useContext(CarritoContext)
    
    const [carritoLocal, setCarritoLocal] = useState(carrito);
    useEffect(() => {
        console.log(carritoLocal)
    }, []);
    return (
        <div>
            <h1>carrito</h1>
        </div>
    );
}

export default Carrito;
