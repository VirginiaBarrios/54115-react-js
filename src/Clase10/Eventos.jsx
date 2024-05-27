import { useEffect, useState } from "react";
//import Intercambiabilidad from "./Intercambiabilidad";
import Abstraccion1 from "./Abstraccion1";
import Abstraccion2 from "./Abstraccion2";

const Eventos = () => {
    
    const [texto, setTexto] = useState("");

    const saludar = () => {
        setTexto("Hola, bienvenidos al curso de react JS!");
    }

    function onResize() {
        console.log("Hiciste un redimensionamiento en la ventana del navegador!");
    }

    /* window.addEventListener("resize",onResize); */

    //Utilice un evento para desregistrarel evento onResize por medio de su funcion clean-up
    /* useEffect(() => {
        return () => {
            console.log("Desmontaje del componente");
            window.removeEventListener("resize", onResize);
        }
    }) */


    const capturarEvento = (e) => {
        console.log(e.nativeEvent); //Me devuelve toda la informacion de forma nativa de javascript
    }

    const ejecutarFn = (e) => {
        e.preventDefault();
        console.log("Validacion de los campos de un formulario");
        console.log("Disparar el formulario");
        //document.getElementById("form1").submit(); Envio el formulario
    }


    const mostrarTexto = (evento) => {
        console.log(evento.nativeEvent);
        
        if (evento.key != "a" && evento.key != "e" && evento.key != "i" && evento.key != "o" && evento.key != "u") {
            setTexto(evento.target.value);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <h1>Eventos</h1> */}
                    {/* <button className="btn btn-primary" onClick={saludar}>Hacer click!</button>
                    <p>{texto}</p> */}
                    {/* <h2>Synthetic events</h2>
                    <button className="btn btn-primary" onClick={(evento) => capturarEvento}>Disparar!</button>
                    <form method="post" action="">
                        <input type="submit" value="Enviar" onClick={ejecutarFn}/>
                    </form> */}
                    {/* <h2>Actividad en clase</h2>
                    <input type="text" onKeyDown={(evento) => {mostrarTexto(evento)}} />
                    <p>{texto}</p> */}
                    {/* <Intercambiabilidad item={10} inputType="input" /> */}
                    {/* <Abstraccion1 /> */}
                    <Abstraccion2 />
                </div>
            </div>
        </div>
    )
}

export default Eventos;


