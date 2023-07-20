import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Encabezado from './componentes/Encabezado';
import Cuerpo from './componentes/Cuerpo';
import Footer from './componentes/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <Encabezado></Encabezado>
    <Cuerpo></Cuerpo>
    <Footer></Footer>
  </div>);
