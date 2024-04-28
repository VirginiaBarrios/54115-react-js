import UseCount from "./UseCount";


const CompContador = () => {
    const {contador, incrementar, decrementar, reiniciar} = UseCount(1, 1, 5)
    console.log("Contador: " + contador);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                        <button type="button" className="btn btn-danger" onClick={reiniciar}>Reiniciar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CompContador;