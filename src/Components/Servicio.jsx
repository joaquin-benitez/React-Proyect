import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from './Utilidades/FuncionesUtiles';
import DetalleServicios from './DetalleServicios';


const Servicio = () => {
  const [servicio, setServicio] = useState([]);
  const {nombre} = useParams()
  useEffect(() => {
     consultarBDD('../Servicios.json').then(servicios => {
      const servicio1 = servicios.find(servicioArray => servicioArray.nombre === nombre)
      
      setServicio(servicio1)
     })
 
  }, [])

  return (
    <div className='card mb-3' style={{maxWidth: '540px'}}>
      <DetalleServicios servicio={servicio}/>
      
      
    </div>
  );
}

export default Servicio;

