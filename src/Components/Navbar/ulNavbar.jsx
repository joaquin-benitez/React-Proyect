import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import {memo} from 'react'
import Dropdown from './Dropdown';

const UlNavbar = () => {
    
    const listDrowdon = ["Masajes", "Belleza"]
    
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
              <Dropdown lista = {listDrowdon}/>
              <li className="nav-item">
              <Link className="nav-link active" to="/Contacto">Contacto</Link>
              </li>
              <li className="nav-item">
              <CartWidget/>
              </li>
              
              
              
              
            </ul> 
        </>
    );
}

export default memo(UlNavbar);
