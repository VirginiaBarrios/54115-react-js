import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productos = () => {
    
    const arrayProductos =[
        {id:1, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2022/6/7/7489332.jpg", precio:119999 , stock:10, envioGratis:false, categoria:"urbanas"},
        {id:2, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093664.jpg", precio:119999 , stock:10, envioGratis:false, categoria:"urbanas"},
        {id:3, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093704.jpg", precio:119999 , stock:10, envioGratis:false, categoria:"lisas"},
        {id:4, nombre:"Zapatillas U AUTHENTIC", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/10/8086488.jpg", precio:85000 , stock:10, envioGratis:false, categoria:"lisas"},
        {id:5, nombre:"Zapatillas U CLASSIC SLIP-ON", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/14/8096995.jpg", precio:79000 , stock:10, envioGratis:false, categoria:"urbanas"},
        {id:6, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093533.jpg", precio:135000 , stock:10, envioGratis:true, categoria:"botitas"},
        {id:7, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/6/5/8449887.jpg", precio:135000 , stock:10, envioGratis:true, categoria:"botitas"},
        {id:8, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2024/4/11/9522416.jpg", precio:135000 , stock:10, envioGratis:true, categoria:"botitas"}
    ]

    const { idCategoria } = useParams();

    const [productos, setProductos] = useState(arrayProductos);
    const [mensajeError, setMensajeError] = useState("");

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            const productosFiltro = idCategoria ? arrayProductos.filter(item => item.categoria === idCategoria) : arrayProductos;
            if (productosFiltro.length > 0) {
                resolve(productosFiltro);
                setMensajeError("");
            } else {
                setProductos([]);
                reject("Error! No se encontraron productos con esa Categoría");
            }
        });

        promesa.then(resultado => {
            setProductos(resultado);
        }).catch(motivo => {
            setMensajeError(motivo);
        });

    }, [idCategoria]);

    return (
        <div className="container my-5">
            <div className="row my-5">
                {productos.map(item => (
                    <div key={item.id} className="col-md-3">
                        <div className="card border-0">
                            <img src={item.imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center"><b>{item.nombre}</b><br />${item.precio}</p>
                                <p className="text-center">{item.envioGratis ? <span className="text-white bg-dark p-2">ENVIO GRATIS</span> : ""}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col">
                    {mensajeError && <div className="alert alert-danger text-center" role="alert">{mensajeError}</div>}
                </div>
            </div>
        </div>
    );
}

export default Productos;