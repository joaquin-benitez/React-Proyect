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
import Footer from './Components/Footer';
const App = () => {
    return (
        <>
           <BrowserRouter>
               <Navbar/>
               <Routes>
                   <Route path='/' element={<Main/>}/>
                   <Route path='/servicios' element={<ItemListContainer greeting="Nuestros Servicios"/>}/>
                   <Route path='/servicio/:nombre' element={<Servicio/>}/>
                   <Route path="/categoria/:cate" element={<Categoria/>} />
                   
                   <Route path="/contacto" element={<Contacto/>} />
                   <Route path="/carrito" element={<Carrito/>} />
                   <Route path="*" element={<h1>Error 404</h1>}/>
                   
      
               
               </Routes>
               <Footer/>
           </BrowserRouter>
        </>
    );
}

export default App;

