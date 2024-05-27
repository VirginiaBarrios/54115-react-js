
import { useState } from 'react';
import './App.css';
import Eventos from './Clase10/Eventos.jsx';



function App() {
  const [visible, setVisible] = useState(true);

  const ocultarComponente = () => {
    setVisible(false);
  }

  return (
    <>
      {visible ? <Eventos /> : ""}
      {/* <button className="btn btn-primary" onClick={ocultarComponente}>Ocultar Componente</button> */}
    </>
    
  )
}

export default App;
