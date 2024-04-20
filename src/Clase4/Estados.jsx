import { useState } from "react";

const Estados = () => {
    //En los states (estados) unicamente su funcion modificadora podra modificar el valor de los estados
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("Fabio");
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [curso, setCurso] = useState("JavaScript");

    function aumentar() {
        setContador (contador + 1);
        setNombre ("Jessica");
        setNuevoNombre ("Kevin");
        setCurso ("React JS");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>States (Estados)</h1>
                    <button className="btn btn-primary" onClick={aumentar}>Aumentar</button>
                    <p>Contador: {contador}</p>
                    <p>Nombre: <b>{nombre}</b></p>
                    <p>Nuevo nombre del bebe: <b>{nuevoNombre}</b></p>
                    <p>Curso: <b>{curso}</b></p>
                </div>
            </div>
        </div>
    )
}


export default Estados;