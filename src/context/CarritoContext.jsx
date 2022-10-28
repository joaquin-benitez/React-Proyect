import React, {createContext, useState} from 'react';

const CarritoContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarServicio = (serv, cant) => {
        const aux = carrito
        let indice = aux.findIndex(servicio => servicio.id  == serv.id) 

        if(indice != -1) {
            aux[indice].cantidad = cant
        } else {
          const servCarrito = {id: serv.id, cantidad: cant}
          aux.push(servCarrito)
        }
        setCarrito(aux)
        console.log(carrito)

    }

    const quitarServicio = (serv) => {
        const aux = carrito
        let indice = aux.findIndex(servicio => servicio.id  == serv.id) 

        aux.splice(indice,1)
        setCarrito(aux)
        console.log(carrito)
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarServicio, quitarServicio}}>
                    {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};

