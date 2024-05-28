import React from "react";

const Memo = React.memo(({item}) => {
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <h1>{item.nombre}</h1>
                    <h3>${item.precio}</h3>
                    <p>{item.marca}</p>
                </div>
            </div>
        </div>
    )

}, (oldProp, newProp) => oldProp.item.fecha === newProp.item.fecha);

export default Memo;