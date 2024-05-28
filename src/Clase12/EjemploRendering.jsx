import { useEffect, useState } from "react";



const EjemploRendering = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    {loading ? <h2 className="text-danger">Cargando...</h2> : <h3 className="text-success">Contenido Listo!</h3>}
                </div>
            </div>
        </div>
    )
    
}

export default EjemploRendering;