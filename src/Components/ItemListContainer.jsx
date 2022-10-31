import React, {useState, useEffect} from 'react';
import { consultarBDD } from "./Utilidades/FuncionesUtiles";
import {Link} from 'react-router-dom';
import { getServicios } from './Utilidades/firebase';


const ItemListContainer = ({ greeting }) => {

  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    getServicios().then(servicios =>  {
          const cardServicio = servicios.map(servicio => 
              <div className="card cardServicios" key={servicio[0]}>
                  <img src={servicio[1].img} className="card-img-top" alt={servicio[1].nombre} />
                      <div className="card-body">
                          <h5 className="card-title">{servicio[1].nombre}</h5>
                           
                          <p className="card-text">${servicio[1].precio}</p>          
                          
                          
                          <button className='btn btn-dark'><Link className='nav-link' to={`/servicio/${servicio[1].nombre}`}>Ver Servicio</Link></button>
                  </div>
              </div>)
          
          setServicios(cardServicio)
          })
  }, []);


    return (
      <div className="row">
        <h1 className="text-center">{greeting}</h1>
        {servicios}
      </div>
    );
  };
  
  export default ItemListContainer;
  