import Pokemon from "./assets/images/sv05-launch-875-es.png"

const Hero = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <img src={Pokemon} alt="Pokemon" className="img-fluid"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col text-center colorTurquesa p-3">
                    <h3 className="text-white">Nuevos Pokémon Paradoja distorcionan el espacio-tiempo en Escarlata y Púrpura-Fuerzas Temporales</h3>
                    <p>Descubre nuevos Pokémon del pasado y del futuro, el regreso de las poderosas cartas de AS TÁCTICO y mucho más en la próxima expansión de JCC Pokémon.</p>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;