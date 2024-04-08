const Destacados = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card columna1 text-center">
                        <img src="images/sv06-card-reveal-169-es.gif" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Ogerpon y sus máscaras llegan a JCC Pokémon</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card columna2 text-center">
                        <img src="images/sv05-tcgl-169-es.png" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Escarlata y púrpura-Fuerzas Temporales en JCC Pokémon live</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card columna3 text-center">
                        <img src="images/scarlet-violet-169-en.png" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Añade a la Sprigatito de Liko a tu equipo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destacados;