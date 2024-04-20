const DetalleProducto = ({producto}) => {
    return (
        <div className="conteiner my-5">
            <div className="row">
                <div className="col-md-5 text-end">
                    <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{producto.nombre}</h1>
                    <h5>{producto.calorias} kcal</h5>
                    <p>{producto.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto;