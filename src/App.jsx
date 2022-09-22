import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Contador from './Components/Contador';
import Card from './Components/Card';

const App = () => {
    return (
        <>
           <Navbar/>      
           <Contador/>
           <Card/>
        </>
    );
}

export default App;

