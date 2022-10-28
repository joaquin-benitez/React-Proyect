import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import { CarritoProvider } from './context/CarritoContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
       <App/>
  </CarritoProvider>
);


