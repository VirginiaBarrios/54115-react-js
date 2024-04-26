const Map = () => {
    const productos = [
        {id:1, nombre: "TCL 40 SE 128 GB twilight purple 4 GB RAM", precio: 219999},
        {id:2, nombre: "Motorola Edge Edge 40 Neo 5G Dual SIM 256 GB soothing sea 8 GB RAM", precio: 799999},
        {id:3, nombre: "Samsung Galaxy A14 (Exynos) 5G Dual SIM 128 GB black 4 GB RAM", precio: 434999},
    ]

    const nuevosProductos = productos.map(item => ({idProducto:item.id, nombreProducto: item.nombre.toUpperCase(), precioProducto: item.precio * 1.1}))
    console.log(nuevosProductos);
    
    
    return (
        <div>
            <h1>Map</h1>
            <ul>
                {nuevosProductos.map(produ => (
                    <li key={produ.idProducto}>
                        <p>Nombre: <b>{produ.nombreProducto}</b><br />Precio: <b>${produ.precioProducto}</b></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Map;