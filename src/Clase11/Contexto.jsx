import React from "react"
import { useContext } from "react";
import { useState } from "react"

//Sin Contexto
/* const Componente1 = ({isDarkMode}) => {
    return (
        <Componente2 isDarkMode={isDarkMode} />
    )
}

const Componente2 = ({isDarkMode}) => {
    return (
        <p>Es Modo Oscuro? <b>{isDarkMode ? "Si" : "No"}</b></p>
    )
} */

//Con Contexto

const ThemeContext = React.createContext();

const Componente1 = () => {
    return (
        <Componente2 />
    )
}

const Componente2 = () => {
    const {isDarkMode, productos} = useContext(ThemeContext);

    return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    <h1>Utilizando Contexto</h1>
                    <p>Es Modo Oscuro? <b>{isDarkMode ? "Si" : "No"}</b></p>
                    <ol>
                        {productos.map(produ => (
                            <li key={produ.id}>{produ.nombre}</li>
                        ))}
                    </ol>
                    
                </div>
            </div>
        </div>
    )
}

const Componente3 = () => {
    const {saludar} = useContext(ThemeContext);

    return (
        <>
            <h3>Componente #3</h3>
            <button className="btn btn-primary" onClick={saludar}>Saludar</button>
        </>
        
    )
}

const Contexto = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const productos = [
        {id:1, nombre: "Coca Cola", precio:1600},
        {id:2, nombre: "Pepsi", precio:1500},
        {id:3, nombre: "Manaos", precio:1300}
    ];

    const saludar = () => {
        alert("Hola a Todos!")
    }

    //Sin Contexto
    /*  return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    <h1>Contexto</h1>
                    <Componente1 isDarkMode={isDarkMode}/>
                </div>
            </div>
        </div>
    ) */



    return (

        <>
            <ThemeContext.Provider value={{isDarkMode, productos, saludar}}>
                <Componente1 />
                <Componente3 />
            </ThemeContext.Provider>
            
        </>
        
    )
}

export default Contexto;