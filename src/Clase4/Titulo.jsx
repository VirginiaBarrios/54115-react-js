//Ejemplo #1 Prop como objeto, se accede al valor accediendo al nombre de la propiedad
/* 
const Titulo = (props) => {
    return (
        <>
            <h3>{props.texto}</h3>
        </>
    )
} */

//Ejemplo #2 Desestructuro la Prop, accediendo directamente a su propiedad.

const Titulo = ({texto}) => {
    return (
        <>
            <h3 className= "bg-dark text-white">{texto}</h3>
        </>
    )
}

export default Titulo;