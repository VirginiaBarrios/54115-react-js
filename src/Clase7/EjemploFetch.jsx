import { useEffect, useState } from "react";

const EjemploFetch = () => {
    const [productos, setProductos] = useState([]);

    useEffect(()=> {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=camisetas&limit=20")
        .then(respuesta => respuesta.json())
        .then(resultado => {
            setProductos(resultado.results);
        })
    },[])
    
    
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    {
                        productos.map(producto => (
                            <div key={producto.id} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-1">
                                        <img src={producto.thumbnail} className="img-fluid rounded-start" alt={producto.title} />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <h5 className="card-title">{producto.title}</h5>
                                            <p className="card-text"><b>{producto.price}</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EjemploFetch;