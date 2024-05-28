const TextComponent1 = ({condicion, condicion2}) => {
    // Tecnica condicional #1 - Styling

    /* return (
        <h1 style={{color: condicion ? "green" : "red" }}>Styling!</h1>
    ) */

    //Tecnica Condicional #2 - Clases
    /* return (
        <h1 className={condicion ? "text-success bg-dark" : "text-white bg-danger" }>Clases!</h1>
    ) */

    //Tecnica Condicional #3 (Multi clases)
    /* return (
        <h1 className={`${colorFuente ? "text-success" : "text-danger"} ${colorFondo ? "bg-dark" : "bg-Light"}`}>Clases!</h1>
    ) */

    //Tecnica Condicional #3 (Multi clases)
    /* return (
        <h1 className={`${colorFuente === 1 ? "text-success" : colorfuente === 2 ? "text-danger" : ""}`}>Clases!</h1>
    ) */

    // Tecnica Condicional - PRops dinamicas (usamos el operador spread)
    const valor = condicion  ? {
        className: condicion2 ? "text-success" : "text-danger",
        title:condicion2 ? "Este es el titulo" : "Aca no hay titulo"
    } : {};
    
    return (
        <h1 {...valor}>Mi contenido HTML</h1>
    )

}




const Rendering2 = () => {
    return (
        <div className="conteiner-fluid">
            <div className="row">
                <div className="col">
                    <TextComponent1 condicion={true} condicion2={true} />
                </div>
            </div>
        </div>
    )
}

export default Rendering2;