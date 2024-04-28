import { useState } from "react"

const CompHOC = ({prop1, prop2}) => {
    return (
        <>
            <h2>{prop1 ? "Soy un componente!" : ""}</h2>
            <button className="btn btn-secondary" onClick={prop2}>Visible / No Visible</button>
        </>
    )
}

const HOC = ({mostrar}) => {
    const [visible, setVisible] = useState(mostrar);

    const hacerVisible = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true);
        }
    }

    return (
        <CompHOC prop1={visible} prop2={hacerVisible} />
    )
}

export default HOC;