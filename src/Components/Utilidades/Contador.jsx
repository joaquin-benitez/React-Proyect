import React, {useState} from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);

    function modificarContador(operacion){
        if(operacion== "+"){
            setContador(contador + 1)
        } else{
            if(contador>0) {
                 setContador(contador - 1)
            }
        }
    }

    return (
        <>

            <button onClick={()=> modificarContador("+")} className='btn btn-dark' >Sumar</button>
            <h2>{contador}</h2>
            <button onClick={()=> modificarContador("-")} className='btn btn-danger' >Restar</button>

        </>
    );
}

export default Contador;
