import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const UlNavbar = () => {
    return (
        <>
           <ul className="navbar-nav me-auto">
              <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio
                  <span className="visually-hidden">(current)</span>
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/Servicios">Servicios</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" href="#">Contacto</Link>
              </li>
              <li className="nav-item">
              <CartWidget/>
              </li>
              
              
            </ul> 
        </>
    );
}

export default UlNavbar;
