import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="conteiner-fluid my-5 p-5">
            <div className="row">
                <div className="col text-center">
                    <h1>😫</h1>
                    <h2 className="display-2">Error 404!</h2>
                    <p className="display-5">No se encuentra la pagina que estas buscando!</p>
                    <p><Link to={'/'} className="btn btn-danger">Volver a la pagina principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;