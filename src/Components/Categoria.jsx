import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from './Utilidades/FuncionesUtiles';

const Categoria = () => {
    
    const [servicios, setServicios] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../Servicios.json').then(servicios => {
            const serviciosCategoria = servicios.filter(servicio => servicio.idCategoria === parseInt(id) )
            console.log(serviciosCategoria)
            const cardServicio = serviciosCategoria.map(servicio => 
                <div className="card cardServicios" key={servicio.id}>
                    <img src={"../img/" + servicio.img} className="card-img-top" alt={servicio.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{servicio.nombre}</h5>
                
                            <p className="card-text">Precio: ${servicio.precio}</p>
                            
                            <button className='btn btn-dark'><Link className='nav-link' to={`/servicio/${servicio.id}`}>Ver Servicio</Link></button>
                    </div>
                </div>)
            
            setServicios(cardServicio)
        })
    }, [id]);
    return (
        <div className="row">
            {servicios}
        </div>
        );
}

export default Categoria;
