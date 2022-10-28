import React, {useState, useEffect} from 'react';
import { consultarBDD } from "./Utilidades/FuncionesUtiles";
import {Link} from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

  const [servicios, setServicios] = useState([]);
  useEffect(() => {
      consultarBDD('Servicios.json').then(servicios => {
          const cardServicio = servicios.map(servicio => 
              <div className="card cardServicios" key={servicio.id}>
                  <img src={"../img/"+ servicio.img} className="card-img-top" alt={servicio.nombre} />
                      <div className="card-body">
                          <h5 className="card-title">{servicio.nombre}</h5>
                           
                          <p className="card-text">${servicio.precio}</p>          
                          
                          
                          <button className='btn btn-dark'><Link className='nav-link' to={`/servicio/${servicio.nombre}`}>Ver Servicio</Link></button>
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
  