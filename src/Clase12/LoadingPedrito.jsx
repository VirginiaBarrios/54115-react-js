import pedrito from "../../src/assets/images/mapache-pedro.gif"

const LoadingPedrito = () => {
    return (
        <div className="conteiner d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="row">
                <div className="col">
                    <img src={pedrito} alt="Pedrito" />
                </div>
            </div>
        </div>
    )
}

export default LoadingPedrito;