import './App.css'
import CompFn from './Clase4/CompFn.jsx'
import DetalleProducto from './Clase4/DetalleProducto.jsx';

function App() {
  let detalle1 = {id:1, nombre: "Big Mac", imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", calorias: 505, descripcion: "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único."};
  let detalle2 = {id:2, nombre: "Hamburguesa con queso", imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar", calorias: 289, descripcion: "Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda."};
  return (
      <>
        <CompFn />
        <DetalleProducto producto={detalle1} />
        <DetalleProducto producto={detalle2} />
      </>
  )
}

export default App;
