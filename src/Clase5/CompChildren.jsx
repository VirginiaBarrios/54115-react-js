const TextoTitulo = ({children}) => { //Opcion #1 - Desestructurando la prop desde los parametros
    return (
        <>
            {children}
        </>
    )
}

const TextoContenido = (props) => { //Opcion #2 - Recibimos un objeto como parametros, y accedemos luego a las propiedades
    return (
        <>
            <p className="text-dark p-3 display-6">{props.texto}</p>
            <div className="border border-black p-5">
                {props.children}
            </div>
        </>
        
    )
}
const LogoCoder = () => {
    return (
        <h1 className="bg-dark text-warning">CODERHOUSE</h1>
    )
}


const CompChildren = () => {
    return (
        <div>
            <TextoTitulo>
                <LogoCoder />
            </TextoTitulo>
            <TextoContenido texto = "Estamos viendo como usar el objeto Children">
                <p>Curso de desarrollo web</p>
                <p>Curso de JavaScript</p>
            </TextoContenido>
        </div>

    )
}

export default CompChildren;