import './App.css';
import Memo from './Clase12/Memo.jsx';
//import Rendering2 from './Clase12/Rendering2.jsx';






function App() {
  const producto = {id:1, nombre: "Vaso Quencher Stanley 1,18 lts", marca:"Stanley", precio:52000, imagen:"https://stanley1913store.com/cdn/shop/files/Quencher_3_1400x.jpg?v=1697058312", fecha: "08-05-2024"}
  return (
    <>
      <Memo item={producto} />
    </>
    
  )
}

export default App;
