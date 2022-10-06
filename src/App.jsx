import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import Navbar from './Components/Navbar';
import Carrito from './Components/Carrito';
import Main from './Components/Main';
import ItemListContainer from './Components/ItemListContainer';
import Contacto from './Components/Contacto';
import Categoria from './Components/Categoria';
import Servicio from './Components/Servicio';
const App = () => {
    return (
        <>
           <BrowserRouter>
               <Navbar/>
               <Routes>
                   <Route path='/' element={<Main/>}/>
                   <Route path='/servicios' element={<ItemListContainer greeting="Nuestros Servicios"/>}/>
                   <Route path='/servicio/:id' element={<Servicio/>}/>
                   <Route path="/categoria/:id" element={<Categoria/>} />
                   
                   <Route path="/contacto" element={<Contacto/>} />
                   <Route path="/carrito" element={<Carrito/>} />
               
               
               
               </Routes>
           </BrowserRouter>
        </>
    );
}

export default App;

