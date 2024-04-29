
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Logo from './Clase9/Logo.jsx';
import Productos from './Clase9/Productos.jsx';
import Arrepentimiento from './Clase9/Arrepentimiento.jsx';
import Footer from './Clase9/Footer.jsx';
import Error404 from './Clase9/Error404.jsx';
import NavBar from './Clase9/NavBar.jsx';




function App() {
  return (
    <BrowserRouter>
      <Logo />
      <NavBar />
      <Routes>
        <Route path= {'/'} element={<Productos />} />
        <Route path= {'/categoria/:idCategoria'} element={<Productos />} />
        <Route path= {'/Arrepentimiento'} element={<Arrepentimiento />} />
        <Route path= {'/*'} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
