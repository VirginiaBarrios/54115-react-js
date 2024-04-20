import Estados from "./Estados";
import Parrafo from "./Parrafo";
import Titulo from "./Titulo";


const CompFn = () => {
    let bebida = {id:1, nombre: "Coca Cola", precio: 1500};
    return (
        <>
            <Titulo texto={"Curso de React Js"} />
            <Parrafo contenido1={"Estamos aprendiendo el uso de las Props en React!"} contenido2= {"Este es un segundo parrafo!"}
            producto={bebida}/>
            <Estados />
        </>
    )
}

export default CompFn;