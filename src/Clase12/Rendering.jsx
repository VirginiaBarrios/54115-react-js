const TextComponent1 = ({condicion}) => {
    // Tecnica condicional #1
/*     if (condicion) {
        return (
            <h1 className="text-success">Condicion Verdadera!</h1>
        )
    }
    return (
        <h1 className="text-danger">Condicion Falsa!</h1>
    ) */

    //Tecnica Condicional #2
    /* return (
        <>
            {condicion && <h2>Condicion Verdadera</h2>}
            {!condicion && <h2>Condicion Falsa</h2>}
        </>
        
    )
 */

    //Tecnica Condicional #3 (operador ternario)
    return (
        <h1>{condicion ? "Condicion Verdadera!" : "Condicion Falsa!"}</h1>
    )
}




const Rendering = () => {
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    <TextComponent1 condicion={true} />
                </div>
            </div>
        </div>
    )
}

export default Rendering;