const Promesas = () => {

// Promesa con 2 parametros (resolve, reject)
/*     const tarea = new Promise ((resolve, reject) => {
        const random = Math.round(Math.random() * 1); //genero un numero aleatorio entre 0 y 1

        if(random == 1) {
            resolve("Vamos al cine!");
        } else {
            reject({respuesta: "Negativo", motivo: "No hay plata!"});
        }
    });

    tarea.then(resultado => {
        console.log("Resultado: " + resultado);
    })

    .catch(data => {
        console.log("Motivo del rechazo: (" + data.respuesta + ") " + data.motivo);
    }) */


    //Promesa con un parametro (resolve)
    /* const tarea = new Promise ((res) => {
        res({id: 1, nombre: "Coca Cola", precio: 1800});
    });

    tarea.then(respuesta => {
        console.log(respuesta.nombre + " $" + respuesta.precio);
    }) */


    //Promesa con operadores encadenables
    const tarea = new Promise ((resolve, reject) => {
        const random = Math.round(Math.random() * 1); //genero un numero aleatorio entre 0 y 1

        if(random == 1) {
            resolve("Vamos al cine!");
        } else {
            reject({respuesta: "Negativo", motivo: "No hay plata!"});
        }
    });

    tarea.then(resultado => {
        console.log("Resultado: " + resultado);
    })

    .catch(data => {
        console.log("Motivo del rechazo: (" + data.respuesta + ") " + data.motivo);
    })

    .then(() => {
        console.log("Ejecucion de un proceso #2");
    })

    .then(() => {
        console.log("Ejecucion de un proceso #3");
    })

    .finally(() => {
        console.log("Fin de la ejecucion del programa!");
    })

    return (
        <>
            <h1>Promesas</h1>
        </>
    )
}
export default Promesas;