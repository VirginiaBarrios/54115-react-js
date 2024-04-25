import { useState } from "react";
import { useRef } from "react";

const CompUseRef = () => {
    const [estado1, setEstado1] = useState("Curso de JS (por estado)") 
    const Div1 = useRef("Curso de JavaScript");

    function modificarDiv() {
        Div1.current.innerHTML = "Curso de React JS";
        Div1.current.className = "bg-dark text-success display-6"
    }
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    <h1>UseRef</h1>
                    <div ref={Div1}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ullam quae modi provident qui, hic ratione. Autem repudiandae temporibus adipisci voluptatum labore alias, laudantium rerum molestiae dicta ab in harum.</p>
                        <p>{estado1}</p>
                    </div>
                    <p><button className="btn btn-primary" onClick={modificarDiv}>Modificar DIV #1</button></p>
                </div>
            </div>
        </div>
    )
}

export default CompUseRef;