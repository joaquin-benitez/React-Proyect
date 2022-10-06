import React from 'react';

const DetalleServicios = ({servicio}) => {
    return (
        <>
         
  <div className="row g-0">
    <div className="col-md-4">
      <img src={"../img/"+ servicio.img} className="img-fluid rounded-start"  />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{servicio.nombre}</h5>

        <p className="card-text">${servicio.precio}</p>
        <p className="card-text">{servicio.descripcion}</p>
        <button className='btn btn-dark'>Comprar</button>
        </div>
        </div>
      </div>

        </>
    );
}

export default DetalleServicios;