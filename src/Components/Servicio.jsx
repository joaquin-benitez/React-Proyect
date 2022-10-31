import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from './Utilidades/FuncionesUtiles';
import DetalleServicios from './DetalleServicios';
import { getServicio } from './Utilidades/firebase';


const Servicio = () => {
  const [servicio, setServicio] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    getServicio(id).then(serv => {
      setServicio(serv)
     })
 
  }, [])

  if (servicio.length != 0) {
  return (
    <div className='card mb-3' style={{maxWidth: '540px'}}>
      <DetalleServicios servicio={servicio}/>
      
      
    </div>
  );
}}

export default Servicio;

