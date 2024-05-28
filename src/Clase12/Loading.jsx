const Loading = () => {
    return (
        <div className="conteiner">
            <div className="row">
                <div className="col">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;