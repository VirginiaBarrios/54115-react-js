
const EjemploPromesas = () => {
        const productos = [
            {id:1, nombre: "TCL 40 SE 128 GB twilight purple 4 GB RAM", precio: 219999},
            {id:2, nombre: "Motorola Edge Edge 40 Neo 5G Dual SIM 256 GB soothing sea 8 GB RAM", precio: 799999},
            {id:3, nombre: "Samsung Galaxy A14 (Exynos) 5G Dual SIM 128 GB black 4 GB RAM", precio: 434999},
        ]
    
    const promesa = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000)
    });
    
    promesa.then (data => {
        console.log(data);
    })

    return (
        <>
            <h1>Ejemplo de Promesas</h1>
        </>
    )
}

export default EjemploPromesas;