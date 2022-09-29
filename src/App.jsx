import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import Navbar from './Components/Navbar';

import Main from './Components/Main';
import ItemListContainer from './Components/ItemListContainer';

const App = () => {
    return (
        <>
           <BrowserRouter>
               <Navbar/>
               <Routes>
                   <Route path='/' element={<Main/>}/>
                   <Route path='/servicios' element={<ItemListContainer greeting="Nuestros Servicios"/>}/>
                   
                   
               
               
               
               </Routes>
           </BrowserRouter>
        </>
    );
}

export default App;

