import './App.css';
import ItemListContainer from './Clase11/ItemListContainer.jsx';
import CartContextProvider, { CartContext } from './Context/CartContext.jsx';



function App() {
  return (
    <>
      <CartContextProvider>
        <ItemListContainer />
      </CartContextProvider>
    </>
    
  )
}

export default App;
