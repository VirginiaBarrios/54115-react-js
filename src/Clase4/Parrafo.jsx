const Parrafo = ({contenido1, contenido2, texto, producto}) => {
    let contenido3 = "Esto es un tercer parrafo"; //Esto es una variable
    
    return (
        
        <>
            <p className="bg-light" >{contenido1}</p>
            <p className="bg-light" >{contenido2}</p>
            <p className="bg-light" >{contenido3}</p>
            <p className="bg-light" ><b>{producto.nombre}</b> ${producto.precio}</p>

        </>
        
    )
}

export default Parrafo;