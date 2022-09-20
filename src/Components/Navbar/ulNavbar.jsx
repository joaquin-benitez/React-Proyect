import React from 'react';

const UlNavbar = () => {
    return (
        <>
           <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#"><i className="bx bx-cart" />Carrito</a>
              </li>
              
              
            </ul> 
        </>
    );
}

export default UlNavbar;
