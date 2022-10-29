import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
           <Link className="nav-link active" to="/Carrito">Carrito<i className="bx bx-cart"/></Link>
        
        </>
    );
}

export default CartWidget;
